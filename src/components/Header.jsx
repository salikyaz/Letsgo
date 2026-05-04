import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Weight Loss', path: '/weight-loss' },
    { label: 'Hair Loss', path: '/' },
    { label: 'Sexual Health', path: '/' },
    { label: 'Peptide', path: '/' },
    { label: 'Alpha', path: '/' },
    { label: 'Energize', path: '/' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#1f2a44] to-[#1f6f6b] z-50 border-b border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/Images/logo.png"
              alt="LetsGoMedicine Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-white hover:text-[#f9a826] transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-[#f9a826] text-sm font-medium transition-colors">
              Log in
            </button>
            <button className="bg-[#1E1033] text-[#f9a826] px-6 py-2 rounded-full hover:bg-[#2a1747] transition-colors text-sm font-medium">
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block text-gray-700 hover:text-[#1f6f6b] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 space-y-2 border-t border-gray-200">
                <button className="w-full text-[#1f6f6b] hover:text-[#145a57] py-2 text-center font-medium transition-colors">
                  Log in
                </button>
                <button className="w-full bg-[#1f6f6b] text-white py-3 rounded-full hover:bg-[#145a57] transition-colors font-medium">
                  Get started
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;