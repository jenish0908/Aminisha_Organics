import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Phone, Mail, Twitter, Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <span>AMINISHA ORGANICS LLP</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@aminishaorganics.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-2 sm:mt-0">
            <Twitter className="w-4 h-4 hover:text-blue-200 cursor-pointer transition-colors" />
            <Facebook className="w-4 h-4 hover:text-blue-200 cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 hover:text-blue-200 cursor-pointer transition-colors" />
            <Linkedin className="w-4 h-4 hover:text-blue-200 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                alt="Aminisha Organics" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-bold text-green-600">Aminisha Organics LLP</h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive('/') ? 'text-blue-600' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive('/about') ? 'text-blue-600' : ''}`}
              >
                About Us
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                  className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium ${location.pathname.includes('/products') ? 'text-blue-600' : ''}`}
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isProductsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 py-4"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link 
                      to="/products/ammonium-persulfate" 
                      className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Ammonium Persulfate
                    </Link>
                    <Link 
                      to="/products/sodium-persulfate" 
                      className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Sodium Persulfate
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/certifications" 
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive('/certifications') ? 'text-blue-600' : ''}`}
              >
                Certifications
              </Link>
              <Link 
                to="/contact" 
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive('/contact') ? 'text-blue-600' : ''}`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Call Anytime Button */}
            <div className="hidden lg:flex items-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-full">
              <Phone className="w-5 h-5" />
              <div>
                <div className="text-sm font-medium">Call Anytime</div>
                <div className="text-xs">+91 9428323829</div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 border-t pt-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive('/') ? 'text-blue-600' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive('/about') ? 'text-blue-600' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/products/ammonium-persulfate" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ammonium Persulfate
                </Link>
                <Link 
                  to="/products/sodium-persulfate" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sodium Persulfate
                </Link>
                <Link 
                  to="/certifications" 
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive('/certifications') ? 'text-blue-600' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Certifications
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${isActive('/contact') ? 'text-blue-600' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="flex items-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-full">
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="text-sm font-medium">Call Anytime</div>
                    <div className="text-xs">+91 9428323829</div>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;