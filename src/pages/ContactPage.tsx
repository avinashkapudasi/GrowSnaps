import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultProgram = searchParams.get('program') || '';

  return (
    <>
      {/* Elegant Page Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-28 pb-12 overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#F9C800]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#74B72E]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-[#F9C800] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <MessageSquare size={14} />
            Get in Touch
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Contact Us
          </h1>
          <p className="text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
            Have questions about our programs? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h2>
                <p className="text-sm text-gray-500 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
                <ContactForm defaultProgram={defaultProgram} />
              </div>
            </div>

            {/* Contact Info Column */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
                <p className="text-sm text-gray-500 mb-8">Reach out to us through any of the following methods.</p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#F9C800]/10 rounded-xl p-3 text-[#F9C800] flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-0.5 text-sm">Phone</h3>
                      <a href="tel:+919030457668" className="text-gray-600 text-sm hover:text-[#F9C800] transition-colors">+91 9030457668</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#74B72E]/10 rounded-xl p-3 text-[#74B72E] flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-0.5 text-sm">Email</h3>
                      <a href="mailto:growsnapsglobalventures@growsnaps.com" className="text-gray-600 text-sm hover:text-[#74B72E] transition-colors">growsnapsglobalventures@growsnaps.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;