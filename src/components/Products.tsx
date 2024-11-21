import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Chicken Mini Kievs (Cheese Balls) 1Kg',
    image: 'https://i.ibb.co/gFD7tL5/Chicken-Mini-Kievs-1.png',
    pricing: [
      { quantity: '1-3 Packs', price: '₹450' },
      { quantity: '4-7 Packs', price: '₹425' },
      { quantity: '8-11 Packs', price: '₹400' },
      { quantity: '12+ Packs', price: '₹375' },
    ]
  },
  {
    name: 'Chicken Nuggets 1Kg',
    image: 'https://i.ibb.co/HqfXzzm/Chicken-Nuggets-1.png',
    pricing: [
      { quantity: '1-3 Packs', price: '₹380' },
      { quantity: '4-7 Packs', price: '₹365' },
      { quantity: '8-11 Packs', price: '₹350' },
      { quantity: '12+ Packs', price: '₹335' },
    ]
  }
];

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-yellow-400 rounded-3xl my-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center justify-center">
            <Package className="w-8 h-8 mr-2" />
            Our Products
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-800 mb-8 max-w-4xl mx-auto text-justify px-4"
          >
            Our pricing is designed to cater to a wide range of customers, from large scale businesses to individuals looking for a quick snack. For bulk buyers like restaurants, cafes, and hotels, we offer competitive per-unit pricing that decreases as the order quantity increases, making it highly cost-effective.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl font-semibold text-gray-800 mb-8"
          >
            For Example:
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <div className="space-y-2">
                    {product.pricing.map((price) => (
                      <div 
                        key={price.quantity} 
                        className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                      >
                        <span className="text-gray-600">{price.quantity}</span>
                        <span className="text-lg font-semibold text-gray-900">{price.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-800 mt-12 mb-12 max-w-4xl mx-auto text-justify px-4"
          >
            At the same time, we also welcome smaller orders from individual customers who might want just a single packet to enjoy at home or fry and serve during gatherings with friends and family. Whether you're stocking up for your business or simply craving a delicious, hassle-free snack, we have options tailored to suit your needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <a
              href="https://wa.link/bziy96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <ShoppingCart className="w-6 h-6 mr-2" />
              Order Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}