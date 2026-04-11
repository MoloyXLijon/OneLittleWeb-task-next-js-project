'use client';
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

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
    <section id="pricing" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header and Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-[44px] font-bold mb-5 text-gray-950 tracking-tight">
            Airnbn Assistent <span className="text-rose-500">pricing</span>
          </h2>
          <p className="text-gray-800 font-medium mb-12 max-w-xl mx-auto">
            Choose a plan that's right for you
          </p>
          
          {/* Toggle Container */}
          <div className="flex justify-center">
            <div className="flex items-center justify-center gap-4 relative inline-flex">
              <span className={`font-semibold transition-colors ${!isYearly ? 'text-gray-950' : 'text-gray-600'}`}>
                Pay Monthly
              </span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-16 h-8 rounded-full relative transition-colors cursor-pointer flex items-center px-1 border-2 border-rose-500 bg-white"
                style={{ justifyContent: isYearly ? 'flex-end' : 'flex-start' }}
              >
                <motion.span layout className="w-6 h-6 bg-rose-500 rounded-full shadow-sm"></motion.span>
              </button>
              <span className={`font-semibold transition-colors ${isYearly ? 'text-gray-950' : 'text-gray-600'}`}>
                Pay Yearly
              </span>
              
              {/* Save 25% Arrow & Text Fix */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                <div className="w-14 h-10 relative">
                  <Image 
                    src="/images/Arrow2.png" 
                    alt="Arrow" 
                    fill 
                    className="object-contain object-left" 
                  />
                </div>
                <span className="text-rose-500 text-[15px] font-medium whitespace-nowrap -ml-1">
                  Save 25%
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start"
        >
          {/* Freebie Plan */}
          <motion.div variants={item} className="bg-white rounded-3xl p-9 border border-gray-100 shadow-lg hover:shadow-2xl hover:border-rose-100 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3 text-gray-950">Freebie</h3>
            <p className="text-gray-700 text-[13px] font-medium leading-relaxed mb-9">
              Ideal for individuals who need quick access to basic features.
            </p>
            <div className="mb-10 flex items-baseline gap-1.5">
              <span className="text-6xl font-extrabold text-gray-950 tracking-tight">$0</span>
              <span className="text-gray-600 font-semibold">/ Month</span>
            </div>
            <button className="w-full py-3 rounded-full border-2 border-rose-500 text-rose-500 font-semibold mb-10 hover:bg-rose-50 transition-colors active:scale-95">
              Get Started Now
            </button>
            <ul className="space-y-4 text-[13px] font-medium">
              {[
                { text: '20,000+ of PNG & SVG graphics', check: true },
                { text: 'Access to 100 million stock images', check: true },
                { text: 'Upload custom icons and fonts', check: false },
                { text: 'Unlimited Sharing', check: false },
                { text: 'Upload graphics & video in up to 4k', check: false },
                { text: 'Unlimited Projects', check: false },
                { text: 'Instant Access to our design system', check: false },
                { text: 'Create teams to collaborate on designs', check: false },
              ].map((feat, i) => (
                <li key={i} className={`flex items-center gap-3.5 ${feat.check ? 'text-gray-900' : 'text-gray-500'}`}>
                  {feat.check ? (
                    <div className="bg-rose-100 p-1 rounded-full text-rose-500 shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="bg-gray-100 p-1 rounded-full text-gray-400 shrink-0">
                      <X className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                  )}
                  {feat.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Professional Plan - Rose Theme Highlighted */}
          <motion.div 
            variants={item} 
            className="bg-rose-500 rounded-3xl p-9 shadow-2xl transform md:-translate-y-6 transition-all duration-300 relative text-white"
          >
            <h3 className="text-2xl font-bold mb-3">Professional</h3>
            <p className="text-rose-100 text-[13px] font-medium leading-relaxed mb-9">
              Ideal for individuals who need advanced features and tools for client work.
            </p>
            <div className="mb-10 flex items-baseline gap-1.5">
              <span className="text-6xl font-extrabold tracking-tight">${isYearly ? '225' : '25'}</span>
              <span className="font-semibold text-rose-100">/ Month</span>
            </div>
            <button className="w-full py-3 rounded-full bg-white text-rose-500 font-bold mb-10 hover:bg-gray-50 transition-colors active:scale-95 shadow-md">
              Get Started Now
            </button>
            <ul className="space-y-4 text-[13px] font-medium">
              {[
                { text: '20,000+ of PNG & SVG graphics', check: true },
                { text: 'Access to 100 million stock images', check: true },
                { text: 'Upload custom icons and fonts', check: true },
                { text: 'Unlimited Sharing', check: true },
                { text: 'Upload graphics & video in up to 4k', check: true },
                { text: 'Unlimited Projects', check: true },
                { text: 'Instant Access to our design system', check: false },
                { text: 'Create teams to collaborate on designs', check: false },
              ].map((feat, i) => (
                <li key={i} className={`flex items-center gap-3.5 ${feat.check ? 'text-white' : 'text-rose-200'}`}>
                  {feat.check ? (
                    <div className="bg-white p-1 rounded-full text-rose-500 shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="bg-rose-400 p-1 rounded-full text-white shrink-0">
                      <X className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                  )}
                  {feat.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div variants={item} className="bg-white rounded-3xl p-9 border border-gray-100 shadow-lg hover:shadow-2xl hover:border-rose-100 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3 text-gray-950">Enterprise</h3>
            <p className="text-gray-700 text-[13px] font-medium leading-relaxed mb-9">
              Ideal for businesses who need personalized services and security for large teams.
            </p>
            <div className="mb-10 flex items-baseline gap-1.5">
              <span className="text-6xl font-extrabold text-gray-950 tracking-tight">${isYearly ? '900' : '100'}</span>
              <span className="text-gray-600 font-semibold">/ Month</span>
            </div>
            <button className="w-full py-3 rounded-full border-2 border-rose-500 text-rose-500 font-semibold mb-10 hover:bg-rose-50 transition-colors active:scale-95">
              Get Started Now
            </button>
            <ul className="space-y-4 text-[13px] font-medium">
              {[
                '20,000+ of PNG & SVG graphics',
                'Access to 100 million stock images',
                'Upload custom icons and fonts',
                'Unlimited Sharing',
                'Upload graphics & video in up to 4k',
                'Unlimited Projects',
                'Instant Access to our design system',
                'Create teams to collaborate on designs',
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3.5 text-gray-900">
                  <div className="bg-rose-100 p-1 rounded-full text-rose-500 shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>
          
        </motion.div>
        
      </div>
    </section>
  );
}