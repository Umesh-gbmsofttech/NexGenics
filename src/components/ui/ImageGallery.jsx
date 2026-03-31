import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400"
];

export default function ImageGallery() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="flex gap-4 md:gap-6 justify-center">
        {images.map((url, i) => (
          <div 
            key={i} 
            className={`w-40 md:w-64 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 ${
              i % 2 === 0 ? 'translate-y-8' : '-translate-y-8'
            }`}
          >
            <img src={url} alt="NexGenics Team" className="h-80 w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}