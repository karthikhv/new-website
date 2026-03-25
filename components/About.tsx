"use client";

import AnimatedSection from "./AnimatedSection";

const metrics = [
  { value: "5+", label: "Years building data systems" },
  { value: "10TB+", label: "Data processed daily" },
  { value: "3", label: "Industries served" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Label + Paragraph */}
        <div>
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-[#A3FF12] mb-8 font-medium">
              About
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-lg text-white/70 leading-[1.8] font-light">
              I&rsquo;m a Data Analyst and Data Engineer based in Berlin,
              focused on designing systems that are fast, reliable, and built
              to last. I care deeply about clean architecture, thoughtful
              engineering, and making complex data feel simple.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-white/70 leading-[1.8] font-light mt-5">
              From real-time event streams to analytical dashboards, I work
              across the full data stack — from ingestion to insight.
            </p>
          </AnimatedSection>
        </div>

        {/* Right: Key metrics */}
        <div className="md:pt-12 grid grid-cols-3 md:grid-cols-1 gap-8">
          {metrics.map((m, i) => (
            <AnimatedSection key={m.label} delay={0.15 + i * 0.1}>
              <div className="border-t border-white/10 pt-5">
                <p className="text-3xl font-bold text-white tracking-tight">
                  {m.value}
                </p>
                <p className="text-sm text-white/40 mt-1 font-light">
                  {m.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
