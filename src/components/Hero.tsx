"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, FileDown, ArrowDown } from "lucide-react";

const phrases = [
  "Je conçois, je construis, je livre.",
  "I design, I build, I deliver.",
  "Data pipelines to dashboards.",
];

export function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 30 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex]);

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">
              <span className="text-orange-400 text-sm">
                Prêt pour relever des défis
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold tracking-tight">
              <span className="text-white">Thomas </span>
              <span className="gradient-text">Vromman</span>
            </h1>

            {/* Title */}
            <p className="text-lg text-gray-400">
              Data Engineer <span className="text-blue-400 mx-2">•</span>{" "}
              Data Analyst
            </p>

            {/* Typing text */}
            <div className="h-12 flex items-center">
              <div className="font-mono text-lg bg-[#1a1f2e] px-4 py-2 rounded-lg border border-white/10 inline-block">
                <span className="text-green-400">{displayText}</span>
                <span className="animate-pulse text-blue-400 ml-0.5">|</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6"
              >
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Me contacter
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 rounded-full px-6"
              >
                <a href="#dl">
                  <FileDown className="w-4 h-4 mr-2" />
                  Télécharger CV
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-gray-400 hover:text-white rounded-full px-6"
              >
                <a href="#exp">
                  <ArrowDown className="w-4 h-4 mr-2" />
                  Mon parcours
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile image container */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#1a1f2e] relative bg-gradient-to-br from-[#1a1f2e] to-[#252b3a]">
                <img
                  src="/images/photo_VROMMAN_Thomas.jpg"
                  alt="Thomas Vromman"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Bordeaux badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-orange-500 text-white text-sm font-medium rounded-full">
                Bordeaux
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-blue-500/30 rounded-full" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
