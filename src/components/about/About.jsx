import React from 'react';
import { UserCheck, GraduationCap, Building2, Globe2, Layers, Cpu, LineChart, Users } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const About = () => {
  const { about } = RESUME_DATA;

  const coreStrengths = [
    {
      icon: Layers,
      title: "Relational Modeling & 3NF",
      desc: "Architecting normalized relational database schemas (MySQL, DBMS) to eliminate redundancy and maintain strict referential integrity."
    },
    {
      icon: LineChart,
      title: "BI & DAX Formulation",
      desc: "Transforming raw transactional facts into dynamic Power BI dashboards with time-intelligence measures, variance modeling, and KPI cards."
    },
    {
      icon: Cpu,
      title: "Exploratory Data Analysis",
      desc: "Wrangling, cleaning, and synthesizing complex datasets using Python (Pandas, NumPy) and optimized SQL queries."
    },
    {
      icon: Users,
      title: "Cross-Functional Collaboration",
      desc: "Translating stakeholder operational needs into intuitive frontend reporting tools within Agile/Scrum sprint frameworks."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-2">
              <UserCheck className="w-4 h-4" />
              <span>Background & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              About Shiksha
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md mt-2 md:mt-0">
            Computer Science undergraduate applying engineering discipline and analytical rigor to solve data challenges.
          </p>
        </div>

        {/* Grid: Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="glass-card p-6 sm:p-8 space-y-4 border border-slate-800">
              <h3 className="text-lg font-heading font-semibold text-white flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span>Engineering Mindset Meets Analytics</span>
              </h3>

              {/* Career Objective Callout */}
              <div className="p-3.5 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-xs text-slate-300 leading-relaxed">
                <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                  Career Objective:
                </span>
                {about.objective}
              </div>
              
              {about.summary.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Metadata Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800/90 text-left">
                <div className="flex items-center space-x-1.5 text-slate-400 text-xs mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-accent" />
                  <span>Education</span>
                </div>
                <div className="text-xs font-semibold text-slate-200">
                  B.Tech CSE '27
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  Dev Bhoomi UK Univ
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800/90 text-left">
                <div className="flex items-center space-x-1.5 text-slate-400 text-xs mb-1">
                  <Building2 className="w-3.5 h-3.5 text-accent" />
                  <span>Enterprise</span>
                </div>
                <div className="text-xs font-semibold text-slate-200">
                  BCCL (Coal India)
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  Telemetry Reporting
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800/90 text-left">
                <div className="flex items-center space-x-1.5 text-slate-400 text-xs mb-1">
                  <Globe2 className="w-3.5 h-3.5 text-accent" />
                  <span>Languages</span>
                </div>
                <div className="text-xs font-semibold text-slate-200">
                  EN • HI • DE
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  German (B1 Level)
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800/90 text-left">
                <div className="flex items-center space-x-1.5 text-slate-400 text-xs mb-1">
                  <Layers className="w-3.5 h-3.5 text-accent" />
                  <span>Core Focus</span>
                </div>
                <div className="text-xs font-semibold text-slate-200">
                  Data & BI
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  SQL, DAX, Python
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Analytical Pillars */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold px-1">
              Core Working Principles
            </div>

            <div className="grid grid-cols-1 gap-3">
              {coreStrengths.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card-hover p-4 border border-slate-800 flex items-start space-x-3.5 text-left"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
