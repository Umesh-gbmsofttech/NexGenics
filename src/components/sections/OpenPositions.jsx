import React from 'react';
import { ArrowUpRight, MapPin, Briefcase } from 'lucide-react';

const jobs = [
  { title: "Senior React Developer", type: "Full-Time", location: "Pune / Remote", vacancies: 2 },
  { title: "UI/UX Designer", type: "Full-Time", location: "Remote", vacancies: 1 },
  { title: "Java Backend Engineer", type: "Internship", location: "Pune", vacancies: 3 },
  { title: "Digital Marketing Specialist", type: "Contract", location: "Remote", vacancies: 1 }
];

export default function OpenPositions() {
  return (
    <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 mb-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Open Vacancies</h2>
            <p className="text-slate-400">Join our world-class team of engineers and designers.</p>
          </div>
          <div className="bg-blue-600 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
            {jobs.reduce((acc, job) => acc + job.vacancies, 0)} Total Spots
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div 
              key={i} 
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-500 cursor-pointer"
            >
              <div className="mb-4 md:mb-0">
                <h4 className="text-xl font-bold mb-2">{job.title}</h4>
                <div className="flex gap-4 text-xs font-medium opacity-60 group-hover:opacity-100">
                  <span className="flex items-center gap-1"><Briefcase size={14}/> {job.type}</span>
                  <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                  <span className="text-blue-400 font-bold group-hover:text-blue-600">{job.vacancies} Vacancies</span>
                </div>
              </div>
              
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm">Don't see a fit? Send your resume to <span className="text-white border-b border-blue-600 pb-1">careers@nexgenics.com</span></p>
        </div>
      </div>
    </section>
  );
}