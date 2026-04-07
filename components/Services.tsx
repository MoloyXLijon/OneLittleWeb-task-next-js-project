'use client';
import Image from 'next/image';
import { motion } from 'motion/react';

const services = [
  {
    icon: '/property-listings.png',
    title: 'Manage Property\nListings',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/customer-bookings.png',
    title: 'Manage Customer\nBookings',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/house-cleaning.png',
    title: 'Schedule House\nCleaning',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/guest-reviews.png',
    title: 'Monitor Guest\nReviews',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/report-expenses.png',
    title: 'Track & Report\nExpenses',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/guest-inquiry.png',
    title: 'Guest Inquiry\n& Support',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 container mx-auto px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-rose-500">Service</span>
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </motion.div>
      <motion.div 
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, idx) => (
          <motion.div key={idx} variants={item} className="border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-rose-100 transition-all bg-white group hover:-translate-y-1 duration-300">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative">
              <Image src={service.icon} alt={service.title} fill className="object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-4 whitespace-pre-line">{service.title}</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
            <button className="text-rose-500 font-medium text-sm border border-rose-500 rounded-full px-6 py-2 hover:bg-rose-50 transition-colors">
              Read More
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}