import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { SectionTitle } from './components/SectionTitle';
import { Terminal } from './components/Terminal';
import { AviationBackground } from './components/AviationBackground';
import { FlightTicker } from './components/FlightTicker';
import { AviationCursor } from './components/AviationCursor';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { useActiveSection } from './hooks/useActiveSection';

export const App: React.FC = () => {
  const sectionIds = [
    'hero',
    'about',
    'skills',
    'projects',
    'experience',
    'terminal',
    'contact',
  ];

  const activeSection = useActiveSection(sectionIds, 200);

  return (
    <div className="relative min-h-screen bg-[#080D18] dark:bg-[#080D18] light:bg-slate-100 text-[#F8FAFC] dark:text-[#F8FAFC] light:text-slate-900 transition-colors selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Jet Cursor with Banking & Wingtip Vapor Trails */}
      <AviationCursor />

      {/* Living Airspace Radar & Aircraft Background */}
      <AviationBackground />

      {/* Fixed Header */}
      <Header activeSection={activeSection} />

      {/* Live Flight Telemetry Ticker below header */}
      <div className="pt-16 relative z-30">
        <FlightTicker />
      </div>

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 01: Hero */}
        <Hero />

        {/* Section 02: About */}
        <About />

        {/* Section 03: Skills */}
        <Skills />

        {/* Section 04: Projects */}
        <Projects />

        {/* Section 05: Experience & Education */}
        <Experience />

        {/* Section 06: Interactive Terminal */}
        <section id="terminal" className="py-24 relative overflow-hidden bg-[#060a12]/90 dark:bg-[#060a12]/90 light:bg-slate-900/95 backdrop-blur-sm text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionTitle
              sysId="06"
              title="Terminal Interativo"
              subtitle="Execute comandos no console operacional para consultar dados do sistema."
            />
            <div className="mt-8">
              <Terminal />
            </div>
          </div>
        </section>

        {/* Section 07: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Floating Action Button */}
      <BackToTop />
    </div>
  );
};

export default App;
