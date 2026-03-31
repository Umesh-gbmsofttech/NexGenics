import React from 'react';

const PartnerLogos = () => {
  const logos = [
    "WALMART", "NETFLIX", "INVISION", "YAHOO!", "AMAZON"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
          Trusted by global innovators
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
          {logos.map((logo) => (
            <span key={logo} className="text-2xl font-black text-slate-900 tracking-tighter">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// CRITICAL: Make sure this line exists!
export default PartnerLogos;