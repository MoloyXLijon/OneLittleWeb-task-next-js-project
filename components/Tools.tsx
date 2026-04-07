'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Tools() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section id="resources" className="py-20 container mx-auto px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-rose-500">Tools</span>
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </motion.div>
      
      <motion.div 
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        {[
          { name: 'PriceLabs', src: '/pricelabs.png' },
          { name: 'Wheelhouse', src: '/wheelhouse.png' },
          { name: 'Beyond Pricing', src: '/beyond-pricing.png' },
          { name: 'Hostfully', src: '/hostfully.png' },
          { name: 'Guesty', src: '/guesty.png' },
          { name: 'LODGIFY', src: '/lodgify.png' },
          { name: 'Hostfully', src: '/hostfully.png' },
          { name: 'Guesty', src: '/guesty.png' },
          { name: 'LODGIFY', src: '/lodgify.png' },
        ].map((tool, i) => (
          <motion.div key={i} variants={item} className="bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer h-24 relative">
            <Image src={tool.src} alt={tool.name} fill className="object-contain p-4" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
