import crypto from 'node:crypto';

export const SUPPORT_EMAIL = 'info@growsnaps.com';
export const SUPPORT_PHONE = '+91 9030457668';

export const getRequiredEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

export const getProgramFeeInPaise = () => {
  const rawValue = process.env.YOUNG_RISERS_FEE_INR;
  const feeInRupees = Number(rawValue);

  if (!Number.isFinite(feeInRupees) || feeInRupees <= 0) {
    throw new Error('YOUNG_RISERS_FEE_INR must be set to a valid positive number.');
  }

  return Math.round(feeInRupees * 100);
};

export const getProgramFeeInRupees = () => {
  const rawValue = process.env.YOUNG_RISERS_FEE_INR;
  const feeInRupees = Number(rawValue);
  if (!Number.isFinite(feeInRupees) || feeInRupees <= 0) {
    throw new Error('YOUNG_RISERS_FEE_INR must be set to a valid positive number.');
  }
  return feeInRupees;
};

export const verifyRazorpaySignature = ({ orderId, paymentId, signature, secret }) => {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return expectedSignature === signature;
};

/** Verify Razorpay webhook signature (body is the raw JSON string) */
export const verifyWebhookSignature = ({ body, signature, secret }) => {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(expectedSignature, 'hex'),
    Buffer.from(signature, 'hex'),
  );
};

/** Safely escape HTML to prevent XSS in emails */
const esc = (str) => String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Email sent to user after form submission — contains details for review + payment link */
export const buildPaymentLinkEmailHtml = ({ formData, paymentLink, amountInRupees }) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px;">
    <div style="background: linear-gradient(135deg, #74B72E 0%, #5a9622 100%); padding: 24px; border-radius: 12px 12px 0 0;">
      <h2 style="margin: 0; color: #fff;">Young Risers Enrollment</h2>
    </div>
    <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
      <p>Hi ${esc(formData.studentName)},</p>
      <p>Thank you for your interest in the <strong>GrowSnaps Young Risers</strong> program! Please review your details below and complete the payment to confirm your enrollment.</p>

      <h3 style="margin-top: 24px; color: #1a2e05;">Your Details</h3>
      <table style="border-collapse: collapse; width: 100%; margin-top: 8px;">
        <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Name</strong></td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${esc(formData.studentName)}</td></tr>
        <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Age</strong></td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${esc(formData.age)}</td></tr>
        <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Email</strong></td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${esc(formData.email)}</td></tr>
        <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Phone</strong></td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${esc(formData.phone)}</td></tr>
        <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>School</strong></td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${esc(formData.school)}</td></tr>
        <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Why Join</strong></td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${esc(formData.motivation) || '-'}</td></tr>
        <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Program Fee</strong></td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;"><strong>INR ${Number(amountInRupees).toLocaleString('en-IN')}</strong></td></tr>
      </table>

      <div style="text-align: center; margin: 32px 0;">
        <a href="${esc(paymentLink)}" style="display: inline-block; background: #74B72E; color: #fff; text-decoration: none; padding: 14px 36px; border-radius: 8px; font-size: 16px; font-weight: 600;">Complete Payment</a>
      </div>
      <p style="font-size: 13px; color: #6b7280;">If the button doesn't work, copy and paste this link in your browser:<br><a href="${esc(paymentLink)}" style="color: #74B72E; word-break: break-all;">${esc(paymentLink)}</a></p>

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
      <p style="font-size: 13px; color: #6b7280;">If you didn't request this, please ignore this email. For help, contact <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a> or call <a href="tel:${SUPPORT_PHONE.replace(/\s+/g, '')}">${SUPPORT_PHONE}</a>.</p>
      <p style="font-size: 13px; color: #6b7280;">— GrowSnaps Team</p>
    </div>
  </div>
`;

/** Email sent to admin after successful payment (triggered by webhook) */
export const buildAdminEmailHtml = ({ formData, paymentId, paymentLinkId, amountInRupees, currency }) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
    <h2 style="margin-bottom: 16px; color: #1a2e05;">New Young Risers Enrollment &amp; Payment</h2>
    <p>A student completed the Young Risers enrollment payment successfully.</p>
    <table style="border-collapse: collapse; width: 100%; max-width: 720px; margin-top: 16px;">
      <tbody>
        <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Student Name</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${esc(formData.studentName)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Age</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${esc(formData.age)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${esc(formData.email)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${esc(formData.phone)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>School</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${esc(formData.school)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Why Join</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${esc(formData.motivation) || '-'}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Payment ID</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${esc(paymentId)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Payment Link ID</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${esc(paymentLinkId)}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Amount</strong></td><td style="padding: 8px; border: 1px solid #e5e7eb;">${esc(currency)} ${Number(amountInRupees).toLocaleString('en-IN')}</td></tr>
      </tbody>
    </table>
  </div>
`;

/** Confirmation email sent to user after successful payment (triggered by webhook) */
export const buildUserPaymentConfirmationHtml = ({ formData, paymentId, amountInRupees, currency }) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px;">
    <div style="background: linear-gradient(135deg, #74B72E 0%, #5a9622 100%); padding: 24px; border-radius: 12px 12px 0 0;">
      <h2 style="margin: 0; color: #fff;">Payment Confirmed!</h2>
    </div>
    <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
      <p>Hi ${esc(formData.studentName)},</p>
      <p>Your payment of <strong>${esc(currency)} ${Number(amountInRupees).toLocaleString('en-IN')}</strong> for the Young Risers program is confirmed. Your enrollment is now complete!</p>
      <table style="border-collapse: collapse; width: 100%; margin-top: 16px;">
        <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Payment ID</strong></td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${esc(paymentId)}</td></tr>
        <tr><td style="padding: 8px 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Amount</strong></td><td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${esc(currency)} ${Number(amountInRupees).toLocaleString('en-IN')}</td></tr>
      </table>
      <p style="margin-top: 16px;">Our team will be in touch soon with next steps. Need help? Contact us at <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a> or call <a href="tel:${SUPPORT_PHONE.replace(/\s+/g, '')}">${SUPPORT_PHONE}</a>.</p>
      <p>We look forward to having you in the Young Risers program!</p>
      <p>— GrowSnaps Team</p>
    </div>
  </div>
`;