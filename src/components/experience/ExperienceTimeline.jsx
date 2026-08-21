import React from 'react';
import { Briefcase, Calendar, MapPin, Building, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const ExperienceTimeline = () => {
  const { experience } = RESUME_DATA;

  return (
    <section id="experience" className="py-20 bg-background-secondary border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Professional History</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md mt-2 md:mt-0">
            Enterprise software internship and public community research initiatives.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experience.map((exp, idx) => {
            const isBCCL = exp.id === 'bccl';
            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Dot */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  isBCCL ? 'bg-cyan-500 border-slate-950 ring-4 ring-cyan-500/20' : 'bg-slate-700 border-slate-950 ring-4 ring-slate-800'
                }`} />

                {/* Experience Card */}
                <div className="glass-card p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all text-left">
                  
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800/80">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-cyan-400 border border-slate-800 mb-2">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-cyan-300 font-medium mt-0.5">
                        <Building className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="text-left sm:text-right space-y-1">
                      <div className="flex items-center sm:justify-end space-x-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center sm:justify-end space-x-1.5 text-xs text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed font-medium">
                    {exp.summary}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 mb-6">
                    {exp.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech / Skill Tags */}
                  <div className="pt-4 border-t border-slate-800/70 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-slate-400 mr-2">Focus Areas:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
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
