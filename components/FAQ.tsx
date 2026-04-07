'use client';
import { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const initialFaqs = [
  {
    q: 'Is there a free trial available?',
    a: 'Yes, you can try us for free for 30 days. If you want, we\'ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
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

  const toggleFaq = (index: number) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false
    })));
  };

  return (
    <section className="py-20 container mx-auto px-6 max-w-3xl overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently asked <span className="text-rose-500">questions</span>
        </h2>
        <p className="text-gray-600">Everything you need to know about the product and billing.</p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
            key={i} className="border-b border-gray-200 pb-4"
          >
            <button 
              onClick={() => toggleFaq(i)}
              className="w-full flex items-center justify-between text-left font-medium text-gray-900 py-2 hover:text-rose-500 transition-colors"
            >
              {faq.q}
              <motion.div animate={{ rotate: faq.open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {faq.open ? (
                  <MinusCircle className="w-5 h-5 text-rose-500 shrink-0" />
                ) : (
                  <PlusCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </motion.div>
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
                  <p className="text-gray-600 mt-2 pr-8 text-sm leading-relaxed pb-2">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 bg-gray-50 rounded-2xl p-8 text-center"
      >
        <div className="flex justify-center -space-x-2 mb-4">
           <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/seed/f1/100/100" alt="Avatar" />
           <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/seed/f2/100/100" alt="Avatar" />
           <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/seed/f3/100/100" alt="Avatar" />
        </div>
        <h3 className="font-bold text-lg mb-2">Still have Questions?</h3>
        <p className="text-gray-500 text-sm mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button className="bg-rose-500 text-white px-6 py-2 rounded-full font-medium hover:bg-rose-600 transition-all hover:shadow-lg hover:shadow-rose-500/30 active:scale-95">
          Get in touch
        </button>
      </motion.div>
    </section>
  );
}
