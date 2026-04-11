'use client';
import { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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

  const toggleFaq = (index: number) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false
    })));
  };

  return (
    <section className="py-24 bg-white w-full">
      <div className="max-w-4xl mx-auto px-6">

        {/* FAQ Gray Box */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-[40px] font-bold mb-4 text-gray-900">
              Frequently asked <span className="text-rose-500">questions</span>
            </h2>
            <p className="text-gray-500 text-[16px]">
              Everything you need to know about the product and billing.
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="py-6"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-start text-left gap-4"
                >
                  <span className={`text-[17px] ${faq.open ? 'font-semibold' : 'font-medium'} text-gray-900`}>
                    {faq.q}
                  </span>
                  <motion.div animate={{ rotate: faq.open ? 180 : 0 }}>
                    {faq.open ? (
                      <MinusCircle className="w-6 h-6 text-rose-500" strokeWidth={1.5} />
                    ) : (
                      <PlusCircle className="w-6 h-6 text-rose-500" strokeWidth={1.5} />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {faq.open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-500 mt-3 pr-10 text-[15px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Gray Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 text-center"
        >
          <div className="flex justify-center -space-x-3 mb-5">
            <Image className="w-12 h-12 rounded-full border-2 border-white object-cover" src="/images/Avatar.png" alt="Avatar" width={48} height={48} />
            <Image className="w-12 h-12 rounded-full border-2 border-white object-cover z-10" src="/images/Avatar1.png" alt="Avatar 1" width={48} height={48} />
            <Image className="w-12 h-12 rounded-full border-2 border-white object-cover" src="/images/Avatar2.png" alt="Avatar 2" width={48} height={48} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Still have Questions?
          </h3>

          <p className="text-gray-500 text-[15px] mb-6">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>

          <button className="bg-rose-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-rose-600 transition cursor-pointer">
            Get in touch
          </button>
        </motion.div>

      </div>
    </section>
  );
}