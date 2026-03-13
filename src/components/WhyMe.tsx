"use client";

import { Bot, User, Globe, Zap, LineChart } from "lucide-react";

const features = [
    {
    icon: User,
    title: "Profil data complet",
    description: "Pipeline → Dashboard → Data Gouvernance → Valeur ajoutée.",
    },
    {
    icon: LineChart,
    title: "Architecture Big Data",
    description: "Conception de pipelines robustes et scalables pour gérer de grands volumes de données.",
    },
  
  {
    icon: Globe,
    title: "Adaptabilité a des contextes internationaux",
    description: "Europe, US, Asie.",
  },
  {
    icon: Zap,
    title: "Efficacité & Innovation",
    description: "Toujours à la recherche de nouvelles approches pour résoudre les problèmes data de manière plus efficace.",
  },
];

export function WhyMe() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4">
          Pourquoi moi ?
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-to-br from-[#1a1f2e] to-[#151922] rounded-xl border border-white/5 p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

              <div className="relative z-10 space-y-4">
                <feature.icon className="w-6 h-6 text-blue-400" />
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
