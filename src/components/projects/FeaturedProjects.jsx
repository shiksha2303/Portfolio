import React from 'react';
import { 
  FolderGit2, 
  Database, 
  MapPin, 
  Users, 
  ShieldAlert, 
  Layers, 
  ArrowUpRight, 
  CheckCircle, 
  Cpu, 
  Clock 
} from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const FeaturedProjects = () => {
  const { projects } = RESUME_DATA;

  return (
    <section id="projects" className="py-20 bg-background border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Full-Stack & Systems Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md mt-2 md:mt-0">
            Real-world applications built with normalized relational schemas, algorithmic pathing, and robust frontend architectures.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const isPunchIn = project.id === 'punchin';
            const Icon = isPunchIn ? Users : MapPin;

            return (
              <div
                key={project.id}
                className="glass-card p-6 sm:p-8 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group"
              >
                <div>
                  {/* Project Top Bar */}
                  <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-slate-800/80">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/20 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800 whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>

                  {/* Problem & Solution Block */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-semibold mb-1 flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                        <span>Problem Solved</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-3 rounded-lg border border-slate-800/60">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1 flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>Architecture & Data Strategy</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-3 rounded-lg border border-slate-800/60">
                        {project.architecture}
                      </p>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Capabilities
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Tech Stack & Metrics */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] font-mono font-medium rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-900/40 flex items-center justify-between text-xs text-cyan-300 font-mono">
                    <span className="truncate">{project.metrics}</span>
                    <span className="text-[10px] text-cyan-400/80 font-bold uppercase tracking-wider shrink-0 ml-2">
                      Verified
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
