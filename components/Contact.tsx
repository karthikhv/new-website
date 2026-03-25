"use client";

import AnimatedSection from "./AnimatedSection";

const links = [
  { label: "GitHub", href: "https://github.com/karthikhv" },
  { label: "LinkedIn", href: "https://linkedin.com/in/karthikhv" },
  { label: "Email", href: "mailto:hello@karthikhv.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-[#A3FF12] mb-8 font-medium">
            Contact
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-bold text-white tracking-tight leading-tight mb-6">
            Let&rsquo;s build something.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-base text-white/40 leading-relaxed font-light mb-12">
            Open to senior data engineering roles, consulting, and interesting
            collaborations. Based in Berlin, available remotely.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href="mailto:hello@karthikhv.com"
            className="inline-block text-base font-medium text-[#0B0F19] bg-[#A3FF12] px-8 py-3.5 rounded-sm hover:bg-white transition-colors duration-300 mb-14"
          >
            hello@karthikhv.com
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex items-center justify-center gap-8 border-t border-white/8 pt-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/35 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
