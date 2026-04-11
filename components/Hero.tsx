'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative w-full px-6 py-20 text-center overflow-hidden min-h-[85vh] flex flex-col justify-center bg-white">
      {/* Background Image (Grid and top gradient) */}
      <div className="absolute inset-0 z-0 bg-[url('/images/Group1.png')] bg-cover bg-top bg-no-repeat opacity-90"></div>

      {/* Decorative Dots (Matched exactly with the design) */}
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-[25%] left-[8%] w-3 h-3 rounded-full bg-indigo-500"></motion.div>
      <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} className="absolute top-[55%] left-[15%] w-3 h-3 rounded-full bg-rose-500"></motion.div>
      <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }} className="absolute bottom-[15%] left-[10%] w-2 h-2 rounded-full bg-yellow-500"></motion.div>
      <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 3.5, delay: 1.5 }} className="absolute top-[15%] left-[50%] w-3 h-3 rounded-full bg-emerald-400"></motion.div>
      <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.8 }} className="absolute bottom-[10%] left-[50%] w-3 h-3 rounded-full bg-cyan-400"></motion.div>
      <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 3.2, delay: 0.2 }} className="absolute top-[35%] right-[10%] w-3 h-3 rounded-full bg-yellow-400"></motion.div>
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2.8, delay: 1.2 }} className="absolute bottom-[25%] right-[8%] w-2 h-2 rounded-full bg-blue-900"></motion.div>
      
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [-20, -15, -20] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-[18%] left-[18%] hidden md:block z-10"
      >
        <Image src="/images/airbnb.png" alt="Airbnb" width={85} height={85} className="object-contain drop-shadow-xl" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [25, 20, 25] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
        className="absolute top-[22%] right-[20%] hidden md:block z-10"
      >
        <Image src="/images/booking.png" alt="Booking.com" width={85} height={85} className="object-contain drop-shadow-xl" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [-15, -20, -15] }} 
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[25%] left-[22%] hidden md:block z-10"
      >
        <Image src="/images/vrbo.png" alt="Vrbo" width={75} height={75} className="object-contain drop-shadow-xl" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [20, 25, 20] }} 
        transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[20%] right-[22%] hidden md:block z-10"
      >
        <Image src="/images/tripadvisor.png" alt="Tripadvisor" width={75} height={75} className="object-contain drop-shadow-xl" />
      </motion.div>

      {/* Main Content Area */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto relative z-20 mt-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-[56px] font-bold text-gray-950 leading-[1.15] mb-6 tracking-tight"
        >
          Airbnb Assistants For <br /> 
          <span className="font-medium md:text-[42px]">Property Management</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[15px] md:text-base text-gray-800 mb-10 max-w-[750px] mx-auto leading-relaxed font-medium"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-5"
        >
          <button className="bg-[#f43f5e] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-rose-600 transition-all flex items-center gap-2 shadow-md active:scale-95 text-[15px] cursor-pointer">
            Schedule A Meeting <span className="text-lg leading-none">&rarr;</span>
          </button>
          <a href="#pricing" className="text-gray-900 text-sm font-semibold inline-block hover:text-rose-500 transition-colors underline underline-offset-4 decoration-[1.5px]">
            See Pricing
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}