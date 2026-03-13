"use client";

import { Brain, Database, Cloud, BarChart3, FileText, Bot } from "lucide-react";

const stackCategories = [
  {
    icon: Brain,
    title: "IA & ML",
    skills: ["RAG", "Classification", "Clustering", "LLM", "Embeddings", "Python"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: ["Python", "SQL", "PySpark", "ETL/ELT", "MySQL", "SSMS", "PostgreSQL", "Oracle", "Data Quality", "CI/CD", "Git"],
  },
  {
    icon: Cloud,
    title: "Cloud",
    skills: ["Databricks", "AWS", "Azure", "GCP", "Azure Data Factory", "Snowflake", "Microsoft Fabric", "Delta Lake", "Docker"],
  },
  {
    icon: BarChart3,
    title: "BI & Analytics",
    skills: ["SAP BO", "Qlik", "Excel", "Databricks Dashboard", "KPI Design"],
  },
  {
    icon: FileText,
    title: "Data Analysis",
    skills: ["Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "Pandas", "Matplotlib", "Seaborn"],
  },
];

export function Stack() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4">
          Stack technique
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stackCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-gradient-to-br from-[#1a1f2e] to-[#151922] rounded-xl border border-white/5 p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono bg-[#252b3a] text-gray-300 rounded-md border border-white/5 hover:border-blue-500/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
