'use client';
import { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialFaqs = [
  {
    q: 'Is there a free trial available?',
    a: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    open: true
  },
  { q: 'Can I change my plan later?', a: 'Yes, you can upgrade or downgrade your plan at any time.', open: false },
  { q: 'What is your cancellation policy?', a: 'You can cancel your subscription at any time without penalty.', open: false },
  { q: 'Can other info be added to an invoice?', a: 'Yes, you can add custom information to your invoices from the billing settings.', open: false },
  { q: 'How does billing work?', a: 'We bill you monthly or yearly depending on your chosen plan. Payments are processed securely via Stripe.', open: false },
  { q: 'How do I change my account email?', a: 'You can change your account email from your profile settings page.', open: false },
];

export default function FAQ() {
  const [faqs, setFaqs] = useState(initialFaqs);

  const toggleFaq = (index) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false
    })));
  };

  return (
    <section className="py-24 bg-white overflow-hidden w-full relative">
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* Header Section (Centered) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-[40px] font-bold mb-4 text-gray-900 tracking-tight leading-[1.15]">
            Frequently asked questions
          </h2>
          <p className="text-[16px] text-gray-500 leading-relaxed">
            Everything you need to know about the product and billing.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col mb-16">
          {faqs.map((faq, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.4, delay: i * 0.1 }}
              key={i} 
              className="border-b border-gray-200 py-6 first:pt-0"
            >
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full flex items-start justify-between text-left gap-4 group cursor-pointer"
              >
                <span className={`text-[17px] leading-snug transition-colors ${faq.open ? 'font-semibold text-gray-900' : 'font-medium text-gray-900'}`}>
                  {faq.q}
                </span>
                <div className="shrink-0 mt-0.5">
                  <motion.div animate={{ rotate: faq.open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {faq.open ? (
                      <MinusCircle className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                    ) : (
                      <PlusCircle className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                    )}
                  </motion.div>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {faq.open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 mt-3 pr-10 text-[15px] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions box (Centered at bottom) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <div className="flex justify-center -space-x-3 mb-5">
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm relative z-10" src="/images/Avatar.png" alt="Avatar 1" />
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm relative z-20" src="/images/Avatar1.png" alt="Avatar 2" />
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm relative z-30" src="/images/Avatar2.png" alt="Avatar 3" />
          </div>
          <h3 className="font-semibold text-[18px] text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-500 text-[15px] mb-8 leading-relaxed">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <button className="bg-rose-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-rose-600 transition-all active:scale-95">
            Get in touch
          </button>
        </motion.div>

      </div>
    </section>
  );
}