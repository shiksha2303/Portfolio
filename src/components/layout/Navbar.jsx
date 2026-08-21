import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Database, ChevronRight } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'casestudy', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Case Study', href: '#casestudy' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center space-x-3 group text-left focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:border-accent group-hover:bg-accent/20 transition-all">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-base tracking-tight group-hover:text-accent-light transition-colors">
                {RESUME_DATA.personal.name}
              </div>
              <div className="text-[11px] font-mono text-cyan-400 font-medium">
                Data Analyst • B.Tech CSE
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-accent/15 text-accent-light border border-accent/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-accent/40 transition-all shadow-sm group"
            >
              <FileText className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-accent text-slate-950 hover:bg-accent-hover transition-all shadow-sm shadow-accent/20"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs font-medium rounded-lg bg-slate-850 text-slate-200 border border-slate-700"
              title="View Resume"
            >
              <FileText className="w-4 h-4 text-accent" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-850 border border-transparent hover:border-slate-700"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 text-sm font-semibold rounded-lg bg-slate-850 text-slate-200 border border-slate-700"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>View Full Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold rounded-lg bg-accent text-slate-950"
              >
                Contact Shiksha
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
