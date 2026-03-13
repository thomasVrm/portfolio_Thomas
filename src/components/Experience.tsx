"use client";

import { Bot, BarChart3, Settings, IdCard } from "lucide-react";

// On sépare les données par entreprise pour plus de clarté
const davidsonRoles = [
  {
    icon: IdCard,
    title: "Anonymisation de données",
    description: "Conception et déploiement d'une solution d'anonymisation de données personnelles et sensibles pour Orange Business, assurant la conformité RGPD tout en préservant une cohérence et la valeur analytique des données.",
    skills: ["SQL", "Python", "Informatica Power Center", "Data masking", "SSMS", "PostgresSQL", "Oracle", "MySQL", "MariaDB", "MongoDB", "RGPD"],
    color: "blue",
  },
];

const essilorRoles = [
    {
    icon: Bot,
    title: "Formation en IA",
    description: "Conception et déploiement de différents modèles IA (RAG, classification, clustering).",
    skills: ["RAG" , "Classification", "Clustering", "LLM", "Embeddings", "Python"],
    color: "blue",
  },
  {
    icon: Settings,
    title: "Data Engineer",
    description: "Databricks Azure. ETL Python/SQL/PySpark. Data quality. Supply chain de l'entreprise.",
    skills: ["Databricks", "AWS", "Azure", "Azure data Factory","PySpark", "ETL", "SQL"],
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Data Analyst BI",
    description: "Conception de dashboards pour gérer les coûts d'infrastructure cloud mondiaux.",
    skills: ["Requirements", "Qlik Sense", "SAP BO", "KPI", "Dashboard Databricks"],
    color: "gray",
  },
];

export function Experience() {
  return (
    <section id="exp" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4 text-white">
          Expérience
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </h2>

        {/* --- SECTION DAVIDSON --- */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/20 p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-lg">DA</div>
              <div>
                <h3 className="font-semibold text-white text-lg">Davidson Consulting</h3>
                <p className="text-sm text-gray-400">Bordeaux · Feb. 2026 – Aujourd'hui</p>
              </div>
            </div>
          </div>
          
          {/* Grille des rôles Davidson */}
          <div className="grid md:grid-cols-2 gap-4">
            {davidsonRoles.map((role) => <RoleCard key={role.title} role={role} />)}
          </div>
        </div>

        {/* --- SECTION ESSILOR --- */}
        <div>
          <div className="bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/20 p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">EL</div>
              <div>
                <h3 className="font-semibold text-white text-lg">EssilorLuxottica - Alternance</h3>
                <p className="text-sm text-gray-400">Créteil · Sep. 2022 – Aug. 2025</p>
              </div>
            </div>
          </div>

          {/* Grille des rôles Essilor */}
          <div className="grid md:grid-cols-2 gap-4">
            {essilorRoles.map((role) => <RoleCard key={role.title} role={role} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

// Petit composant interne pour éviter de répéter le code de la carte
function RoleCard({ role }: { role: any }) {
  return (
    <div className={`group relative rounded-xl border p-6 transition-all duration-300 hover:border-blue-500/30 ${
      role.color === "blue" ? "bg-gradient-to-br from-blue-500/5 to-[#151922] border-blue-500/20" : "bg-gradient-to-br from-[#1a1f2e] to-[#151922] border-white/5"
    }`}>
      <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full ${role.color === "blue" ? "bg-gradient-to-r from-blue-500 to-blue-400" : "bg-gradient-to-r from-gray-500 to-gray-600"}`} />
      <div className="space-y-4">
        <role.icon className="w-5 h-5 text-gray-400" />
        <h4 className="font-semibold text-white">{role.title}</h4>
        <p className="text-sm text-gray-400 leading-relaxed">{role.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {role.skills.map((skill: string) => (
            <span key={skill} className="px-2.5 py-1 text-xs font-mono bg-[#252b3a] text-gray-300 rounded-md border border-white/5">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}