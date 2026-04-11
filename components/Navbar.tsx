'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      /* Keep the background and shadow full width here */
      className="w-full sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-xl shadow-rose-500/15"
    >
      {/* Move the flex layout, padding, and centering to the inner container */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-tighter">
            <Image src="/images/Google-Logo.wine-1.png" alt="Logo" width={125} height={45} className="object-contain" />
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#home" className="text-rose-500 font-semibold relative group">
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
          {/* Note: I changed rounded-full back to rounded-md to match your uploaded design image exactly */}
          <button className="bg-rose-500 text-white px-6 py-2.5 rounded-md font-medium hover:bg-rose-600 transition-all hover:shadow-lg hover:shadow-rose-500/30 active:scale-95 cursor-pointer">
            Schedule A Meeting &rarr;
          </button>
        </div>

      </div>
    </motion.nav>
  );
}