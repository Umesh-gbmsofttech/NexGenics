import React from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section className="relative bg-sky-50 py-16 px-8 md:px-16 rounded-lg max-w-4xl mx-auto shadow-sm overflow-hidden">
      
      

      <h2 className="text-3xl font-bold text-slate-900 mb-10">Leave us your info !</h2>
      
      <form className="space-y-8">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-slate-700 mb-1">Full Name*</label>
          <input type="text" className="border-b border-slate-300 bg-transparent py-2 outline-none focus:border-blue-600 transition-colors w-full" required />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-slate-700 mb-1">Email*</label>
          <input type="email" className="border-b border-slate-300 bg-transparent py-2 outline-none focus:border-blue-600 transition-colors w-full" required />
        </div>

        {/* Subject */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-slate-700 mb-1">Service Description*</label>
          <input type="text" className="border-b border-slate-300 bg-transparent py-2 outline-none focus:border-blue-600 transition-colors w-full" required />
        </div>

        {/* CV Upload */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-slate-700 mb-2">Upload Your CV*</label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer bg-blue-900 text-white px-6 py-2 rounded text-sm hover:bg-blue-800 transition-colors">
              Choose File
              <input type="file" className="hidden" />
            </label>
            <span className="text-xs text-slate-500">No file chosen</span>
          </div>
        </div>

        {/* Why join us */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-slate-700 mb-1">Why do you want to join our team?*</label>
          <input type="text" className="border-b border-slate-300 bg-transparent py-2 outline-none focus:border-blue-600 transition-colors w-full" required />
        </div>

        <button type="submit" className="bg-sky-500 text-white px-16 py-3 rounded-md font-bold hover:bg-sky-600 transition-all w-full md:w-auto">
          Submit
        </button>
      </form>
    </section>
  );
}