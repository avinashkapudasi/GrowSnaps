import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowLeft, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

type EnrollmentFormData = {
  studentName: string;
  age: string;
  email: string;
  phone: string;
  school: string;
  motivation: string;
};

type StatusState = {
  type: 'idle' | 'error' | 'success';
  message: string;
  recipientEmail?: string;
};

const INITIAL_FORM: EnrollmentFormData = {
  studentName: '',
  age: '',
  email: '',
  phone: '',
  school: '',
  motivation: '',
};

const SUPPORT_EMAIL = 'info@growsnaps.com';
const SUPPORT_PHONE = '+91 9030457668';

const EnrollPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const paymentCallback = searchParams.get('payment');

  const [formData, setFormData] = useState<EnrollmentFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<StatusState>({ type: 'idle', message: '' });

  const displayedFee = useMemo(() => {
    const feeValue = Number(import.meta.env.VITE_YOUNG_RISERS_FEE_INR);
    return Number.isFinite(feeValue) && feeValue > 0 ? feeValue : null;
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: 'idle', message: '' });
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-enrollment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.message || 'Something went wrong. Please try again.');
      }

      setStatus({
        type: 'success',
        message: payload.message,
        recipientEmail: formData.email,
      });
      setFormData(INITIAL_FORM);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setStatus({ type: 'error', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  // If user returned from Razorpay after successful payment
  if (paymentCallback === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">Payment Successful!</h1>
              <p className="text-gray-600 mb-2">
                Your enrollment in the Young Risers program is confirmed. You will receive a confirmation email shortly.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                For any questions, contact <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#74B72E] hover:underline">{SUPPORT_EMAIL}</a> or call <a href={`tel:${SUPPORT_PHONE.replace(/\s+/g, '')}`} className="text-[#74B72E] hover:underline">{SUPPORT_PHONE}</a>.
              </p>
              <Link
                to="/young-risers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#74B72E] hover:bg-[#659A26] text-white font-semibold transition-all"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Young Risers
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Link
            to="/young-risers"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#74B72E] text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Young Risers
          </Link>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#74B72E]/10 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-7 w-7 text-[#74B72E]" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply to Young Risers</h1>
              <p className="text-gray-500 max-w-xl mx-auto">
                Fill in your details and we&apos;ll send you an email with a secure payment link to complete your enrollment.
              </p>
            </div>

            <div className="rounded-2xl bg-[#74B72E]/5 border border-[#74B72E]/10 px-5 py-4 mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">How it works</p>
                <p className="text-sm text-gray-600">Submit the form → Check your email → Complete payment via the secure link.</p>
              </div>
              {displayedFee && (
                <div className="inline-flex items-center gap-2 text-[#74B72E] font-semibold whitespace-nowrap">
                  <Mail className="h-4 w-4" />
                  Program Fee: INR {displayedFee.toLocaleString('en-IN')}
                </div>
              )}
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Student Name</label>
                  <input name="studentName" value={formData.studentName} onChange={handleChange} type="text" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#74B72E] focus:ring-2 focus:ring-[#74B72E]/20 outline-none transition-all text-sm" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Age</label>
                  <input name="age" value={formData.age} onChange={handleChange} type="number" min={13} max={19} required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#74B72E] focus:ring-2 focus:ring-[#74B72E]/20 outline-none transition-all text-sm" placeholder="13–19" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <input name="email" value={formData.email} onChange={handleChange} type="email" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#74B72E] focus:ring-2 focus:ring-[#74B72E]/20 outline-none transition-all text-sm" placeholder="student@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                <input name="phone" value={formData.phone} onChange={handleChange} type="tel" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#74B72E] focus:ring-2 focus:ring-[#74B72E]/20 outline-none transition-all text-sm" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">School / Institution</label>
                <input name="school" value={formData.school} onChange={handleChange} type="text" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#74B72E] focus:ring-2 focus:ring-[#74B72E]/20 outline-none transition-all text-sm" placeholder="Your school or college name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Why do you want to join?</label>
                <textarea name="motivation" value={formData.motivation} onChange={handleChange} rows={4} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#74B72E] focus:ring-2 focus:ring-[#74B72E]/20 outline-none transition-all text-sm resize-none" placeholder="Tell us about yourself and why you're interested..." />
              </div>

              {status.type !== 'idle' && (
                <div className={`rounded-2xl border px-4 py-3 text-sm ${status.type === 'success' ? 'border-green-200 bg-green-50 text-green-800' : 'border-red-200 bg-red-50 text-red-800'}`}>
                  <div className="flex items-start gap-3">
                    {status.type === 'success' ? <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" /> : <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />}
                    <div>
                      <p className="font-medium">{status.message}</p>
                      {status.type === 'success' && (
                        <p className="mt-1 text-sm text-green-700">
                          Didn&apos;t get the email? Check your spam folder or contact {SUPPORT_EMAIL}.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#74B72E] hover:bg-[#659A26] disabled:bg-[#74B72E]/70 text-white font-semibold transition-all shadow-md shadow-[#74B72E]/20 hover:shadow-lg disabled:cursor-not-allowed"
              >
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
                {isSubmitting ? 'Submitting...' : 'Submit & Get Payment Link'}
              </button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                After submitting, you will receive an email with your enrollment details and a secure Razorpay payment link. Once you complete the payment, GrowSnaps will be notified automatically.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnrollPage;
