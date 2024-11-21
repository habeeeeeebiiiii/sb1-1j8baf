import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';

const images = [
  'https://i.ibb.co/ssMx0c7/240-F-835812982-z-VJJE6bk-Wq-SQr-TSawt-Ps-MLTC6w-Xjy01p.jpg',
  'https://i.ibb.co/DDx8dSb/240-F-953677984-u-Li-VY64uq-SOwfb6-CSs-PKekzljs-BT5-FNL.jpg',
  'https://i.ibb.co/VDpDQN3/240-F-981598570-VAg-I6-IOMEc-Evl7-EAcr-Go-Ym-N6-G26-Ya-HZ6.jpg',
  'https://i.ibb.co/zJ0psH6/240-F-991344676-5-U9-Z4-Ftr7-Smy-TMX3-CXDg-FIq-TDLEw-Rjnp.jpg',
  'https://i.ibb.co/fFRVWF8/240-F-1074308982-LGG86-Y0-YMW1c-Spek-R4s-G1-RIZLhh-Og-Msi.jpg',
  'https://i.ibb.co/94LG5yT/240-F-1080949689-Cv-Dh-Bl-Ao1-HEVdj-PG0snmp60-Ke-LVi04xi.jpg',
  'https://i.ibb.co/dGfcZJj/Adobe-Stock-1056405944-Preview.jpg'
];

export default function Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-blue-500 rounded-3xl my-20 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8 flex items-center justify-center">
            <Heart className="w-8 h-8 mr-2" />
            Our Mission
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-4xl mx-auto text-white mb-12"
          >
            <p className="text-xl leading-relaxed text-justify px-4">
              At <strong>Ministry of Cheese</strong>, we don't just dream big – we dream <em>cheesy</em>! Our mission? To melt hearts, fill bellies, and revolutionize India's snack scene with flavors that pack a punch and crunch. Whether it's our crispy nuggets, oozy cheese balls, or perfectly seasoned fries, we're here to transform snacking into an experience so crave-worthy, you'll ditch boring old bites forever. We believe in a world where every snack is a masterpiece, every munch is magical, and every craving is answered with a burst of cheesy perfection. So, buckle up, India – the snack revolution is here, and it's smothered in cheese! 🧀✨
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: [0, -2400],
              }}
              initial={{ x: 1200 }} // Start from the right
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
              className="flex gap-6"
            >
              {[...images, ...images].map((imageUrl, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform"
                  whileHover={{ y: -10 }}
                >
                  <img
                    src={imageUrl}
                    alt={`Snack ${index + 1}`}
                    className="w-full h-[400px] object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}