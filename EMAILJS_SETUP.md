# EmailJS Setup Guide for GrowSnaps Contact Form

This guide will help you set up EmailJS to send contact form submissions to your email.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this sample template:

### Template Content:
```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the GrowSnaps website contact form.
```

### Template Variables:
Make sure your template includes these variables:
- `{{from_name}}` - Contact person's name
- `{{from_email}}` - Contact person's email
- `{{phone}}` - Contact person's phone
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your company name (optional)

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to your contact page
3. Fill out and submit the form
4. Check your email for the message

## Security Notes

- The `.env` file is included in `.gitignore` to keep your credentials secure
- Never commit your actual EmailJS credentials to version control
- For production, set these environment variables in your hosting platform

## Troubleshooting

- **"EmailJS configuration is missing"**: Make sure your `.env` file has the correct variable names with `VITE_` prefix
- **"Failed to send message"**: Check your EmailJS service status and template configuration
- **Email not received**: Check your spam folder and verify your template is correctly configured

## EmailJS Free Tier Limits

- 200 emails per month
- Up to 2 email services
- Up to 1 email template

For higher usage, consider upgrading to a paid plan.
