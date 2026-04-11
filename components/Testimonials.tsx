'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: 'Jenny Wilson',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: '/images/jenny.png',
    rating: 4,
  },
  {
    name: 'Esther Howard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: '/images/esther.png',
    rating: 5,
  },
  {
    name: 'Robert Fox',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: '/images/robert.png',
    rating: 4,
  },
  {
    name: 'Wade Warren',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: '/images/jenny.png',
    rating: 5,
  },
];

const CARD_W = 370;
const GAP = 24;

export default function Testimonials() {
  const [current, setCurrent] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const applyOffset = (idx: number) => {
    if (!outerRef.current || !trackRef.current) return;
    const w = outerRef.current.offsetWidth;
    const offset = (w - CARD_W) / 2 - idx * (CARD_W + GAP);
    trackRef.current.style.transform = `translateX(${offset}px)`;
  };

  useEffect(() => {
    const timer = setTimeout(() => applyOffset(current), 30);
    const onResize = () => applyOffset(current);
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, [current]);

  return (
    <section id="reviews" className="py-20 bg-white overflow-hidden w-full">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-6 mb-14"
      >
        <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 mb-4">
          Check Our Clients <span className="text-rose-500">Review</span>
        </h2>
        <p className="text-gray-500 max-w-[560px] mx-auto text-[14.5px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </motion.div>

      <div
        ref={outerRef}
        className="w-full overflow-hidden"
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (dx < -40 && current < reviews.length - 1) setCurrent((c) => c + 1);
          if (dx > 40 && current > 0) setCurrent((c) => c - 1);
        }}
      >
        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            gap: GAP,
            transition: 'transform 0.42s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'translateX(0px)',
            paddingTop: '20px',
            paddingBottom: '28px',
          }}
        >
          {reviews.map((review, i) => {
            const isActive = i === current;
            return (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                style={{ width: CARD_W, minWidth: CARD_W }}
                className={`shrink-0 flex gap-4 items-start p-6 rounded-2xl cursor-pointer
                  transition-colors duration-300
                  ${isActive
                    ? 'bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)]'
                    : 'bg-gray-100'
                  }`}
              >
                <div className="relative w-[68px] h-[68px] shrink-0 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 text-[17px] mb-1.5 leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-3">
                    {review.text}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-4 h-4 ${
                          j < review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      {/* <div className="flex justify-center gap-2 mt-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-rose-500 w-6' : 'bg-gray-300 w-2'
            }`}
          />
        ))}
      </div> */}
    </section>
  );
}