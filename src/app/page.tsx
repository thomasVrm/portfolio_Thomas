import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { WhyMe } from "@/components/WhyMe";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Certifications } from "@/components/Certifications";
import { Formation } from "@/components/Formation";
import { CVDownload } from "@/components/CVDownload";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0f17]">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <WhyMe />
      <Experience />
      <Stack />
      <Certifications />
      <Formation />
      <CVDownload />
      <Contact />
      <Footer />
    </main>
  );
}
