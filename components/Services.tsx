'use client';
import Image from 'next/image';
import { motion } from 'motion/react';

const services = [
  {
    icon: '/images/property-listings.png',
    title: 'Manage Property\nListings',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/images/customer-bookings.png',
    title: 'Manage Customer\nBookings',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/images/house-cleaning.png',
    title: 'Schedule House\nCleaning',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/images/guest-reviews.png',
    title: 'Monitor Guest\nReviews',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/images/report-expenses.png',
    title: 'Track & Report\nExpenses',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: '/images/guest-inquiry.png',
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
    <section id="services" className="py-24 w-full bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-[800px] mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-[44px] font-bold mb-6 text-gray-950 tracking-tight">
            Our <span className="text-rose-500">Service</span>
          </h2>
          <p className="text-[15px] md:text-base text-gray-800 font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={item} 
              className="border border-rose-200 rounded-[20px] p-8 hover:shadow-xl transition-all bg-white group hover:-translate-y-1 duration-300 flex flex-col items-start text-left"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 relative mb-6">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
              
              {/* Text Content */}
              <h3 className="text-[22px] font-bold text-gray-900 mb-4 whitespace-pre-line leading-tight">
                {service.title}
              </h3>
              <p className="text-[14px] text-gray-800 font-medium mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-auto">
                <button className="text-rose-500 font-semibold text-[13px] border border-rose-300 rounded-full px-6 py-2 hover:bg-rose-50 transition-colors">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}