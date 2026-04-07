'use client';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-4 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50"
    >
      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-tighter">
          <span className="text-blue-500">G</span>
          <span className="text-rose-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-rose-500">e</span>
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <Link href="#home" className="text-rose-500 font-medium relative group">
          Home
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-500 transform origin-left scale-x-100 transition-transform"></span>
        </Link>
        <Link href="#about" className="text-gray-600 hover:text-gray-900 relative group">
          About
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </Link>
        <Link href="#services" className="text-gray-600 hover:text-gray-900 relative group">
          Services
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </Link>
        <Link href="#pricing" className="text-gray-600 hover:text-gray-900 relative group">
          Pricing
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </Link>
        <Link href="#blog" className="text-gray-600 hover:text-gray-900 relative group">
          Blog
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </Link>
        <Link href="#resources" className="text-gray-600 hover:text-gray-900 relative group">
          Resources
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </Link>
      </div>
      <div>
        <button className="bg-rose-500 text-white px-6 py-2.5 rounded-full font-medium hover:bg-rose-600 transition-all hover:shadow-lg hover:shadow-rose-500/30 active:scale-95">
          Schedule A Meeting &rarr;
        </button>
      </div>
    </motion.nav>
  );
}
