import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket } from 'lucide-react';

export default function UpcomingProjects() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center justify-center">
            <Rocket className="w-8 h-8 mr-2 text-blue-500" />
            Upcoming Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://i.ibb.co/nMcXXgk/Whats-App-Image-2024-11-21-at-01-00-45-fd02fac9.jpg"
                alt="Food Cart"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-left"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ministry of Cheese is Entering the B2C Segment!
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                We are thrilled to announce our upcoming project—our very own chain of food carts! 
                These carts will serve fried snacks such as chicken nuggets, chicken cheese balls, 
                chicken momos, French fries, veg cheese balls, and veg momos.
              </p>
              <p className="text-lg text-gray-700">
                Starting with five carts at five different locations in Hyderabad, 
                we're bringing you the perfect combination of quality and flavor. 
                Launch scheduled for early December 2024!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}