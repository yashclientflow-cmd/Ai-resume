import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 h-16 transition-all duration-300 ${scrolled ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-border' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        <div className="text-2xl tracking-tight">
          <span className="font-normal text-white">Resume</span>
          <span className="font-black text-brand-primary">AI</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-sm font-medium">
            ₹199 only
          </div>
          <a href="#get-started" className="bg-gradient-cta hover:animate-shimmer text-white px-5 py-2 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(108,71,255,0.3)] hover:shadow-[0_0_25px_rgba(108,71,255,0.5)] transition-all">
            Get My Resume &rarr;
          </a>
        </div>
      </div>
    </nav>
  );
};
