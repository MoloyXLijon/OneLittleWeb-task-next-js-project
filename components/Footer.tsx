'use client';
import { X, Facebook, Instagram, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-white pt-20 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
        >
          <motion.div variants={item} className="md:col-span-1">
            <div className="text-2xl font-bold tracking-tighter mb-6">
              <span className="text-blue-500">G</span>
              <span className="text-rose-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-rose-500">e</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
            <div className="flex gap-4 text-gray-400">
              <X className="w-5 h-5 hover:text-rose-500 cursor-pointer transition-colors hover:scale-110" />
              <Facebook className="w-5 h-5 hover:text-rose-500 cursor-pointer transition-colors hover:scale-110" />
              <Instagram className="w-5 h-5 hover:text-rose-500 cursor-pointer transition-colors hover:scale-110" />
              <Github className="w-5 h-5 hover:text-rose-500 cursor-pointer transition-colors hover:scale-110" />
            </div>
          </motion.div>
          
          <motion.div variants={item}>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-rose-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Works</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Career</a></li>
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="font-bold text-gray-900 mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-rose-500 transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Delivery Details</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="font-bold text-gray-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-rose-500 transition-colors">Free eBooks</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Development Tutorial</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">How to - Blog</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Youtube Playlist</a></li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-[#1C1635] text-gray-400 text-center py-4 text-sm">
        © Copyright 2024, All Rights Reserved by XYZ
      </div>
    </footer>
  );
}
