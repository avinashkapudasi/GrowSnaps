import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnrollPage: React.FC = () => {
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
              <p className="text-gray-500">Fill out the form below and we'll get back to you within 48 hours.</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Student Name</label>
                  <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#74B72E] focus:ring-2 focus:ring-[#74B72E]/20 outline-none transition-all text-sm" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Age</label>
                  <input type="number" min={13} max={19} required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#74B72E] focus:ring-2 focus:ring-[#74B72E]/20 outline-none transition-all text-sm" placeholder="13–19" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <input type="email" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#74B72E] focus:ring-2 focus:ring-[#74B72E]/20 outline-none transition-all text-sm" placeholder="student@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                <input type="tel" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#74B72E] focus:ring-2 focus:ring-[#74B72E]/20 outline-none transition-all text-sm" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">School / Institution</label>
                <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#74B72E] focus:ring-2 focus:ring-[#74B72E]/20 outline-none transition-all text-sm" placeholder="Your school or college name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Why do you want to join?</label>
                <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#74B72E] focus:ring-2 focus:ring-[#74B72E]/20 outline-none transition-all text-sm resize-none" placeholder="Tell us about yourself and why you're interested..." />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#74B72E] hover:bg-[#659A26] text-white font-semibold transition-all shadow-md shadow-[#74B72E]/20 hover:shadow-lg"
              >
                <Rocket className="h-4 w-4" /> Submit Application
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnrollPage;
