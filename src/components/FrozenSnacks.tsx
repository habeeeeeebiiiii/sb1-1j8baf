import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingBag } from 'lucide-react';

const products = [
  { name: "Chicken Mini Kievs 1Kg", image: "https://i.ibb.co/gFD7tL5/Chicken-Mini-Kievs-1.png" },
  { name: "Chicken Nuggets 1Kg", image: "https://i.ibb.co/HqfXzzm/Chicken-Nuggets-1.png" },
  { name: "Chicken Sausage 1Kg", image: "https://i.ibb.co/4KqjFFr/Chicken-Sausage-1.png" },
  { name: "Chicken Tikka 1Kg", image: "https://i.ibb.co/7rXYTNY/Chicken-Tikka-1.png" },
  { name: "Crispy Chicken Fries 1Kg", image: "https://i.ibb.co/M6LpR31/Crispy-Chicken-Fries-1.png" },
  { name: "Chicken Spring Roll 1Kg", image: "https://i.ibb.co/tQyvzDX/Untitled-design-11.png" },
  { name: "Cheese Jalapeño Poppers 1Kg", image: "https://i.ibb.co/ZYB2dPx/Itc-cheese-jalapeno-popers-1kg.jpg" },
  { name: "Chicken Burger Patty 1Kg", image: "https://i.ibb.co/BB4X35P/Chicken-Burger-Patty-1.png" },
  { name: "Chicken Momos 1Kg", image: "https://i.ibb.co/YLs5YP7/cp-food-chicken-momos-1kg.jpg" },
  { name: "Veg Spring Roll 1Kg", image: "https://i.ibb.co/56jw1ng/81-Lk-J5n-Qb3-L.jpg" }
];

const partnerLogos = [
  { url: "https://i.ibb.co/TWmqmKb/1.png", alt: "Partner 1" },
  { url: "https://i.ibb.co/zs2Mc7Z/2.png", alt: "Partner 2" },
  { url: "https://i.ibb.co/Rc2QZ63/3.png", alt: "Partner 3" },
  { url: "https://i.ibb.co/6vtF81p/5.png", alt: "Partner 5" },
  { url: "https://i.ibb.co/dPXzBgB/6.png", alt: "Partner 6" },
  { url: "https://i.ibb.co/RYYMLhX/7.png", alt: "Partner 7" },
  { url: "https://i.ibb.co/qsqDFs7/Untitled-design-10.png", alt: "Partner 8" },
  { url: "https://i.ibb.co/1JW6GyC/Untitled-design-11.png", alt: "Partner 9" },
];

export default function FrozenSnacks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-blue-500 bg-opacity-90 rounded-3xl my-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8 flex items-center justify-center">
            <ShoppingBag className="w-8 h-8 mr-2" />
            Supplying Frozen Snacks to HoReCa
          </h2>
          <p className="text-xl text-white mb-12">
            Currently Serving Frozen Snacks to Hotels, Restaurants, and Cafes in Hyderabad
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              >
                <img src={product.image} alt={product.name} className="w-full h-auto rounded" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{product.name}</h3>
              </motion.div>
            ))}
          </div>

          {/* Scrolling Logo Bar */}
          <div className="bg-white py-0.5 rounded-xl shadow-lg mt-12">
            <div className="relative overflow-hidden px-4">
              <motion.div
                animate={{
                  x: [0, -2400],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                className="flex space-x-24 whitespace-nowrap"
              >
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <img
                    key={index}
                    src={logo.url}
                    alt={logo.alt}
                    className="h-40 w-auto object-contain inline-block"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}