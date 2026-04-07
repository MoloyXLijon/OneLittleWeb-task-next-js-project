'use client';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 container mx-auto px-6 overflow-hidden">
      <div className="bg-rose-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Few Reasons Why you<br />Choose us?
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 font-medium text-gray-800">
              <CheckCircle2 className="w-6 h-6 text-rose-400" /> Brilliant Client Service
            </li>
            <li className="flex items-center gap-3 font-medium text-gray-800">
              <CheckCircle2 className="w-6 h-6 text-rose-400" /> Flexibility & Adaptibility
            </li>
            <li className="flex items-center gap-3 font-medium text-gray-800">
              <CheckCircle2 className="w-6 h-6 text-rose-400" /> We make it Personal
            </li>
            <li className="flex items-center gap-3 font-medium text-gray-800">
              <CheckCircle2 className="w-6 h-6 text-rose-400" /> We have expart in our team
            </li>
          </ul>
          <button className="bg-rose-500 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-600 transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-rose-500/30 hover:-translate-y-1 duration-300 active:scale-95">
            Schedule A Meeting <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 relative w-full h-[400px]"
        >
          {/* Abstract representation of the right side image */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute inset-0 bg-white rounded-2xl shadow-xl p-4 transform rotate-2"
          >
            <div className="w-full h-48 bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
               <Image src="https://picsum.photos/seed/dashboard/600/400" alt="Dashboard" fill className="object-cover opacity-80" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 bg-gray-50 rounded-xl p-4">
                <div className="w-full h-24 bg-white rounded shadow-sm flex flex-col p-2">
                   <div className="text-xs font-bold mb-2">Calendar</div>
                   <div className="grid grid-cols-7 gap-1 text-[8px] text-center">
                     <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                     <div className="text-gray-300">28</div><div className="text-gray-300">29</div><div className="text-gray-300">30</div><div>1</div><div>2</div><div>3</div><div>4</div>
                     <div>5</div><div>6</div><div>7</div><div>8</div><div className="bg-rose-500 text-white rounded-full">9</div><div>10</div><div>11</div>
                   </div>
                </div>
              </div>
              <div className="w-24 flex flex-col gap-2">
                <div className="bg-rose-500 text-white rounded-xl p-2 flex items-center justify-center h-12">
                  <span className="font-bold text-xs">airbnb</span>
                </div>
                <div className="bg-blue-900 text-white rounded-xl p-2 flex items-center justify-center h-12">
                  <span className="font-bold text-xs">Booking.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
