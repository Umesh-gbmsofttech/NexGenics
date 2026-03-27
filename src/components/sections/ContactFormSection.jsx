import React from 'react';
import { User, Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';

export default function ContactFormSection() {
  return (
    <section className="py-24 bg-[#edeff5]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Info Box: Matches Crafto Card Style */}
          <div className="lg:w-[40%] w-full bg-white p-14 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.04)] border border-slate-50 relative overflow-hidden">
            {/* Blue Accent Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 mb-8">
              <MessageSquare size={14} className="text-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Let's work together</span>
            </div>
            
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Ready to help you!</h3>
            <p className="text-slate-500 mb-12 text-base leading-relaxed">
              We're here to help and answer any question you might have.
            </p>
            
            {/* 2x2 Grid for Contact Details */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-4">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Call us directly?</p>
                <p className="font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">+1 234 567 8910</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Need live support?</p>
                <p className="font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">info@domain.com</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Join growing team?</p>
                <p className="font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">join@domain.com</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Visit headquarters?</p>
                <a href="#" className="font-bold text-slate-900 border-b border-slate-900 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-all">View on google map</a>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="lg:w-[60%] w-full lg:pl-10">
            <h2 className="text-5xl font-bold text-slate-900 mb-14 tracking-tight">Looking for any help?</h2>
            
            <form className="space-y-10">
              {/* Name Input */}
              <div className="relative group">
                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em] block mb-2">Enter your name*</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="What's your good name?" 
                    className="w-full py-4 bg-transparent border-b border-slate-200 focus:border-slate-400 outline-none transition-all text-slate-600 placeholder:text-slate-300"
                  />
                  <User size={18} className="absolute right-0 top-4 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                </div>
              </div>
              
              {/* Email Input */}
              <div className="relative group">
                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em] block mb-2">Email address*</label>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full py-4 bg-transparent border-b border-slate-200 focus:border-slate-900 outline-none transition-all text-slate-600 placeholder:text-slate-300"
                  />
                  <Mail size={18} className="absolute right-0 top-4 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                </div>
              </div>

              {/* Message Input */}
              <div className="relative group">
                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em] block mb-2">Your message</label>
                <div className="relative">
                  <textarea 
                    rows="3" 
                    placeholder="Describe about your project" 
                    className="w-full py-4 bg-transparent border-b border-slate-200 focus:border-slate-900 outline-none transition-all text-slate-600 placeholder:text-slate-300 resize-none"
                  />
                  <MessageSquare size={18} className="absolute right-0 top-4 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                </div>
              </div>

              {/* Form Footer */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-4">
                <p className="text-xs text-slate-400 max-w-[300px] leading-relaxed">
                  We will never collect information about you without your explicit consent.
                </p>
                <button className="group flex items-center gap-3 px-10 py-5 bg-[#232736] text-white rounded-md font-bold uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200">
                  Send message
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}