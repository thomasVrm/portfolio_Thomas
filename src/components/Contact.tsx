"use client";

import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Travaillons <span className="gradient-text-orange">ensemble</span>
        </h2>
        <p className="text-gray-400 mb-4">
          Déterminé, passionné, curieux.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-8">
          <span className="text-green-400 text-sm">Disponible immédiatement</span>
        </div>

        {/* Contact buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            asChild
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6"
          >
            <a href="mailto:Thomas230801@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Thomas230801@gmail.com
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-gray-300 hover:bg-white/5 rounded-full px-6"
          >
            <a href="tel:+33781590315">
              <Phone className="w-4 h-4 mr-2" />
              +33 7 81 59 03 15
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-gray-300 hover:bg-white/5 rounded-full px-6"
          >
            <a href="https://www.linkedin.com/in/thomas-vromman-18bb72273/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>

        {/* Location info */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Pessac (33) — Bordeaux et périphérie
          </span>
        </div>
      </div>
    </section>
  );
}
