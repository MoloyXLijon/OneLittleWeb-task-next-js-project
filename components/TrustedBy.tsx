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
    <section className="bg-gray-50 py-10 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-gray-600 font-medium mb-8"
        >
          Trusted by leaders in 50+ industries
        </motion.p>
        <motion.div 
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-500"
        >
          <motion.div variants={item} className="cursor-pointer hover:scale-110 transition-transform relative w-24 h-8">
            <Image src="/airbnb-logo.png" alt="Airbnb" fill className="object-contain" />
          </motion.div>
          <motion.div variants={item} className="cursor-pointer hover:scale-110 transition-transform relative w-32 h-8">
            <Image src="/booking-logo.png" alt="Booking.com" fill className="object-contain" />
          </motion.div>
          <motion.div variants={item} className="cursor-pointer hover:scale-110 transition-transform relative w-24 h-8">
            <Image src="/vrbo-logo.png" alt="Vrbo" fill className="object-contain" />
          </motion.div>
          <motion.div variants={item} className="cursor-pointer hover:scale-110 transition-transform relative w-32 h-8">
            <Image src="/tripadvisor-logo.png" alt="Tripadvisor" fill className="object-contain" />
          </motion.div>
          <motion.div variants={item} className="cursor-pointer hover:scale-110 transition-transform relative w-24 h-8">
            <Image src="/agoda-logo.png" alt="Agoda" fill className="object-contain" />
          </motion.div>
          <motion.div variants={item} className="cursor-pointer hover:scale-110 transition-transform relative w-24 h-8">
            <Image src="/expedia-logo.png" alt="Expedia" fill className="object-contain" />
          </motion.div>
          <motion.div variants={item} className="cursor-pointer hover:scale-110 transition-transform relative w-24 h-8">
            <Image src="/hometogo-logo.png" alt="HomeToGo" fill className="object-contain" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
