import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/sections/ContactForm';
import birdIcon from '../assets/bird-icon.png';
import Testimonials from '../components/sections/Testimonials';

export default function ContactPage() {
  const bubblePositions = [
    { bottom: '330px', right: '-100px', size: 'w-24 h-16' },
    { bottom: '250px', right: '-250px', size: 'w-32 h-20' },
    { bottom: '200px', right: '-220px', size: 'w-28 h-18' },
    { bottom: '150px', right: '-180px', size: 'w-24 h-16' },
    { bottom: '120px', right: '-60px', size: 'w-16 h-12' },
    { bottom: '60px', right: '-130px', size: 'w-20 h-14' },
    { bottom: '20px', right: '-50px', size: 'w-12 h-8' }
  ];

  return (
    <div className="relative min-h-screen py-20 bg-white overflow-hidden">
      <div className="relative max-w-4xl mx-auto min-h-[600px] px-4">
        
        <motion.img 
          src={birdIcon} 
          alt="Bird"
          className="absolute -top-20 -left-14 w-32 h-32 hidden md:block z-10 cursor-pointer"
          animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {bubblePositions.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              opacity: { delay: i * 0.1, duration: 0.5 },
              scale: { delay: i * 0.1, duration: 0.5, type: "spring" },
              y: { repeat: Infinity, duration: 4, delay: i * 0.2, ease: "easeInOut" }
            }}
            className={`absolute ${pos.size} bg-blue-500 rounded-lg shadow-xl hidden md:block`}
            style={{ bottom: pos.bottom, right: pos.right }}
          />
        ))}
        
        <div className="relative z-20">
          <ContactForm />
        </div>
      </div>
      <Testimonials/>
    </div>
  );
}