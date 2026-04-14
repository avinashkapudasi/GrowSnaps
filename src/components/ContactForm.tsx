import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Button from './Button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  defaultProgram?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ defaultProgram = '' }) => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<FormData>({
    defaultValues: {
      program: defaultProgram,
    },
  });

  const selectedProgram = watch('program');

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        program: data.program,
        subject: data.program === 'Other' ? data.subject : `Inquiry about ${data.program}`,
        message: data.message,
        to_name: 'GrowSnaps Team',
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('Email sent successfully!');
      setSubmitStatus('success');
      setSubmitMessage('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to send message. Please check your connection and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="John Doe"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="john@example.com"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="+91 9030457668"
            {...register('phone', { required: 'Phone number is required' })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
            Interested Program
          </label>
          <select
            id="program"
            className={`w-full px-4 py-3 rounded-lg border ${errors.program ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white`}
            {...register('program', { required: 'Please select a program' })}
          >
            <option value="">Select a program</option>
            <option value="Young Risers">Young Risers</option>
            <option value="Venture Forge">Venture Forge</option>
            <option value="Venture Sprint">Venture Sprint</option>
            <option value="Mentorship">Mentorship</option>
            <option value="Other">Other</option>
          </select>
          {errors.program && (
            <p className="mt-1 text-sm text-red-600">{errors.program.message}</p>
          )}
        </div>
      </div>

      {selectedProgram === 'Other' && (
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="How can we help you?"
            {...register('subject', { required: selectedProgram === 'Other' ? 'Subject is required' : false })}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
          placeholder="Please describe how we can help you..."
          {...register('message', { 
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' }
          })}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit status message */}
      {submitMessage && (
        <div className={`flex items-center gap-2 p-4 rounded-lg ${
          submitStatus === 'success' 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {submitStatus === 'success' ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span>{submitMessage}</span>
        </div>
      )}

      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        disabled={isSubmitting}
        icon={<Send size={18} className="text-[#333333]" />}
        iconPosition="right"
        className="bg-[#F9C800] hover:bg-[#F9C800]/90 text-[#333333]"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;