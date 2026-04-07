'use client';
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Airnbn Assistent <span className="text-rose-500">pricing</span>
          </h2>
          <p className="text-gray-600 mb-8">Choose a plan that's right for you</p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`font-medium transition-colors ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Pay Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 rounded-full relative transition-colors cursor-pointer flex items-center px-1 border-2 border-rose-500 bg-white"
              style={{ justifyContent: isYearly ? 'flex-end' : 'flex-start' }}
            >
              <motion.span layout className="w-5 h-5 bg-rose-500 rounded-full shadow-sm"></motion.span>
            </button>
            <span className={`font-medium transition-colors ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Pay Yearly</span>
            <motion.span 
              animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}
              className="text-rose-500 text-sm font-medium ml-2 relative inline-block"
            >
              <svg className="absolute -left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-500 transform -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              Save 25%
            </motion.span>
          </div>
        </motion.div>

        <motion.div 
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Freebie */}
          <motion.div variants={item} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2">Freebie</h3>
            <p className="text-gray-500 text-sm mb-6">Ideal for individuals who need quick access to basic features.</p>
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-gray-500">/ Month</span>
            </div>
            <button className="w-full py-3 rounded-md border border-rose-500 text-rose-500 font-medium mb-8 hover:bg-rose-50 transition-colors active:scale-95">
              Get Started Now
            </button>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><div className="bg-rose-100 p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> 20,000+ of PNG & SVG graphics</li>
              <li className="flex items-center gap-3"><div className="bg-rose-100 p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> Access to 100 million stock images</li>
              <li className="flex items-center gap-3 text-gray-400"><div className="bg-gray-100 p-1 rounded-full text-gray-400"><X className="w-3 h-3" strokeWidth={3} /></div> Upload custom icons and fonts</li>
              <li className="flex items-center gap-3 text-gray-400"><div className="bg-gray-100 p-1 rounded-full text-gray-400"><X className="w-3 h-3" strokeWidth={3} /></div> Unlimited Sharing</li>
              <li className="flex items-center gap-3 text-gray-400"><div className="bg-gray-100 p-1 rounded-full text-gray-400"><X className="w-3 h-3" strokeWidth={3} /></div> Upload graphics & video in up to 4k</li>
              <li className="flex items-center gap-3 text-gray-400"><div className="bg-gray-100 p-1 rounded-full text-gray-400"><X className="w-3 h-3" strokeWidth={3} /></div> Unlimited Projects</li>
              <li className="flex items-center gap-3 text-gray-400"><div className="bg-gray-100 p-1 rounded-full text-gray-400"><X className="w-3 h-3" strokeWidth={3} /></div> Instant Access to our design system</li>
              <li className="flex items-start gap-3 text-gray-400"><div className="bg-gray-100 p-1 rounded-full text-gray-400 shrink-0 mt-0.5"><X className="w-3 h-3" strokeWidth={3} /></div> Create teams to collaborate on designs</li>
            </ul>
          </motion.div>

          {/* Professional */}
          <motion.div variants={item} className="bg-rose-500 rounded-3xl p-8 text-white shadow-xl transform md:-translate-y-4 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2">Professional</h3>
            <p className="text-rose-100 text-sm mb-6">Ideal for individuals who who need advanced features and tools for client work.</p>
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold">${isYearly ? '225' : '25'}</span>
              <span className="text-rose-100">/ Month</span>
            </div>
            <button className="w-full py-3 rounded-md bg-white text-rose-500 font-medium mb-8 hover:bg-gray-50 transition-colors active:scale-95 shadow-sm">
              Get Started Now
            </button>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><div className="bg-white p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> 20,000+ of PNG & SVG graphics</li>
              <li className="flex items-center gap-3"><div className="bg-white p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> Access to 100 million stock images</li>
              <li className="flex items-center gap-3"><div className="bg-white p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> Upload custom icons and fonts</li>
              <li className="flex items-center gap-3"><div className="bg-white p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> Unlimited Sharing</li>
              <li className="flex items-center gap-3"><div className="bg-white p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> Upload graphics & video in up to 4k</li>
              <li className="flex items-center gap-3"><div className="bg-white p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> Unlimited Projects</li>
              <li className="flex items-center gap-3 text-rose-100"><div className="bg-rose-400 p-1 rounded-full text-white"><X className="w-3 h-3" strokeWidth={3} /></div> Instant Access to our design system</li>
              <li className="flex items-start gap-3 text-rose-100"><div className="bg-rose-400 p-1 rounded-full text-white shrink-0 mt-0.5"><X className="w-3 h-3" strokeWidth={3} /></div> Create teams to collaborate on designs</li>
            </ul>
          </motion.div>

          {/* Enterprise */}
          <motion.div variants={item} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-500 text-sm mb-6">Ideal for businesses who need personalized services and security for large teams.</p>
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold">${isYearly ? '900' : '100'}</span>
              <span className="text-gray-500">/ Month</span>
            </div>
            <button className="w-full py-3 rounded-md border border-rose-500 text-rose-500 font-medium mb-8 hover:bg-rose-50 transition-colors active:scale-95">
              Get Started Now
            </button>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><div className="bg-rose-100 p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> 20,000+ of PNG & SVG graphics</li>
              <li className="flex items-center gap-3"><div className="bg-rose-100 p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> Access to 100 million stock images</li>
              <li className="flex items-center gap-3"><div className="bg-rose-100 p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> Upload custom icons and fonts</li>
              <li className="flex items-center gap-3"><div className="bg-rose-100 p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> Unlimited Sharing</li>
              <li className="flex items-center gap-3"><div className="bg-rose-100 p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> Upload graphics & video in up to 4k</li>
              <li className="flex items-center gap-3"><div className="bg-rose-100 p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> Unlimited Projects</li>
              <li className="flex items-center gap-3"><div className="bg-rose-100 p-1 rounded-full text-rose-500"><Check className="w-3 h-3" strokeWidth={3} /></div> Instant Access to our design system</li>
              <li className="flex items-start gap-3"><div className="bg-rose-100 p-1 rounded-full text-rose-500 shrink-0 mt-0.5"><Check className="w-3 h-3" strokeWidth={3} /></div> Create teams to collaborate on designs</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
