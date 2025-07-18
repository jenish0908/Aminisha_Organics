import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Twitter, Facebook, Instagram, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

const ContactUs: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preSelectedProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: preSelectedProduct,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail();
  };

  const sendEmail = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          product: preSelectedProduct,
          message: ''
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8">Get in touch with our team</p>
            <div className="flex items-center justify-center space-x-2 mt-8">
              <div className="bg-white rounded-lg px-6 py-3">
                <nav className="flex items-center space-x-2 text-sm">
                  <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-600 font-medium">Contact Us</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">GET IN TOUCH WITH US</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Leave a message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Message */}
                {submitStatus !== 'idle' && (
                  <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span>{statusMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Product (Optional)</option>
                    <option value="Ammonium Persulfate">Ammonium Persulfate</option>
                    <option value="Sodium Persulfate">Sodium Persulfate</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write a Message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'SENDING...' : 'SEND A MESSAGE'}</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Address:</h3>
                <p className="text-gray-600">
                  PLOT NO. DP/123 GIDC SAYKHA,<br />
                  TA. VAGRA, DIST. BHARUCH,<br />
                  GUJARAT – 392140
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">+91 9428323829</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">info@aminishaorganics.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                    <Linkedin className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">
                  PLOT NO. DP/123 GIDC SAYKHA, TA. VAGRA, DIST. BHARUCH, GUJARAT – 392140
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business Hours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to help you during our business hours. For urgent matters, please call us directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-900 font-semibold">9:00 AM - 6:00 PM</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <p className="text-gray-600">Monday - Saturday</p>
              <p className="text-gray-900 font-semibold">8:00 AM - 8:00 PM</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
              <p className="text-gray-600">24/7 Available</p>
              <p className="text-gray-900 font-semibold">+91 9428323829</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;