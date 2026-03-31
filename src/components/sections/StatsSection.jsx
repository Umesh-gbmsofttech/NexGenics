import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: " Projects Delivered", value: "50+" },
  { label: "Valuable happy clients", value: "30+" },
  { label: "Professionals", value: "20+" },
  { label: "Years Experience", value: "3+" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-slate-500 text-sm font-medium mb-2">{stat.label}</p>
              <h3 className="text-5xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}