"use client";

import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    category: "Data Engineering",
    skills: [
      "Apache Kafka",
      "Apache Spark",
      "dbt",
      "Airflow",
      "Python",
      "SQL",
      "Flink",
    ],
  },
  {
    category: "Analytics",
    skills: [
      "BigQuery",
      "Redshift",
      "Snowflake",
      "Looker",
      "Metabase",
      "Power BI",
    ],
  },
  {
    category: "Cloud & Infra",
    skills: ["GCP", "AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="text-xs tracking-[0.3em] uppercase text-[#A3FF12] mb-16 font-medium">
          Skills
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-12">
        {skillGroups.map((group, i) => (
          <AnimatedSection key={group.category} delay={i * 0.12}>
            <div>
              <p className="text-sm text-white/30 tracking-wider uppercase mb-6 font-medium">
                {group.category}
              </p>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="text-base text-white/70 font-light transition-colors duration-200 hover:text-white cursor-default">
                      {skill}
                    </span>
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
