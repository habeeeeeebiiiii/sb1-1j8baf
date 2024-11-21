import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Home, Utensils, Info, Package, Heart } from 'lucide-react';

const navItems = [
  { name: 'Home', to: 'hero', icon: Home },
  { name: 'Our Mission', to: 'mission', icon: Heart },
  { name: 'Snackcarts', to: 'upcoming-projects', icon: Utensils },
  { name: 'HoReCa', to: 'frozen-snacks', icon: ShoppingBag },
  { name: 'Products', to: 'products', icon: Package },
  { name: 'About Us', to: 'about-us', icon: Info },
];

const logoAnimation = {
  initial: { y: -100, scale: 0.5 },
  animate: { 
    y: 0,
    scale: [0.5, 1.2, 0.8, 1.1, 0.9, 1], // Multiple scale values for bounce effect
    transition: {
      duration: 1.2,
      times: [0, 0.4, 0.6, 0.7, 0.8, 0.9], // Timing for each scale value
      type: "spring",
      bounce: 0.5,
      stiffness: 200
    }
  },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.2 }
  }
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.img 
            src="https://i.ibb.co/ZxHhW9z/HHJ.png"
            alt="Ministry of Cheese Logo"
            className="h-12 w-auto"
            variants={logoAnimation}
            initial="initial"
            animate="animate"
            whileHover="hover"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className={`nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    scrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-yellow-300'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-1" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-100"
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}