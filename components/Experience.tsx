"use client";

import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    company: "Mediamarktsaturn Technology",
    role: "Data Engineer",
    period: "2023 — Present",
    bullets: [
      "Designed and maintained large-scale ETL pipelines processing millions of retail events daily.",
      "Built real-time analytics infrastructure on Apache Kafka and Spark Streaming.",
    ],
  },
  {
    company: "Freelance / Consulting",
    role: "Data Analyst & Engineer",
    period: "2021 — 2023",
    bullets: [
      "Delivered end-to-end analytics solutions for e-commerce and fintech clients.",
      "Reduced reporting latency from hours to minutes with dbt + BigQuery.",
    ],
  },
  {
    company: "Wipro Technologies",
    role: "Data Analyst",
    period: "2019 — 2021",
    bullets: [
      "Built and owned dashboards tracking KPIs across supply chain operations.",
      "Automated data ingestion workflows, saving 20+ manual engineering hours per week.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="text-xs tracking-[0.3em] uppercase text-[#A3FF12] mb-16 font-medium">
          Experience
        </p>
      </AnimatedSection>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <AnimatedSection key={exp.company} delay={i * 0.1}>
            <div className="group border-t border-white/8 py-10 grid md:grid-cols-[1fr_2fr] gap-6 transition-colors duration-300 hover:border-white/20">
              {/* Left: Period + Company */}
              <div>
                <p className="text-xs text-white/30 tracking-wide mb-1 font-light">
                  {exp.period}
                </p>
                <p className="text-base font-semibold text-white/90 group-hover:text-white transition-colors">
                  {exp.company}
                </p>
                <p className="text-sm text-[#A3FF12]/80 mt-0.5 font-light">
                  {exp.role}
                </p>
              </div>

              {/* Right: Bullets */}
              <ul className="space-y-2 mt-1">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-sm text-white/50 leading-relaxed font-light flex gap-3">
                    <span className="text-[#A3FF12]/50 mt-0.5 flex-shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
