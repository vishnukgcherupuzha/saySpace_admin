import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_owud71a';
const EMAILJS_TEMPLATE_ID = 'template_oy412oa';
const EMAILJS_PUBLIC_KEY = 'Uxz9eG_Sti_2RUe_n';

// Default recipient email
const DEFAULT_RECIPIENT = "vishnukgcherupuzha@gmail.com,david.ignatius@innovatia.net";

// Interface for email template parameters
export interface EmailTemplateParams {
  name: string;
  message: string;
  date?: string;
  to_email?: string;
}

// Interface for contact form data
export interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  primaryInterest?: string;
  timeframe?: string;
  message: string;
}

/**
 * Sends an email using EmailJS service
 * @param templateParams - Parameters for the email template
 * @returns Promise that resolves when email is sent successfully
 */
export const sendEmail = async (templateParams: EmailTemplateParams): Promise<void> => {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        ...templateParams,
        to_email: templateParams.to_email || DEFAULT_RECIPIENT,
        date: templateParams.date || new Date().toLocaleDateString()
      },
      EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email');
  }
};

/**
 * Sends a contact form email with structured data
 * @param formData - Contact form data
 * @param customRecipient - Optional custom recipient email
 * @returns Promise that resolves when email is sent successfully
 */
export const sendContactFormEmail = async (
  formData: ContactFormData,
  customRecipient?: string
): Promise<void> => {
  // Compose the message with all form data
  const composedMessage = `
Company: ${formData.company || 'Not provided'}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Primary Interest: ${formData.primaryInterest || 'Not specified'}
Expected Timeframe: ${formData.timeframe || 'Not specified'}

Message:
${formData.message}
  `.trim();

  const templateParams: EmailTemplateParams = {
    name: formData.fullName,
    message: composedMessage,
    to_email: customRecipient
  };

  await sendEmail(templateParams);
};

/**
 * Sends a simple email with just name and message
 * @param name - Sender's name
 * @param message - Email message
 * @param customRecipient - Optional custom recipient email
 * @returns Promise that resolves when email is sent successfully
 */
export const sendSimpleEmail = async (
  name: string,
  message: string,
  customRecipient?: string
): Promise<void> => {
  const templateParams: EmailTemplateParams = {
    name,
    message,
    to_email: customRecipient
  };

  await sendEmail(templateParams);
};