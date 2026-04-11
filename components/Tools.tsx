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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  // Expanded array to 9 items to match the 3x3 grid in your design mockup
  const tools = [
    { name: 'PriceLabs', src: '/images/pricelabs.png' },
    { name: 'Wheelhouse', src: '/images/wheelhouse.png' },
    { name: 'Beyond Pricing', src: '/images/beyond-pricing.png' },
    { name: 'Hostfully', src: '/images/hostfully.png' },
    { name: 'Guesty', src: '/images/guesty.png' },
    { name: 'LODGIFY', src: '/images/lodgify.png' },
    { name: 'Hostfully', src: '/images/hostfully.png' },
    { name: 'Guesty', src: '/images/guesty.png' },
    { name: 'LODGIFY', src: '/images/lodgify.png' },
  ];

  return (
    <section id="tools" className="pt-24 bg-white overflow-hidden w-full">
      
      {/* Top Text Section (White Background) */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-[44px] font-bold mb-6 text-gray-950 tracking-tight">
            Our <span className="text-rose-500">Tools</span>
          </h2>
          <p className="text-[14px] md:text-[15px] font-medium text-gray-800 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>
      </div>
      
      {/* Bottom Grid Section (Full-Width Gray Background) */}
      <div className="w-full bg-[#f8f9fa] py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-[1000px] mx-auto"
          >
            {tools.map((tool, i) => (
              <motion.div 
                key={i} 
                variants={item} 
                className={`bg-white rounded-[20px] p-6 flex items-center justify-center hover:-translate-y-1 transition-all duration-300 cursor-pointer h-[110px] md:h-[130px] relative ${
                  i === 0 
                    ? 'shadow-[0_8px_30px_rgb(244,63,94,0.15)] border border-rose-50' // Active pink shadow for the first card
                    : 'shadow-sm hover:shadow-[0_8px_30px_rgb(244,63,94,0.15)] border border-transparent hover:border-rose-50'
                }`}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image 
                    src={tool.src} 
                    alt={tool.name} 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}