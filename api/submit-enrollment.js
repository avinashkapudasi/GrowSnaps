import Razorpay from 'razorpay';
import { Resend } from 'resend';
import {
  getRequiredEnv,
  buildPaymentLinkEmailHtml,
} from './_lib/payment-utils.js';

const ALLOWED_FEES = {
  foundation: 1,
  pro: 25000,
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const { studentName, age, email, phone, school, motivation, courseType, courseName } = req.body || {};

    if (!studentName || !email || !phone || !age || !school) {
      res.status(400).json({ message: 'Please fill in all required fields.' });
      return;
    }

    // Validate course type and fee server-side — never trust the client-supplied fee
    const canonicalFee = ALLOWED_FEES[courseType];
    if (!canonicalFee) {
      res.status(400).json({ message: 'Invalid course selection. Please choose Foundation or Pro.' });
      return;
    }

    const amountInPaise = Math.round(canonicalFee * 100);
    const amountInRupees = canonicalFee;
    const resolvedCourseName = courseName || (courseType === 'pro' ? 'Young Risers — Pro' : 'Young Risers — Foundation');

    const razorpay = new Razorpay({
      key_id: getRequiredEnv('RAZORPAY_KEY_ID'),
      key_secret: getRequiredEnv('RAZORPAY_KEY_SECRET'),
    });

    // Create a Razorpay Payment Link with form data stored in notes
    const paymentLink = await razorpay.paymentLink.create({
      amount: amountInPaise,
      currency: 'INR',
      description: `Young Risers Program Enrollment — ${resolvedCourseName}`,
      customer: {
        name: studentName,
        email,
        contact: phone,
      },
      notes: {
        studentName,
        age: String(age),
        studentEmail: email,
        studentPhone: phone,
        school,
        motivation: String(motivation || '').slice(0, 250),
        program: resolvedCourseName,
        courseType,
      },
      reminder_enable: true,
      callback_url: `${getRequiredEnv('APP_BASE_URL')}/young-risers/enroll?payment=success`,
      callback_method: 'get',
    });

    // Send email to user with form details + payment link
    const resend = new Resend(getRequiredEnv('RESEND_API_KEY'));
    const from = getRequiredEnv('PAYMENT_MAIL_FROM');

    const { error: emailError } = await resend.emails.send({
      from,
      to: [email],
      subject: `GrowSnaps Young Risers — Review Details & Complete Payment (${resolvedCourseName})`,
      html: buildPaymentLinkEmailHtml({
        formData: { studentName, age, email, phone, school, motivation },
        paymentLink: paymentLink.short_url,
        amountInRupees,
        courseName: resolvedCourseName,
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
    console.error('Enrollment submission error:', error);
    res.status(500).json({
      message: error?.message || 'An unexpected error occurred. Please try again.',
    });
  }
}
