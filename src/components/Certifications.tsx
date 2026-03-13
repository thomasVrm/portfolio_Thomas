"use client";

import { useState } from "react"; // Pour gérer l'ouverture de la pop-up
import { Award, X } from "lucide-react";

const certifications = [
  {
    title: "Databricks Lakehouse Fundamentals",
    issuer: "Databricks",
    date: "Aug. 2023",
    hasLink: true,
    file: "/certification/Databricks_lakehouse_fundamentals_certification.png", // Ajoute le chemin vers ton fichier ici
  },
  {
    title: "Claude Code In Action",
    issuer: "Anthropic",
    date: "En préparation",
    hasLink: false,
    inProgress: true,
    file: "/certification/Claude_Code_In_Action_certification.png", // Ajoute le chemin vers ton fichier ici
  },
  {
    title: "Google Cloud Platform Certifications",
    issuer: "Google Cloud Platform",
    date: "En préparation",
    hasLink: false,
    inProgress: true,
  },
  {
    title: "Snowpro Core Certification",
    issuer: "Snowflake",
    date: "En préparation",
    hasLink: false,
    inProgress: true,
  },
];

export function Certifications() {
  // État pour stocker l'URL du certificat à afficher
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  return (
    <section id="certs" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-4 text-white">
            Certifications
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Cliquez ✓ Voir pour afficher le certificat officiel
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group bg-gradient-to-br from-[#1a1f2e] to-[#151922] rounded-xl border border-white/5 p-5 hover:border-blue-500/30 transition-all duration-300 flex items-start justify-between"
            >
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white text-sm">{cert.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {cert.issuer}
                    {cert.date && ` · ${cert.date}`}
                  </p>
                </div>
              </div>
              
              {cert.hasLink && (
                <button
                  type="button"
                  onClick={() => setSelectedFile(cert.file || null)} // On ouvre la pop-up au clic
                  className="flex items-center gap-1 px-2.5 py-1 text-xs text-blue-400 border border-blue-500/30 rounded-full hover:bg-blue-500/10 transition-colors cursor-pointer"
                >
                  <span>✓</span>
                  <span>Voir</span>
                </button>
              )}

              {cert.inProgress && (
                <span className="text-xs text-orange-400 italic">
                  En préparation
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL / POP-UP --- */}
      {selectedFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-[#1a1f2e] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Bouton Fermer */}
            <button 
              onClick={() => setSelectedFile(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Zone d'affichage (Image ou PDF) */}
            <div className="p-2 flex items-center justify-center min-h-[300px]">
              <img 
                src={selectedFile} 
                alt="Certificat" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            </div>
          </div>
          
          {/* Fermer en cliquant en dehors de la carte */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={() => setSelectedFile(null)} 
          />
        </div>
      )}
    </section>
  );
}