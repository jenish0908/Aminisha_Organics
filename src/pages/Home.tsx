import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Award, Shield, Zap, Factory, Beaker, Truck, Building2, Cpu, Wrench, Users, HardHat, TreePine } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600&h=800&fit=crop",
      title: "Quality Chemical Solutions",
      subtitle: "Leading manufacturer of specialty chemicals"
    },
    {
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1600&h=800&fit=crop",
      title: "Advanced Manufacturing",
      subtitle: "State-of-the-art production facilities"
    },
    {
      image: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1600&h=800&fit=crop",
      title: "Global Excellence",
      subtitle: "Serving customers worldwide with quality products"
    }
  ];

  const industries = [
    { name: "Aerospace & Defense", icon: <Factory className="w-8 h-8" /> },
    { name: "Agriculture", icon: <TreePine className="w-8 h-8" /> },
    { name: "Animal Nutrition", icon: <Beaker className="w-8 h-8" /> },
    { name: "Dyes & Textile", icon: <Truck className="w-8 h-8" /> },
    { name: "Electronics", icon: <Cpu className="w-8 h-8" /> },
    { name: "Hair Care", icon: <Users className="w-8 h-8" /> },
    { name: "Human Nutrition", icon: <Building2 className="w-8 h-8" /> },
    { name: "Industrial", icon: <Wrench className="w-8 h-8" /> },
    { name: "Oil & Gas", icon: <HardHat className="w-8 h-8" /> },
    { name: "Pharmaceuticals", icon: <Shield className="w-8 h-8" /> },
    { name: "Polymer", icon: <Zap className="w-8 h-8" /> }
  ];

  const news = [
    {
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Heavy stocked finding the best products",
      date: "AUG 15, 2019",
      category: "Business"
    },
    {
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Attract and retain quality high paying customers",
      date: "AUG 15, 2019",
      category: "Business"
    },
    {
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Solutions for all small and large businesses",
      date: "AUG 15, 2019",
      category: "Business"
    },
    {
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Future where technology creates good jobs",
      date: "AUG 15, 2019",
      category: "Business"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <Link
                  to="/products"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <span>Our Products</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Our Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-500 text-white p-8 rounded-lg text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality & Compliance System</h3>
            </div>
            <div className="bg-blue-500 text-white p-8 rounded-lg text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Centricity</h3>
            </div>
            <div className="bg-blue-500 text-white p-8 rounded-lg text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Excellence Rating"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aminisha Organics LLP an indian company dealing in specialty chemicals, has been developing, manufacturing & supplying Persulphate range of products to customers around the world.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <Link 
                  to="/about"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  READ MORE
                </Link>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-600">+91 9428323829</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We are always happy to connect with industry peers, with supportive vendors, with creative researchers, and the good that see a potential to build a synergy with us!
          </h2>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block mt-8"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Ammonium Persulfate"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Ammonium Persulfate</h3>
                <p className="text-gray-600 mb-4">
                  Ammonium Persulfate is a white, crystalline, odourless salt with a density of 1.98 g/cc. It is used as an initiator for the polymerization of monomers and as a strong oxidizing agent in many applications.
                </p>
                <Link
                  to="/products/ammonium-persulfate"
                  className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center space-x-2"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Sodium Persulfate"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Sodium Persulfate</h3>
                <p className="text-gray-600 mb-4">
                  Sodium Persulfate is a white, crystalline, odourless salt or powder with the density of 2.59 g/cc. It is used as initiator for the Polymerization of monomers and as a strong oxidizing agent in many applications.
                </p>
                <Link
                  to="/products/sodium-persulfate"
                  className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center space-x-2"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Products */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We're Delivering the Best Products & Solutions
          </h2>
          <Link
            to="/products"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block mt-8"
          >
            OUR PRODUCTS
          </Link>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries Served</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {industry.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-700">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">News & Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {news.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-4 mb-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{article.date}</p>
                  <Link
                    to="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center space-x-2"
                  >
                    <span>READ MORE</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;