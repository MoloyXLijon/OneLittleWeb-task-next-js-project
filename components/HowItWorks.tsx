'use client';
import { UserPlus, Users, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export default function HowItWorks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" as const } }
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Getting Started is <span className="text-rose-500">Easy</span>
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>

        <motion.div 
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto relative"
        >
          {/* Connecting Line (Desktop) */}
          <motion.div 
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-rose-200 -z-10 border-t-2 border-dashed border-rose-300 origin-left"
          ></motion.div>

          {/* Step 1 */}
          <motion.div variants={item} className="flex flex-col items-center text-center relative bg-gray-50 px-4 group">
            <div className="w-24 h-24 rounded-full border-2 border-rose-500 flex items-center justify-center bg-white mb-6 relative group-hover:bg-rose-50 transition-colors duration-300">
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-rose-500 font-bold text-sm shadow-sm">01</span>
              <UserPlus className="w-10 h-10 text-rose-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-lg max-w-[200px]">Add requirements & sign up today</h3>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={item} className="flex flex-col items-center text-center relative bg-gray-50 px-4 group">
            <div className="w-24 h-24 rounded-full border-2 border-rose-500 flex items-center justify-center bg-white mb-6 relative group-hover:bg-rose-50 transition-colors duration-300">
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-rose-500 font-bold text-sm shadow-sm">02</span>
              <Users className="w-10 h-10 text-rose-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-lg max-w-[200px]">Connect with your CSM & onboarding team</h3>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={item} className="flex flex-col items-center text-center relative bg-gray-50 px-4 group">
            <div className="w-24 h-24 rounded-full border-2 border-rose-500 flex items-center justify-center bg-white mb-6 relative group-hover:bg-rose-50 transition-colors duration-300">
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-rose-500 font-bold text-sm shadow-sm">03</span>
              <Headphones className="w-10 h-10 text-rose-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-lg max-w-[200px]">Meet your STR Assistant next week</h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
