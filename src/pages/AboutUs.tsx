import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <div className="flex items-center justify-center space-x-2 mt-8">
              <div className="bg-white rounded-lg px-6 py-3">
                <nav className="flex items-center space-x-2 text-sm">
                  <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-600 font-medium">About Us</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">ABOUT US</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Company Overview</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Aminisha Organics LLP an indian company dealing in specialty chemicals, has been developing, manufacturing & supplying Persulphate range of products to customers around the world.
                </p>
                <p className="leading-relaxed">
                  AMINISHA has an excellent and expert team of competent leaders which have more than 25 years of successful experience in the field of process.
                </p>
                <p className="leading-relaxed">
                  Our proprietary electrochemical technology is par excellence. The company a state-of-the-art manufacturing campus, strategically located in western India. Best in class Safety, Sustainability initiatives and Regulatory Compliance have precedence over any other company objective.
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Anytime</p>
                    <p className="font-semibold text-gray-900">+91 9428323829</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Manufacturing Facility"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering exceptional chemical solutions that drive innovation and create value for our customers worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To manufacture high-quality specialty chemicals that meet the evolving needs of our customers while maintaining the highest standards of safety, sustainability, and regulatory compliance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in persulfate chemistry, recognized for our innovation, quality, and commitment to creating sustainable solutions that benefit our customers and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Aminisha Organics</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With over 25 years of experience and cutting-edge technology, we deliver excellence in every aspect of our business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                State-of-the-art manufacturing processes ensure the highest quality standards in every product we deliver.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Serving customers worldwide with reliable supply chains and comprehensive technical support.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
              <p className="text-gray-600">
                Continuous research and development to create innovative solutions that meet evolving market needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our expertise and commitment to excellence can benefit your business.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;