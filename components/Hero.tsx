"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy-load the 3D particles to keep initial bundle small
const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(163,255,18,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* 3D particles */}
      <ParticlesBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs tracking-[0.3em] uppercase text-[#A3FF12] mb-6 font-medium"
        >
          Berlin · Data Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[clamp(3rem,10vw,7rem)] font-bold tracking-tight leading-[1.02] text-white mb-6"
        >
          Karthik HV
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-[clamp(1.1rem,3.5vw,1.9rem)] font-light text-white/70 mb-8 tracking-tight"
        >
          Building Scalable Data Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-base text-white/40 max-w-lg mx-auto leading-relaxed"
        >
          Data pipelines, real-time systems, and analytics at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-14 flex items-center justify-center gap-6"
        >
          <a
            href="#about"
            className="text-sm text-white/40 hover:text-white transition-colors duration-300 tracking-wide"
          >
            Explore ↓
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #0B0F19)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
