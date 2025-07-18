import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'ISO 9001',
      description: 'Quality Management System',
      icon: <Award className="w-16 h-16 text-blue-600" />,
      details: 'Demonstrates our commitment to quality management and continuous improvement in all our processes.'
    },
    {
      name: 'ISO 14001',
      description: 'Environmental Management System',
      icon: <Shield className="w-16 h-16 text-green-600" />,
      details: 'Ensures we maintain the highest environmental standards and minimize our ecological footprint.'
    },
    {
      name: 'ISO 45001',
      description: 'Occupational Health & Safety',
      icon: <CheckCircle className="w-16 h-16 text-orange-600" />,
      details: 'Guarantees the safety and health of our workforce through comprehensive management systems.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Certification</h1>
            <p className="text-xl text-gray-300 mb-8">Our commitment to excellence and quality standards</p>
            <div className="flex items-center justify-center space-x-2 mt-8">
              <div className="bg-white rounded-lg px-6 py-3">
                <nav className="flex items-center space-x-2 text-sm">
                  <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-600 font-medium">Certification</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards through internationally recognized certifications that demonstrate our commitment to quality, safety, and environmental responsibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{cert.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Quality Commitment</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These certifications reflect our unwavering dedication to excellence in every aspect of our operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Management</h3>
              <p className="text-gray-600">
                Comprehensive quality management systems ensure consistent product quality and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Environmental Protection</h3>
              <p className="text-gray-600">
                Our environmental management systems minimize ecological impact while maintaining operational efficiency.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety Excellence</h3>
              <p className="text-gray-600">
                Rigorous safety protocols and training programs ensure a safe working environment for all employees.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                Regular audits and reviews ensure our processes continuously evolve and improve over time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Full compliance with all applicable regulations and standards in every market we serve.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                All our quality systems are designed with customer satisfaction and success as the primary objective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality You Can Trust</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our certifications are your assurance of quality, safety, and environmental responsibility in every product and service we provide.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Learn More About Our Quality Standards
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Certifications;