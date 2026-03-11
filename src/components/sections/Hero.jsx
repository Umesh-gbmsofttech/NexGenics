import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion';

export default function Hero() {
  // 1. Mouse coordinate tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Smooth the movement for a "premium" feel
  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3. Create the CSS variable for the gradient
  const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(30, 58, 138, 0.42), transparent 80%)`;

  function handleMouseMove(e) {
    // Get mouse position relative to the element
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#fcfdff] text-slate-900 pt-32 pb-32 overflow-hidden flex items-center justify-center"
    >
      {/* The Mouse-Tracking Spotlight */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background }}
      />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Your existing content goes here */}
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-white/50 backdrop-blur-md text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 shadow-sm mb-10">
            <span className="h-1.5 w-1.5 bg-blue-600 rounded-full animate-pulse" />
            Engineering Digital Excellence
          </span>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-950 leading-[1.1] mb-8">
            Engineering software for <br />
            <span className="text-blue-600 italic font-serif font-medium">global scale.</span>
          </h1>

          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            NexGenics builds resilient digital infrastructure and high-velocity 
            platforms designed for the next generation of enterprise growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-4 bg-[#f27a7a] hover:bg-[#e06969] text-white font-bold rounded-xl transition-all shadow-lg active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}