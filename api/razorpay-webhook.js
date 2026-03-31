import { Resend } from 'resend';
import {
  verifyWebhookSignature,
  getRequiredEnv,
  buildAdminEmailHtml,
  buildUserPaymentConfirmationHtml,
} from './_lib/payment-utils.js';

/**
 * Razorpay Webhook handler.
 *
 * Configure in Razorpay Dashboard → Settings → Webhooks:
 *   URL:    https://<your-domain>/api/razorpay-webhook
 *   Events: payment_link.paid
 *   Secret: set in RAZORPAY_WEBHOOK_SECRET env var
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    // Razorpay sends the signature in this header
    const signature = req.headers['x-razorpay-signature'];
    if (!signature) {
      res.status(400).json({ message: 'Missing webhook signature.' });
      return;
    }

    const webhookSecret = getRequiredEnv('RAZORPAY_WEBHOOK_SECRET');

    // Vercel parses the body as JSON by default; we need the raw string for HMAC
    const rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);

    const isValid = verifyWebhookSignature({
      body: rawBody,
      signature,
      secret: webhookSecret,
    });

    if (!isValid) {
      console.error('Webhook signature verification failed');
      res.status(400).json({ message: 'Invalid webhook signature.' });
      return;
    }

    const event = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const eventType = event?.event;

    // We only care about successful payment link completions
    if (eventType !== 'payment_link.paid') {
      // Acknowledge other events silently
      res.status(200).json({ message: `Ignored event: ${eventType}` });
      return;
    }

    const paymentEntity = event?.payload?.payment?.entity;
    const paymentLinkEntity = event?.payload?.payment_link?.entity;

    if (!paymentEntity || !paymentLinkEntity) {
      console.error('Webhook payload missing payment or payment_link entity');
      res.status(400).json({ message: 'Malformed webhook payload.' });
      return;
    }

    const paymentId = paymentEntity.id;
    const paymentLinkId = paymentLinkEntity.id;
    const amountInRupees = paymentEntity.amount / 100;
    const currency = paymentEntity.currency || 'INR';

    // Extract form data from the payment link notes (set during enrollment submission)
    const notes = paymentLinkEntity.notes || {};
    const formData = {
      studentName: notes.studentName || 'N/A',
      age: notes.age || 'N/A',
      email: notes.email || '',
      phone: notes.phone || 'N/A',
      school: notes.school || 'N/A',
      motivation: notes.motivation || '',
    };

    const resend = new Resend(getRequiredEnv('RESEND_API_KEY'));
    const from = getRequiredEnv('PAYMENT_MAIL_FROM');
    const notificationTo = getRequiredEnv('PAYMENT_NOTIFICATION_TO');

    // 1) Send admin email with full registration + payment details
    try {
      await resend.emails.send({
        from,
        to: [notificationTo],
        replyTo: formData.email || undefined,
        subject: `Young Risers payment received – ${formData.studentName}`,
        html: buildAdminEmailHtml({
          formData,
          paymentId,
          paymentLinkId,
          amountInRupees,
          currency,
        }),
      });
    } catch (emailError) {
      console.error('Admin email failed:', emailError);
    }

    // 2) Send user a payment confirmation email
    if (formData.email) {
      try {
        await resend.emails.send({
          from,
          to: [formData.email],
          subject: 'Payment Confirmed – Young Risers Enrollment',
          html: buildUserPaymentConfirmationHtml({
            formData,
            paymentId,
            amountInRupees,
            currency,
          }),
        });
      } catch (emailError) {
        console.error('User confirmation email failed:', emailError);
      }
    }

    // Always return 200 so Razorpay doesn't retry
    res.status(200).json({ message: 'Webhook processed successfully.' });
  } catch (error) {
    console.error('Webhook handler error:', error);
    // Return 200 to prevent Razorpay retries on unexpected errors
    res.status(200).json({ message: 'Webhook received.' });
  }
}
