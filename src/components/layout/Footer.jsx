import React from 'react';
import { Database, ArrowUp, Mail, Heart } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/Icons';
import { RESUME_DATA } from '../../data/resumeData';

export const Footer = ({ onOpenResume }) => {
  const { personal } = RESUME_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand & Positioning */}
          <div className="flex items-center space-x-3 text-left">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-bold text-white text-sm">
                {personal.name}
              </span>
              <p className="text-xs text-slate-400 font-mono">
                Data Analyst • Python • SQL • Power BI
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#casestudy" className="hover:text-cyan-300 transition-colors">Case Study</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            <button onClick={onOpenResume} className="hover:text-cyan-300 transition-colors">Resume</button>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* External Social Links & Scroll to Top */}
          <div className="flex items-center space-x-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-3">
          <div>
            © {new Date().getFullYear()} {personal.name}. Built with React, Vite, Tailwind CSS & Recharts.
          </div>
          <div className="flex items-center space-x-1">
            <span>Dev Bhoomi Uttarakhand University • B.Tech CSE '27</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
