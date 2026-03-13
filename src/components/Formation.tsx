"use client";

import { GraduationCap } from "lucide-react";

const formations = [
  {
    title: "Mastère — Dev, Big Data & IA (en alternance)",
    school: "IPSSI, Marne-la-Vallée (77)",
    period: "2023–2025",
    description: "Titre RNCP 38837 de Niveau 7, – Expert ensystèmes d'information sécurisés",
    color: "blue",
  },
  {
    title: "Licence Générale d'informatique (en alternance)",
    school: "CNAM, Saint-Denis (93)",
    period: "2022–2023",
    description: "",
    color: "blue",
  },
  {
    title: "BTS SNIR — Systèmes numériques, option informatique et réseaux",
    school: "Lycée Gaston Bachelard, Chelles (77)",
    period: "2020–2022",
    description: "",
    color: "blue",
  },
    {
    title: "BAC STI2D — Sciences et technologies de l'industrie et du développement durable",
    school: "Lycée Langevin Wallon, Champigny-sur-Marne (94)",
    period: "2019–2020",
    description: "",
    color: "blue",
  },
];

export function Formation() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4">
          Formation
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {formations.map((formation) => (
            <div
              key={formation.title}
              className="group relative bg-gradient-to-br from-[#1a1f2e] to-[#151922] rounded-xl border border-white/5 p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />

              <div className="space-y-3">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">{formation.title}</h3>
                <p className="text-sm text-gray-400">
                  {formation.school} · {formation.period}
                </p>
                {formation.description && (
                  <p className="text-xs text-gray-500">{formation.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
