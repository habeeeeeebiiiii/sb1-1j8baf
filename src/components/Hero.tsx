import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center justify-between"
              >
                <div className="md:w-1/2">
                  <motion.img
                    src="https://i.ibb.co/j8DSPct/MOC.png"
                    alt="Ministry of Cheese"
                    className="w-full h-auto rounded-lg shadow-2xl"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
                  <motion.h1
                    className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Welcome to
                    <span className="block text-yellow-300">Ministry of Cheese</span>
                  </motion.h1>
                  <motion.p
                    className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Discover the finest quality of frozen snacks in Hyderabad
                  </motion.p>
                  <motion.div
                    className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <div className="rounded-md shadow">
                      <a
                        href="https://wa.link/bziy96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                      >
                        Order Now
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}