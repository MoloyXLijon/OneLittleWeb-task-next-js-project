'use client';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative container mx-auto px-6 py-20 text-center overflow-hidden min-h-[80vh] flex flex-col justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Decorative Elements */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-blue-500"></motion.div>
      <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} className="absolute top-1/3 left-[20%] w-2 h-2 rounded-full bg-rose-500"></motion.div>
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }} className="absolute bottom-1/4 left-[15%] w-2 h-2 rounded-full bg-yellow-500"></motion.div>
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }} transition={{ repeat: Infinity, duration: 3.5, delay: 1.5 }} className="absolute top-1/4 right-[15%] w-2 h-2 rounded-full bg-rose-500"></motion.div>
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.8 }} className="absolute bottom-1/3 right-[10%] w-2 h-2 rounded-full bg-gray-800"></motion.div>
      
      {/* Abstract Shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [-15, -10, -15] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-10 left-[15%] opacity-90 hidden md:block z-10"
      >
        <div className="bg-white p-2 rounded-2xl shadow-lg flex items-center justify-center w-20 h-20 transform -rotate-12">
          <Image src="/images/airbnb.png" alt="Airbnb" width={60} height={60} className="object-contain" />
        </div>
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [15, 20, 15] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
        className="absolute top-20 right-[15%] opacity-90 hidden md:block z-10"
      >
        <div className="bg-white p-2 rounded-2xl shadow-lg flex items-center justify-center w-20 h-20 transform rotate-12">
          <Image src="/images/booking.png" alt="Booking.com" width={60} height={60} className="object-contain" />
        </div>
      </motion.div>
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [20, 25, 20] }} 
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-32 left-[20%] opacity-90 hidden md:block z-10"
      >
        <div className="bg-white p-2 rounded-2xl shadow-lg flex items-center justify-center w-20 h-20 transform rotate-[20deg]">
          <Image src="/vrbo.png" alt="Vrbo" width={60} height={60} className="object-contain" />
        </div>
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [-20, -15, -20] }} 
        transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-20 right-[20%] opacity-90 hidden md:block z-10"
      >
        <div className="bg-white p-2 rounded-2xl shadow-lg flex items-center justify-center w-20 h-20 transform -rotate-[20deg]">
          <Image src="/tripadvisor.png" alt="Tripadvisor" width={60} height={60} className="object-contain" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto relative z-20"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
        >
          Airbnb Assistants For <br /> Property Management
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="bg-rose-500 text-white px-8 py-3 rounded-md font-medium hover:bg-rose-600 transition-all flex items-center gap-2 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:-translate-y-1 duration-300 active:scale-95">
            Schedule A Meeting <ArrowRight className="w-4 h-4" />
          </button>
          <a href="#pricing" className="text-gray-900 font-medium hover:text-rose-500 transition-colors underline underline-offset-4 decoration-2">
            See Pricing
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
