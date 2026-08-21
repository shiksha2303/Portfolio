import React, { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  TrendingUp, 
  CheckCircle2, 
  Lightbulb, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  FileSpreadsheet,
  Sliders,
  ChevronRight
} from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import { InteractiveDashboard } from './InteractiveDashboard';

export const SalesCaseStudy = () => {
  const { flagshipCaseStudy } = RESUME_DATA;
  const [activeTab, setActiveTab] = useState('all'); // 'all' or specific step

  const steps = [
    {
      id: 'problem',
      num: '01',
      title: 'Problem Formulation',
      icon: Sliders,
      headline: flagshipCaseStudy.problem.title,
      body: flagshipCaseStudy.problem.content
    },
    {
      id: 'data',
      num: '02',
      title: 'Data & Schema Architecture',
      icon: Database,
      headline: flagshipCaseStudy.dataPipeline.title,
      body: flagshipCaseStudy.dataPipeline.content
    },
    {
      id: 'analysis',
      num: '03',
      title: 'DAX & Modeling',
      icon: BarChart3,
      headline: flagshipCaseStudy.analysis.title,
      body: flagshipCaseStudy.analysis.content
    },
    {
      id: 'insights',
      num: '04',
      title: 'Actionable Insights',
      icon: TrendingUp,
      headline: flagshipCaseStudy.insights.title,
      bullets: flagshipCaseStudy.insights.findings
    },
    {
      id: 'recommendations',
      num: '05',
      title: 'Strategic Recommendations',
      icon: Lightbulb,
      headline: flagshipCaseStudy.recommendations.title,
      items: flagshipCaseStudy.recommendations.items
    }
  ];

  return (
    <section id="casestudy" className="py-20 bg-background-secondary border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-2">
              <BarChart3 className="w-4 h-4" />
              <span>Flagship Analytics Project</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              {flagshipCaseStudy.title}
            </h2>
          </div>
          <div className="mt-3 md:mt-0 flex flex-wrap gap-2">
            {flagshipCaseStudy.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-slate-900 text-cyan-300 border border-slate-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study Subtitle */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 mb-10 text-slate-300 text-sm leading-relaxed flex items-start space-x-3.5">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="font-semibold text-white font-heading">
              Case Study Objective
            </div>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
              {flagshipCaseStudy.subtitle}. Follow the 5-stage analytical lifecycle below to see how raw transactional data was transformed into an interactive decision console.
            </p>
          </div>
        </div>

        {/* Live Interactive Dashboard Component */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Interactive BI Dashboard Preview</span>
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              [Live Recharts Visualization]
            </span>
          </div>
          
          <InteractiveDashboard />
        </div>

        {/* Structured 5-Stage Case Narrative */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <h3 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
              <span>Structured Analytical Breakdown</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Problem → Data → Analysis → Insights → Recommendations
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Step 1: Problem */}
            <div className="lg:col-span-6 glass-card p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-xs font-mono bg-red-950/60 text-red-400 border border-red-800/60 font-semibold">
                    01. Problem
                  </span>
                  <h4 className="text-base font-heading font-bold text-white">
                    {flagshipCaseStudy.problem.title}
                  </h4>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {flagshipCaseStudy.problem.content}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Core Challenge: Reporting Latency & Margin Blindspots</span>
                <span className="text-red-400 font-mono font-medium">High Priority</span>
              </div>
            </div>

            {/* Step 2: Data Pipeline & Schema */}
            <div className="lg:col-span-6 glass-card p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-xs font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-800/60 font-semibold">
                    02. Data Architecture
                  </span>
                  <h4 className="text-base font-heading font-bold text-white">
                    {flagshipCaseStudy.dataPipeline.title}
                  </h4>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {flagshipCaseStudy.dataPipeline.content}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Architecture: Star Schema (FactSales + 4 Dimensions)</span>
                <span className="text-cyan-400 font-mono font-medium">SQL & Power Query</span>
              </div>
            </div>

            {/* Step 3: Analysis & DAX */}
            <div className="lg:col-span-12 glass-card p-6 border border-slate-800">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-blue-950/60 text-blue-400 border border-blue-800/60 font-semibold">
                  03. Analysis & Modeling
                </span>
                <h4 className="text-base font-heading font-bold text-white">
                  {flagshipCaseStudy.analysis.title}
                </h4>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {flagshipCaseStudy.analysis.content}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {flagshipCaseStudy.analysis.daxMeasures.map((dax, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-xs font-semibold text-cyan-400 mb-1">
                      {dax.name}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 break-all">
                      {dax.formula}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Insights */}
            <div className="lg:col-span-6 glass-card p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-xs font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 font-semibold">
                    04. Insights
                  </span>
                  <h4 className="text-base font-heading font-bold text-white">
                    {flagshipCaseStudy.insights.title}
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {flagshipCaseStudy.insights.findings.map((insight, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 font-mono">
                Data-Driven Findings Verified
              </div>
            </div>

            {/* Step 5: Recommendations */}
            <div className="lg:col-span-6 glass-card p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-xs font-mono bg-amber-950/60 text-amber-400 border border-amber-800/60 font-semibold">
                    05. Recommendations
                  </span>
                  <h4 className="text-base font-heading font-bold text-white">
                    {flagshipCaseStudy.recommendations.title}
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {flagshipCaseStudy.recommendations.items.map((rec, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                      <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 font-mono">
                Actionable Business Outcomes
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
