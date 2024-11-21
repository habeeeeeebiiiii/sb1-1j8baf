import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-yellow-400" />
              <p>+91 9353994283</p>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
              <p className="text-sm">
                Beside NMDC - Vijaya Nagar Colony Road, NMDC Colony, Venkatadri Colony, Masab Tank, Hyderabad, Telangana 500004
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/ministryofcheese_/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://wa.link/bziy96"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-green-600 p-2 rounded-full"
              >
                <MessageCircle className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Thank You!</h3>
              <p className="text-gray-300">
                Thank you for choosing Ministry of Cheese – We look forward to serving you again soon!
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Ministry of Cheese. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}