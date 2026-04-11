'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function TrustedBy() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-white pt-16 pb-0 overflow-hidden">
      {/* Title Area - White Background */}
      <div className="container mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="text-center text-gray-950 font-semibold text-xl md:text-2xl mb-8 tracking-tight"
        >
          Trusted by leaders in 50+ industries
        </motion.p>
      </div>

      {/* Logos Area - Full Width Gray Band */}
      <div className="w-full bg-[#f8f9fa] py-8">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 transition-all duration-500"
          >
            <motion.div variants={item} className="cursor-pointer hover:scale-105 transition-transform relative w-24 h-8 md:w-28 md:h-10">
              <Image src="/images/airbnb-logo.svg" alt="Airbnb" fill className="object-contain" />
            </motion.div>
            <motion.div variants={item} className="cursor-pointer hover:scale-105 transition-transform relative w-32 h-8 md:w-36 md:h-10">
              <Image src="/images/booking-logo.svg" alt="Booking.com" fill className="object-contain" />
            </motion.div>
            <motion.div variants={item} className="cursor-pointer hover:scale-105 transition-transform relative w-24 h-8 md:w-28 md:h-10">
              <Image src="/images/vrbo-logo.svg" alt="Vrbo" fill className="object-contain" />
            </motion.div>
            <motion.div variants={item} className="cursor-pointer hover:scale-105 transition-transform relative w-32 h-8 md:w-36 md:h-10">
              <Image src="/images/tripadvisor-logo.svg" alt="Tripadvisor" fill className="object-contain" />
            </motion.div>
            <motion.div variants={item} className="cursor-pointer hover:scale-105 transition-transform relative w-24 h-8 md:w-28 md:h-10">
              <Image src="/images/agoda-logo.svg" alt="Agoda" fill className="object-contain" />
            </motion.div>
            <motion.div variants={item} className="cursor-pointer hover:scale-105 transition-transform relative w-28 h-8 md:w-32 md:h-10">
              <Image src="/images/expedia-logo.svg" alt="Expedia" fill className="object-contain" />
            </motion.div>
            <motion.div variants={item} className="cursor-pointer hover:scale-105 transition-transform relative w-24 h-8 md:w-28 md:h-10">
              <Image src="/images/home-to-go-logo.svg" alt="HomeToGo" fill className="object-contain" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}