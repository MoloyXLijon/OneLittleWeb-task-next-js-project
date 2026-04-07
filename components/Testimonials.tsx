'use client';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: 'Jenny Wilson',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: '/jenny.png',
    rating: 4
  },
  {
    name: 'Esther Howard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: '/esther.png',
    rating: 5
  },
  {
    name: 'Robert Fox',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: '/robert.png',
    rating: 4
  }
];

export default function Testimonials() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Check Our Clients <span className="text-rose-500">Review</span>
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>

        <motion.div 
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {reviews.map((review, i) => (
            <motion.div key={i} variants={item} className={`bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow duration-300 ${i === 1 ? 'border-rose-200 shadow-md transform md:-translate-y-4' : 'border-gray-100'}`}>
              <div className="flex gap-4 items-start">
                <Image src={review.avatar} alt={review.name} width={50} height={50} className="rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-gray-500 text-sm mt-2 mb-4">{review.text}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
