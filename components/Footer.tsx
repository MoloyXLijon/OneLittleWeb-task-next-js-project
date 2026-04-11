'use client';
import Image from 'next/image';
import { X, Facebook, Instagram, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
            <div className="mb-6">
              <Image
                src="/images/Google-Logo.wine-1.png"
                alt="Google Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet
              accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper
              amet adipiscing fermentum.
            </p>

            <div className="flex gap-4 text-gray-800">
              <X className="w-5 h-5 hover:text-rose-500 cursor-pointer transition-colors hover:scale-110" />
              <Facebook className="w-5 h-5 hover:text-rose-500 cursor-pointer transition-colors hover:scale-110" />
              <Instagram className="w-5 h-5 hover:text-rose-500 cursor-pointer transition-colors hover:scale-110" />
              <Github className="w-5 h-5 hover:text-rose-500 cursor-pointer transition-colors hover:scale-110" />
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={item}>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {['About', 'Features', 'Works', 'Career'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-rose-500 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Help */}
          <motion.div variants={item}>
            <h4 className="font-bold text-gray-900 mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-rose-500 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={item}>
            <h4 className="font-bold text-gray-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-rose-500 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1C1635] text-gray-400 text-center py-4 text-sm">
        © Copyright 2024, All Rights Reserved by XYZ
      </div>
    </footer>
  );
}