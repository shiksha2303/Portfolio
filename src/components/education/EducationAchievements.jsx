import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Globe2, 
  BookOpen, 
  Users, 
  Heart, 
  Calendar, 
  MapPin, 
  CheckCircle 
} from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const EducationAchievements = () => {
  const { education, achievements, languages } = RESUME_DATA;

  return (
    <section id="education" className="py-20 bg-background border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academics, Leadership & Languages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Education & Achievements
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md mt-2 md:mt-0">
            Formal Computer Science engineering training, multilingual proficiency, and collegiate leadership.
          </p>
        </div>

        {/* 3-Column Layout: Education, Achievements, Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Education Card (5 cols) */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 border border-slate-800 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white leading-snug">
                      {education.degree}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="text-sm font-semibold text-slate-200">
                  {education.institution}
                </div>
                <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs text-slate-400 font-mono">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Graduation: {education.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{education.location}</span>
                  </span>
                </div>
              </div>

              {/* Core Coursework */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Coursework & Domains</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {education.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center space-x-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Enrollment Status:</span>
              <span className="px-2.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 font-mono font-medium">
                {education.status}
              </span>
            </div>
          </div>

          {/* Column 2: Leadership & Achievements (4 cols) */}
          <div className="lg:col-span-4 glass-card p-6 sm:p-8 border border-slate-800 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center space-x-3 pb-4 mb-4 border-b border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    Impact & Leadership
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white">
                    Achievements
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {achievements.map((item, idx) => {
                  const Icon = item.icon === 'users' ? Users : Heart;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center space-x-2 mb-1.5">
                        <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                        <h4 className="text-xs font-semibold text-white">
                          {item.title}
                        </h4>
                      </div>
                      <div className="text-[11px] text-cyan-300 font-mono mb-2">
                        {item.organization}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.impact}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
              Demonstrated Leadership & Coordination
            </div>
          </div>

          {/* Column 3: Languages & Communication (3 cols) */}
          <div className="lg:col-span-3 glass-card p-6 sm:p-8 border border-slate-800 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center space-x-3 pb-4 mb-4 border-b border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                    Global Reach
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white">
                    Languages
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-900/80 border border-slate-800"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-white">
                        {lang.name}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                        {lang.name === 'German' ? 'B1 CEFR' : 'Fluent'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      {lang.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
              Cross-Cultural Working Readiness
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
