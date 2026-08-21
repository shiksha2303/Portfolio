import React from 'react';
import { 
  ArrowUpRight, 
  FileText, 
  Mail, 
  BarChart3, 
  Database, 
  Code2, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/Icons';
import { RESUME_DATA } from '../../data/resumeData';

export const Hero = ({ onOpenResume }) => {
  const { personal } = RESUME_DATA;

  const quickStats = [
    {
      icon: Database,
      title: "SQL & Data Modeling",
      detail: "3NF Schema Design & Relational DBMS"
    },
    {
      icon: BarChart3,
      title: "Power BI & DAX",
      detail: "Interactive BI & Dynamic KPI Measures"
    },
    {
      icon: Code2,
      title: "Python & Analytics",
      detail: "Pandas, NumPy, Cleaning & EDA"
    },
    {
      icon: CheckCircle2,
      title: "BCCL Enterprise Intern",
      detail: "Truck Movement Visualization & Agile"
    }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden data-grid-bg border-b border-slate-800/80">
      {/* Restrained background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Positioning & Narrative */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-accent font-semibold">TARGETING:</span>
              <span className="text-slate-300">Data Analyst • BI • Analytics Engineering</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400">{personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300 font-heading">
                Bridging Computer Science Engineering & Business Intelligence
              </p>
            </div>

            {/* Recruiter-ready Value Proposition */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {personal.headline} {personal.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#casestudy"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-accent text-slate-950 font-semibold text-sm hover:bg-accent-hover transition-all shadow-md shadow-accent/20 hover:shadow-accent-glow"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Explore Flagship Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700 hover:border-accent/40 transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>View Full Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-4 py-3 rounded-lg bg-slate-900/60 hover:bg-slate-850 text-slate-300 hover:text-white text-sm border border-slate-800 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

            {/* Verified Profile Links & Contact Quick Access */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-t border-slate-800/60">
              <span className="text-slate-500 font-sans font-medium">Connect & Verify:</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-white" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center space-x-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Analytical Identity Card */}
          <div className="lg:col-span-4">
            <div className="glass-card p-6 border border-slate-800 relative shadow-2xl">
              
              {/* Header Profile Summary */}
              <div className="flex items-center space-x-4 pb-5 border-b border-slate-800/80">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-heading font-extrabold text-2xl shadow-inner">
                    SS
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center" title="Active">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-heading font-bold text-white leading-tight">
                    {personal.name}
                  </h2>
                  <p className="text-xs text-cyan-400 font-medium">
                    B.Tech CSE '27 • Dev Bhoomi UK
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    English • Hindi • German (B1)
                  </p>
                </div>
              </div>

              {/* Core Competency Highlights Grid */}
              <div className="mt-5 space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Key Technical Pillars
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {quickStats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 hover:border-accent/30 transition-colors"
                      >
                        <div className="p-1.5 rounded-md bg-accent/10 text-cyan-400 mt-0.5 shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-200">
                            {stat.title}
                          </div>
                          <div className="text-[11px] text-slate-400 leading-tight">
                            {stat.detail}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Verification Stamp */}
              <div className="mt-5 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center space-x-1 text-slate-400">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>Resume Data Verified</span>
                </span>
                <span className="font-mono text-slate-400">B.Tech 2027</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
