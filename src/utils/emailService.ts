// Email service configuration and utilities
// This file contains helper functions for email operations

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  product?: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to send email');
    }

    return await response.json();
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};

export const validateContactForm = (formData: ContactFormData): string[] => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('Name is required');
  }

  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.message.trim()) {
    errors.push('Message is required');
  }

  return errors;
};