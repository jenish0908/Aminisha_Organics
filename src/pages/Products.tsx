import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Products</h1>
            <p className="text-xl text-gray-300 mb-8">We're Delivering the Best Products & Solutions</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ammonium Persulfate */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Ammonium Persulfate"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ammonium Persulfate</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ammonium Persulfate is a white, crystalline, odourless salt with a density of 1.98 g/cc. It is used as an initiator (source of free radicals) for the polymerization of monomers and as a strong oxidizing agent in many applications.
                </p>
                <Link
                  to="/products/ammonium-persulfate"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sodium Persulfate */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Sodium Persulfate"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Sodium Persulfate</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Sodium Persulfate is a white, crystalline, odourless salt or powder with the density of 2.59 g/cc. It is used as initiator for the Polymerization of monomers and as a strong oxidizing agent in many applications.
                </p>
                <Link
                  to="/products/sodium-persulfate"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Applications</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our persulfate products serve a wide range of industries and applications, delivering reliable performance and exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Polymerization</h3>
              <p className="text-gray-600">
                Used as initiators for polymerization reactions in the production of various polymers and synthetic materials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Electronics</h3>
              <p className="text-gray-600">
                Essential for PCB manufacturing and electronic component production processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Textile Industry</h3>
              <p className="text-gray-600">
                Used in textile processing and dyeing applications for optimal results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Water Treatment</h3>
              <p className="text-gray-600">
                Effective oxidizing agent for water treatment and purification processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Cosmetics</h3>
              <p className="text-gray-600">
                Safe and effective ingredient in hair bleaching and cosmetic formulations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Industrial Cleaning</h3>
              <p className="text-gray-600">
                Powerful oxidizing agent for industrial cleaning and surface treatment applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our technical team is ready to help you find the perfect solution for your specific requirements.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;