# Razorpay + Email Enrollment Setup

This project uses a two-step enrollment flow:

1. The student fills the enrollment form and submits it.
2. The app creates a **Razorpay Payment Link** and emails the student their details + the payment link.
3. The student reviews the email and clicks the link to pay at their convenience.
4. After payment, Razorpay fires a **webhook** to the server.
5. The webhook sends two emails:
   - **Admin email** to GrowSnaps with full registration + payment details.
   - **Confirmation email** to the student confirming their payment.

## What Was Added

- Frontend enrollment form in `src/pages/EnrollPage.tsx`
- Enrollment submission + payment link creation in `api/submit-enrollment.js`
- Razorpay webhook handler in `api/razorpay-webhook.js`
- Shared helpers in `api/_lib/payment-utils.js`

## Step 1: Create Razorpay Keys

1. Log in to the Razorpay Dashboard.
2. Go to Account & Settings -> API Keys.
3. Generate a `Key ID` and `Key Secret`.
4. Keep the `Key Secret` server-side only.

## Step 2: Set Up Razorpay Webhook

1. In Razorpay Dashboard, go to **Account & Settings -> Webhooks**.
2. Click **Add New Webhook**.
3. Set the URL to: `https://<your-domain>/api/razorpay-webhook`
4. Select the event: **payment_link.paid**
5. Set a **Webhook Secret** — you'll add this to your env vars as `RAZORPAY_WEBHOOK_SECRET`.

## Step 3: Set the Program Fee

Choose the enrollment amount in INR. Example: `4999`

You will set that in environment variables in the next step.

## Step 4: Create a Resend Account for Emails

1. Go to `https://resend.com`.
2. Create an account.
3. Verify your sending domain.
4. Create an API key.

## Step 5: Add Environment Variables

Create a `.env.local` file for local work or configure the same keys in Vercel Project Settings.

Use this template:

```env
VITE_YOUNG_RISERS_FEE_INR=4999

RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
YOUNG_RISERS_FEE_INR=4999
APP_BASE_URL=https://your-domain.vercel.app

RESEND_API_KEY=re_xxxxxxxxxx
PAYMENT_MAIL_FROM=GrowSnaps Admissions <admissions@yourdomain.com>
PAYMENT_NOTIFICATION_TO=info@growsnaps.com
```

Notes:

- `RAZORPAY_KEY_SECRET` and `RAZORPAY_WEBHOOK_SECRET` must never go into the frontend.
- `APP_BASE_URL` is the public URL of your site (used for the payment callback redirect).
- `PAYMENT_MAIL_FROM` must use a sender address verified in Resend.
- `PAYMENT_NOTIFICATION_TO` is the mailbox that should receive the enrollment + payment details.

## Step 6: Run the App Locally

Because the enrollment flow uses Vercel serverless functions, use:

```bash
npm install
npm run dev:payments
```

This runs the frontend and the `/api` routes together through Vercel dev.

For local webhook testing, use a tool like **ngrok** to expose your local server:
```bash
ngrok http 3000
```
Then set the ngrok URL as the webhook URL in Razorpay Dashboard temporarily.

## Step 7: Test the Flow

1. Open the Young Risers enrollment page.
2. Fill in the form and click **Submit & Get Payment Link**.
3. Check the student's email for the enrollment details + payment link.
4. Click the payment link and complete the payment in Razorpay test mode.
5. Confirm that:
   - The user is redirected back to the enrollment page with a success message.
   - `PAYMENT_NOTIFICATION_TO` receives an email with full registration + payment details.
   - The student receives a payment confirmation email.

## Step 8: Go Live

1. Add the same environment variables in Vercel.
2. Replace test Razorpay keys with live keys.
3. Update the webhook URL in Razorpay to your production domain.
4. Use a verified production sender domain in Resend.
5. Deploy the project.

## Flow Diagram

```
Student fills form → Submits
    ↓
Server creates Razorpay Payment Link
    ↓
Email sent to student (form details + payment link)
    ↓
Student clicks link → Pays on Razorpay
    ↓
Razorpay webhook fires → /api/razorpay-webhook
    ↓
Admin gets email (registration + payment details)
Student gets email (payment confirmation + support contacts)
```

## Important Limitation

This implementation sends email notifications after payment, but it does not yet store enrollments in a database. The mailbox becomes the source of record.

If you want stronger operational reliability, the next step is to save each enrollment in a database.