import Razorpay from 'razorpay';
import { Resend } from 'resend';
import {
  getProgramFeeInPaise,
  getProgramFeeInRupees,
  getRequiredEnv,
  buildPaymentLinkEmailHtml,
} from './_lib/payment-utils.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const { studentName, age, email, phone, school, motivation } = req.body || {};

    if (!studentName || !email || !phone || !age || !school) {
      res.status(400).json({ message: 'Please fill in all required fields.' });
      return;
    }

    const razorpay = new Razorpay({
      key_id: getRequiredEnv('RAZORPAY_KEY_ID'),
      key_secret: getRequiredEnv('RAZORPAY_KEY_SECRET'),
    });

    const amountInPaise = getProgramFeeInPaise();
    const amountInRupees = getProgramFeeInRupees();

    // Create a Razorpay Payment Link with form data stored in notes
    const paymentLink = await razorpay.paymentLink.create({
      amount: amountInPaise,
      currency: 'INR',
      description: 'Young Risers Program Enrollment',
      customer: {
        name: studentName,
        email,
        contact: phone,
      },
      notes: {
        studentName,
        age: String(age),
        email,
        phone,
        school,
        motivation: String(motivation || '').slice(0, 250),
        program: 'Young Risers',
      },
      reminder_enable: true,
      callback_url: `${getRequiredEnv('APP_BASE_URL')}/young-risers/enroll?payment=success`,
      callback_method: 'get',
    });

    // Send email to user with form details + payment link
    const resend = new Resend(getRequiredEnv('RESEND_API_KEY'));
    const from = getRequiredEnv('PAYMENT_MAIL_FROM');

    const { data: emailData, error: emailError } = await resend.emails.send({
      from,
      to: [email],
      subject: 'GrowSnaps Young Risers – Review Details & Complete Payment',
      html: buildPaymentLinkEmailHtml({
        formData: { studentName, age, email, phone, school, motivation },
        paymentLink: paymentLink.short_url,
        amountInRupees,
      }),
    });

    if (emailError) {
      console.error('Resend email error:', JSON.stringify(emailError));
      res.status(500).json({
        message: `Payment link created but email failed: ${emailError.message || 'Unknown email error'}. Your payment link: ${paymentLink.short_url}`,
      });
      return;
    }

    res.status(200).json({
      message: `We've sent an email to ${email} with your enrollment details and a secure payment link. Please check your inbox to complete the payment.`,
    });
  } catch (error) {
    console.error('Submit enrollment error:', JSON.stringify(error, null, 2));

    let errMsg = 'Unable to process enrollment. Please try again.';
    if (error instanceof Error) {
      errMsg = error.message;
    } else if (error?.error?.description) {
      // Razorpay SDK error shape
      errMsg = error.error.description;
    } else if (typeof error === 'string') {
      errMsg = error;
    }

    res.status(500).json({ message: errMsg });
  }
}
