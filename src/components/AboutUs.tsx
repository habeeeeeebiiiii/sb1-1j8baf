import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white bg-opacity-90 rounded-3xl my-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-700 mb-6 text-justify"
            >
              Ministry of Cheese was launched on February 11, 2024, by <strong>Habeeb Ali</strong> with a vision to revolutionize college canteens across India. The goal was to replace outdated and unhygienic setups with modern, hygienic canteens offering high-quality snacks like chicken cheese balls, nuggets, and French fries.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-700 mb-6 text-justify"
            >
              <strong>Habeeb Ali</strong> presented this concept to <strong>EdVenture Park</strong>, a startup incubator, driven by his passion for improving the student dining experience. Under the mentorship of <strong>Meraj Faheem</strong>, founder of <strong>EdVenture Park</strong>, <strong>Habeeb Ali</strong> realized the significant operational and financial challenges of establishing a chain of canteens.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-700 mb-6 text-justify"
            >
              Through discussions and mentorship at the incubator, he identified a more pressing issue: inefficiencies in the supply chain from manufacturers to consumers. The involvement of multiple intermediaries-super stockists, distributors, suppliers, wholesalers, and retailers-led to inflated product costs. This made it difficult for canteen owners to price snacks affordably for budget-conscious college students.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-700 mb-12 text-justify"
            >
              To tackle this problem, <strong>Habeeb Ali</strong> pivoted his approach. He decided to source products directly from manufacturers and supply them to canteens, restaurants, and hotels (HoReCa) at competitive prices. With support from <strong>EdVenture Park</strong> and a dedicated team, <strong>Habeeb Ali</strong> established Ministry of Cheese, which now supplies frozen snacks to over 15 HoReCa establishments in Hyderabad.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col items-center space-y-4"
            >
              <img
                src="https://i.ibb.co/ZxHhW9z/HHJ.png"
                alt="Ministry of Cheese Logo"
                className="h-24 w-auto"
              />
              <p className="text-lg font-medium text-gray-600">Incubated at</p>
              <img
                src="https://i.ibb.co/ck2TDg1/NEW-LOGO-2-0-2.png"
                alt="EdVenture Park Logo"
                className="h-24 w-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}