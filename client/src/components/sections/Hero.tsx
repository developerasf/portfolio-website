"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-40 relative">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#29146A]/20 blur-[120px] rounded-full" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-[1px] bg-[#354FE2]" />
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#354FE2] mono-font">
            Full Stack Engineering
          </span>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-10 leading-[0.85]">
          Reliable <br/>
          <span className="text-gradient">Scale.</span>
        </h1>
        
        <p className="text-xl text-[#D9E0EF]/60 max-w-2xl leading-relaxed mb-12">
          Passionate full stack engineer building scalable solutions. Bridging the gap between 
          complex software and production-ready systems. Currently pursuing CSE at AIUB.
        </p>
        
        <div className="flex flex-wrap gap-6">
          <a
            href="#work"
            className="btn-primary px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest"
          >
            View Deployments
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest border border-white/10 hover:border-[#354FE2]/50 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}