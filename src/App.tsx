import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import UpcomingProjects from './components/UpcomingProjects';
import FrozenSnacks from './components/FrozenSnacks';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-b from-yellow-400 to-blue-500 min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="hero">
          <Hero />
        </div>
        
        <div id="mission">
          <Mission />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-8"
        >
        </motion.div>

        <div id="upcoming-projects">
          <UpcomingProjects />
        </div>
        
        <div id="frozen-snacks">
          <FrozenSnacks />
        </div>

        <div id="products">
          <Products />
        </div>
        
        <div id="about-us">
          <AboutUs />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;