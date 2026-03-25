"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Real-Time Event Pipeline",
    description:
      "High-throughput Kafka → Spark Streaming pipeline for retail events with sub-second latency.",
    tech: ["Kafka", "Spark", "GCP"],
    href: "#",
  },
  {
    title: "Analytics Platform",
    description:
      "Self-serve analytics platform on BigQuery + dbt powering 50+ company dashboards.",
    tech: ["BigQuery", "dbt", "Looker"],
    href: "#",
  },
  {
    title: "Data Quality Framework",
    description:
      "Automated data quality monitoring system with anomaly detection and Slack alerting.",
    tech: ["Python", "Airflow", "Great Expectations"],
    href: "#",
  },
  {
    title: "ML Feature Store",
    description:
      "Centralised feature store enabling reproducible ML experiments across data science teams.",
    tech: ["Python", "Redis", "Feast"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="text-xs tracking-[0.3em] uppercase text-[#A3FF12] mb-16 font-medium">
          Projects
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-px bg-white/[0.06]">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.09}>
            <motion.a
              href={project.href}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="block bg-[#0B0F19] p-8 group hover:bg-white/[0.03] transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-base font-semibold text-white/90 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <span className="text-white/20 group-hover:text-[#A3FF12]/60 transition-colors text-lg flex-shrink-0">
                  ↗
                </span>
              </div>
              <p className="text-sm text-white/45 leading-relaxed font-light mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] tracking-wider text-white/25 uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
