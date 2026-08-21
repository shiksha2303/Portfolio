import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { SalesCaseStudy } from './components/casestudy/SalesCaseStudy';
import { FeaturedProjects } from './components/projects/FeaturedProjects';
import { ExperienceTimeline } from './components/experience/ExperienceTimeline';
import { EducationAchievements } from './components/education/EducationAchievements';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/resume/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Keyboard shortcut to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background text-slate-200 selection:bg-accent/30 selection:text-accent-light flex flex-col font-sans">
      {/* Sticky Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <SalesCaseStudy />
        <FeaturedProjects />
        <ExperienceTimeline />
        <EducationAchievements />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Full-Screen Structured Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
