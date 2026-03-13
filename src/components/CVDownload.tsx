"use client";

import { useState } from "react";
import { FileDown, Eye, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Configuration unique du CV
const cvOption = {
  title: "CV Français",
  subtitle: "Data Engineer | Data Analyst",
  flag: "🇫🇷",
  fileName: "CV_Thomas_Vromman.pdf",
  filePath: "/cv/CV_Thomas_VROMMAN.pdf",
};

export function CVDownload() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="dl" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            <FileDown className="inline-block w-8 h-8 mr-3 text-blue-400" />
            Mon CV
          </h2>
          <p className="text-gray-500 mt-2">Mis à jour Mars 2026</p>
        </div>

        <div className="flex justify-center max-w-2xl mx-auto">
          <div className="group bg-gradient-to-br from-[#1a1f2e] to-[#151922] rounded-xl border border-white/5 p-8 text-center hover:border-blue-500/30 transition-all duration-300 w-full max-w-sm shadow-xl">
            <div className="text-4xl mb-4">{cvOption.flag}</div>
            <h3 className="font-semibold text-white text-lg mb-2">{cvOption.title}</h3>
            <p className="text-sm text-gray-400 mb-8">{cvOption.subtitle}</p>
            
            <div className="flex flex-col gap-3">
              {/* Bouton Voir (Pop-up) */}
              <Button
                onClick={() => setIsOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all"
              >
                <Eye className="w-4 h-4 mr-2" />
                Consulter
              </Button>

              {/* Bouton Télécharger */}
              <a 
                href={cvOption.filePath} 
                download={cvOption.fileName}
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full border-white/10 text-gray-300 hover:bg-white/5 rounded-full"
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Télécharger PDF
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL POUR LE CV --- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl h-[90vh] bg-[#1a1f2e] rounded-2xl overflow-hidden border border-white/10">
            {/* Header de la Modal */}
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#151922]">
              <h3 className="text-white font-medium flex items-center gap-2">
                <span className="text-blue-400">PDF:</span> {cvOption.fileName}
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Affichage du PDF */}
            <div className="w-full h-full bg-gray-800">
              <iframe
                src={`${cvOption.filePath}#toolbar=0`} // #toolbar=0 cache la barre d'outils si le navigateur le permet
                className="w-full h-full border-none"
                title="CV Thomas Vromman"
              />
            </div>
          </div>
          
          {/* Overlay pour fermer en cliquant à côté */}
          <div className="absolute inset-0 -z-10" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </section>
  );
}