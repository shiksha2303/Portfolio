import React, { useState, useMemo } from 'react';
import { Layers, Search, Check, Sparkles, Filter } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const Skills = () => {
  const { categories } = RESUME_DATA.skills;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = [
    { id: 'all', label: 'All Competencies' },
    ...categories.map(c => ({ id: c.id, label: c.name }))
  ];

  const filteredCategories = useMemo(() => {
    return categories
      .map(cat => {
        if (activeCategory !== 'all' && cat.id !== activeCategory) {
          return null;
        }

        const filteredItems = cat.items.filter(item =>
          item.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );

        if (filteredItems.length === 0) return null;

        return {
          ...cat,
          items: filteredItems
        };
      })
      .filter(Boolean);
  }, [categories, activeCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return categories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [categories]);

  return (
    <section id="skills" className="py-20 bg-background border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Technical & Domain Taxonomy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Skills & Expertise
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 font-semibold">
              {totalSkillsCount} Skills Cataloged
            </span>
            <span className="text-slate-400">• Non-inflated (No fake % bars)</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="glass-card p-4 mb-8 border border-slate-800/80 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 mr-1 hidden sm:block shrink-0" />
            {filterOptions.map((opt) => {
              const isActive = activeCategory === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveCategory(opt.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-accent text-slate-950 font-semibold shadow-sm shadow-accent/20'
                      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g., SQL, DAX)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 text-slate-200 placeholder-slate-400 rounded-lg border border-slate-800 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card p-5 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-base font-heading font-bold text-white">
                      {category.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                    {category.items.length}
                  </span>
                </div>

                {/* Skill Tag Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, index) => {
                    const isKeyDataSkill = [
                      'Power BI', 'DAX', 'SQL', 'Python', 'Python (Pandas, NumPy)', 
                      'Normalised Schema Design (3NF)', 'ETL', 'KPI Reporting',
                      'Tableau', 'Advanced Excel', 'Data Visualisation', 'Exploratory Data Analysis (EDA)'
                    ].includes(skill);

                    return (
                      <span
                        key={index}
                        className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          isKeyDataSkill
                            ? 'bg-accent/10 text-accent-light border border-accent/30 shadow-xs'
                            : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {isKeyDataSkill ? (
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                        ) : (
                          <Check className="w-3 h-3 text-slate-400" />
                        )}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Context Badge */}
              <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Verified in Projects & Studies</span>
                <span className="text-slate-400">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="glass-card p-12 text-center border border-slate-800">
            <p className="text-slate-400 text-sm">
              No skills found matching "<span className="text-white font-medium">{searchQuery}</span>".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 px-4 py-1.5 text-xs bg-slate-800 text-slate-200 rounded-lg hover:bg-slate-700"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
