'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function HowItWorks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" as const } }
  };

  return (
    <section className="py-24 bg-white overflow-hidden w-full relative z-0">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-[800px] mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-[44px] font-bold mb-6 text-gray-950 tracking-tight">
            Getting Started is <span className="text-rose-500">Easy</span>
          </h2>
          <p className="text-[15px] md:text-[16px] font-medium text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>

        {/* Steps Section */}
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-4 max-w-5xl mx-auto relative"
        >
          {/* Horizontal Connecting Line (Desktop) */}
          <motion.div 
            initial={{ scaleX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="hidden md:block absolute top-[60px] left-[16%] right-[16%] border-t-[3px] border-dashed border-rose-200 -z-10 origin-left"
          ></motion.div>

          {/* Step 1 */}
          <motion.div variants={item} className="flex flex-col items-center text-center relative z-10 flex-1 group w-full">
            <div className="w-[120px] h-[120px] relative mb-6 group-hover:-translate-y-2 transition-transform duration-300 bg-white rounded-full flex items-center justify-center">
              <Image 
                src="/images/Group-39878.png" 
                alt="Step 1" 
                width={95} 
                height={95} 
                className="object-contain" 
              />
            </div>
            <h3 className="font-bold text-[19px] text-gray-950 max-w-[240px] leading-snug">
              Add requirements & sign up today
            </h3>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={item} className="flex flex-col items-center text-center relative z-10 flex-1 group w-full">
            <div className="w-[120px] h-[120px] relative mb-6 group-hover:-translate-y-2 transition-transform duration-300 bg-white rounded-full flex items-center justify-center">
              <Image 
                src="/images/Group-39879.png" 
                alt="Step 2" 
                width={95} 
                height={95} 
                className="object-contain" 
              />
            </div>
            <h3 className="font-bold text-[19px] text-gray-950 max-w-[240px] leading-snug">
              Connect with your CSM & onboarding team
            </h3>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={item} className="flex flex-col items-center text-center relative z-10 flex-1 group w-full">
            <div className="w-[120px] h-[120px] relative mb-6 group-hover:-translate-y-2 transition-transform duration-300 bg-white rounded-full flex items-center justify-center">
              <Image 
                src="/images/Group-39881.png" 
                alt="Step 3" 
                width={95} 
                height={95} 
                className="object-contain" 
              />
            </div>
            <h3 className="font-bold text-[19px] text-gray-950 max-w-[240px] leading-snug">
              Meet your STR Assistant next week
            </h3>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}