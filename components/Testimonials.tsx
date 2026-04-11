'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: 'Jenny Wilson',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: '/images/jenny.png',
    rating: 4
  },
  {
    name: 'Esther Howard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: '/images/esther.png',
    rating: 5
  },
  {
    name: 'Robert Fox',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: '/images/robert.png',
    rating: 4
  },
  {
    name: 'Wade Warren',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: '/images/jenny.png', // Placeholder for 4th item
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden relative w-full z-0">
      
      {/* Soft pink background shape on the right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-rose-50/60 rounded-l-[80px] -z-10 hidden md:block"></div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Navigation Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="md:col-span-5 text-left"
          >
            <h2 className="text-4xl md:text-[48px] font-bold mb-6 text-gray-950 tracking-tight leading-[1.15]">
              Check Our Clients <br />
              <span className="text-rose-500">Review</span>
            </h2>
            <p className="text-[15px] md:text-base font-medium text-gray-600 leading-relaxed mb-10 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="w-14 h-14 rounded-full bg-white shadow-[0_8px_20px_rgb(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-rose-500 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-14 h-14 rounded-full bg-white shadow-[0_8px_20px_rgb(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-rose-500 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Cards Slider */}
          <div className="md:col-span-7 relative">
            <div className="overflow-visible md:overflow-hidden px-4 py-8 -mx-4 md:mx-0">
              <motion.div 
                className="flex gap-6 cursor-grab active:cursor-grabbing"
                animate={{ 
                  x: `calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem)` 
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                {reviews.map((review, i) => (
                  <div 
                    key={i} 
                    className="min-w-[90%] sm:min-w-[400px] md:min-w-[90%] lg:min-w-[420px] shrink-0"
                  >
                    <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 relative h-full flex flex-col">
                      
                      {/* Decorative Quote Icon */}
                      <Quote className="absolute top-8 right-8 w-16 h-16 text-rose-50 fill-rose-50 rotate-180 -z-0" />

                      <div className="relative z-10 flex gap-4 items-center mb-6">
                        {/* Avatar */}
                        <div className="w-[65px] h-[65px] relative shrink-0 rounded-full overflow-hidden bg-gray-100">
                          <Image 
                            src={review.avatar} 
                            alt={review.name} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                        
                        {/* Name and Stars */}
                        <div>
                          <h4 className="font-bold text-[20px] text-gray-950 mb-1">
                            {review.name}
                          </h4>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, j) => (
                              <Star 
                                key={j} 
                                className={`w-4 h-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-[15px] font-medium text-gray-600 leading-relaxed relative z-10">
                        "{review.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}