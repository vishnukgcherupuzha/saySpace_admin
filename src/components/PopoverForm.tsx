import React, { useState, useRef, useEffect } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendSimpleEmail } from '../lib/emailService';

interface PopoverFormProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  submitButtonText?: string;
  successMessage?: string;
  className?: string;
  onSuccess?: () => void;
}

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const PopoverForm: React.FC<PopoverFormProps> = ({
  children,
  title = "Get in Touch",
  subtitle = "Fill out the form below and we'll get back to you soon.",
  submitButtonText = "Send Message",
  successMessage = "Thank you! Your message has been sent successfully.",
  className = "",
  onSuccess
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        triggerRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Compose message with form data
      const composedMessage = `
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}

Message:
${formData.message}
      `.trim();

      await sendSimpleEmail(formData.name, composedMessage);

      setSubmitStatus('success');
      onSuccess?.();

      // Reset form and close popover after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: ''
        });
        setSubmitStatus('idle');
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <>
      {/* Trigger */}
      <div ref={triggerRef} className={className} onClick={() => setIsOpen(true)}>
        {children}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          
          {/* Popover */}
          <div
            ref={popoverRef}
            className="bg-white w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 text-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 text-left">
              {/* Name */}
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Mobile
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                  placeholder="Enter your mobile number (optional)"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 font-semibold text-base transition-all duration-200 ${
                  isFormValid && !isSubmitting
                    ? 'bg-logo-teal text-white hover:bg-logo-teal/90 shadow-sm hover:shadow-md cursor-pointer'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {submitButtonText}
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center p-4 bg-green-50 border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-green-800 text-sm">{successMessage}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center p-4 bg-red-50 border border-red-200">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-red-800 text-sm">
                    Sorry, there was an error sending your message. Please try again.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopoverForm;