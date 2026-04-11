'use client';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 container mx-auto px-6 overflow-hidden bg-white">
      <div className="bg-rose-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto relative z-0">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-950 leading-tight">
            Few Reasons Why you<br />Choose us?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl text-[15px] md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <ul className="space-y-4 mb-10 text-[15px] md:text-base">
            <li className="flex items-center gap-3.5 font-medium text-gray-800">
              <CheckCircle2 className="w-6 h-6 text-rose-400 shrink-0" /> Brilliant Client Service
            </li>
            <li className="flex items-center gap-3.5 font-medium text-gray-800">
              <CheckCircle2 className="w-6 h-6 text-rose-400 shrink-0" /> Flexibility & Adaptability
            </li>
            <li className="flex items-center gap-3.5 font-medium text-gray-800">
              <CheckCircle2 className="w-6 h-6 text-rose-400 shrink-0" /> We make it Personal
            </li>
            <li className="flex items-center gap-3.5 font-medium text-gray-800">
              <CheckCircle2 className="w-6 h-6 text-rose-400 shrink-0" /> We have experts in our team
            </li>
          </ul>
          
          <button className="bg-rose-500 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-rose-600 transition-all flex items-center gap-2 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:-translate-y-1 duration-300 active:scale-95 text-[15px]">
            Schedule A Meeting <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Right Column (New Image) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 relative w-full h-[450px]"
        >
          <Image 
            src="/images/Group-39928.png" 
            alt="Why choose us illustration" 
            fill 
            className="object-contain" 
          />
        </motion.div>
      </div>
    </section>
  );
}