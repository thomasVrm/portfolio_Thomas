"use client";

const languages = [
  { name: "Français", level: "Natif" },
  { name: "English", level: "B2" },
  { name: "Español", level: "B1" },
];

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#1a1f2e] to-[#151922] rounded-2xl border border-white/5 p-8 md:p-10">
          {/* Top gradient line */}
          <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent rounded-full" />

          {/* Location badge */}
          <div className="absolute top-6 right-6 hidden sm:block">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10">
              <span className="text-orange-400 text-sm">Bordeaux et Périphérie</span>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Salut, moi c'est <span className="gradient-text">Thomas</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed max-w-3xl">
                <p>
                    Diplômé d’un Master en Développement Big Data & IA, je suis passionné par 
                    <span className="text-blue-400"> l’ingénierie des données </span> 
                    et la conception de plateformes data performantes. 
                    Au cours de mes <span className="text-white font-medium">3 années</span> d’alternance chez 
                    <span className="text-white font-medium"> EssilorLuxottica </span> 
                    (groupe international de plus de 190 000 collaborateurs), 
                    j’ai travaillé sur la conception de pipelines de données, la modernisation 
                    d’architectures BI et l’industrialisation de traitements Big Data dans des 
                    environnements cloud.
                </p>

                <p>
                    J’ai également contribué à des projets data à <span className="text-blue-400">l’échelle internationale</span> : 
                    migration et centralisation de systèmes BI, développement de solutions 
                    analytiques et création de dashboards permettant de piloter les coûts 
                    d’infrastructure et les performances des plateformes data.
                </p>

                <p>
                    Aujourd’hui, je souhaite continuer à concevoir des solutions <span className="text-blue-400">data robustes</span>, <span className="text-blue-400">scalables</span> et <span className="text-blue-400">utiles</span> aux équipes métier, tout en explorant les nouvelles 
                    approches autour du <span className="text-white font-medium">Big Data</span>, du <span className="text-white font-medium">Cloud</span> et de l’<span className="text-white font-medium">IA</span>.
                </p>
                </div>

            {/* Language badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#252b3a] border border-white/5"
                >
                  <span className="text-sm text-white">{lang.name}</span>
                  <span className="text-xs text-gray-500">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
