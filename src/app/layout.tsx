import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thomas Vromman — Data Engineer Big Data & IA",
  description: "Portfolio interactif de Thomas Vromman — Data Engineer Big Data & IA. Disponible pour Bordeaux et périphérie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}