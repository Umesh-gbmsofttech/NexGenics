import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  "React", "Next.js", "Tailwind CSS", "Node.js", 
  "TypeScript", "MongoDB", "Framer Motion", "Vite", "MySQL", "Java", "Spring Boot"
];

export default function TechMarquee() {
  return (
    <div className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center px-8"
        >
          {/* Render twice for seamless loop */}
          {[...techs, ...techs].map((tech, index) => (
            <span 
              key={index} 
              className="text-slate-200 text-4xl font-black uppercase tracking-tighter hover:text-blue-600 transition-colors duration-300 cursor-default select-none"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}