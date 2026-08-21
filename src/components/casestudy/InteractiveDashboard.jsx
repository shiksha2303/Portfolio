import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  IndianRupee, 
  Percent, 
  Package, 
  Target, 
  Code, 
  Layers, 
  Calendar, 
  BarChart2, 
  PieChart as PieIcon, 
  Copy, 
  Check, 
  Info,
  Maximize2
} from 'lucide-react';
import { ANALYTICS_DATA } from './mockAnalyticsData';
import { RESUME_DATA } from '../../data/resumeData';

export const InteractiveDashboard = () => {
  const [timeframe, setTimeframe] = useState('all');
  const [chartView, setChartView] = useState('trend'); // 'trend' | 'regional' | 'category'
  const [showCodeDrawer, setShowCodeDrawer] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const kpi = ANALYTICS_DATA.kpis[timeframe] || ANALYTICS_DATA.kpis.all;

  // Filter monthly data if a single quarter is selected
  const displayMonthlyData = timeframe === 'all' 
    ? ANALYTICS_DATA.monthlyTrends 
    : ANALYTICS_DATA.monthlyTrends.filter(d => d.quarter.toLowerCase() === timeframe);

  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Custom Dark Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 border border-slate-700/80 p-3 rounded-lg shadow-xl text-xs backdrop-blur-md">
          <div className="font-semibold text-slate-200 mb-1.5 pb-1 border-b border-slate-800">
            {label}
          </div>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center justify-between space-x-4 py-0.5">
              <span className="flex items-center space-x-1.5 text-slate-400">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color || entry.stroke || entry.fill }} />
                <span>{entry.name}:</span>
              </span>
              <span className="font-mono font-medium text-slate-100">
                {entry.name.includes('Margin') || entry.name.includes('Profit') ? `₹${entry.value}L (${entry.value}%)` : `₹${entry.value}L`}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-card border border-slate-800/90 rounded-xl overflow-hidden shadow-2xl">
      
      {/* Dashboard Top Navigation & Filter Bar */}
      <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Left: Title & Tag */}
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <BarChart2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="text-sm font-heading font-bold text-white tracking-tight">
                Pan-India Retail Sales & Revenue Intelligence Console
              </h4>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                INR (₹) Analytics
              </span>
            </div>
            <p className="text-xs text-slate-400 flex items-center space-x-1.5 mt-0.5">
              <Info className="w-3 h-3 text-cyan-400 inline" />
              <span>Multi-Zone Indian Retail Demo Data • Relational SQL Star Schema + Power BI DAX</span>
            </p>
          </div>
        </div>

        {/* Right: Quarter Controls & View Switcher */}
        <div className="flex flex-wrap items-center gap-2.5">
          
          {/* Timeframe selector */}
          <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
            <span className="text-[11px] text-slate-400 px-2 font-mono hidden sm:inline">Fiscal Period:</span>
            {[
              { id: 'all', label: 'Full Year' },
              { id: 'q1', label: 'Q1' },
              { id: 'q2', label: 'Q2' },
              { id: 'q3', label: 'Q3' },
              { id: 'q4', label: 'Q4 (Festive)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTimeframe(tab.id)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  timeframe === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code Drawer Toggle */}
          <button
            onClick={() => setShowCodeDrawer(!showCodeDrawer)}
            className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              showCodeDrawer
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                : 'bg-slate-850 text-slate-300 border-slate-700 hover:border-slate-600'
            }`}
          >
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            <span>{showCodeDrawer ? 'Hide SQL/DAX' : 'View SQL/DAX'}</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800/80 border-b border-slate-800">
        
        {/* KPI 1: Revenue */}
        <div className="p-4 sm:p-5 bg-slate-900/90 text-left">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-medium">Total Revenue (INR)</span>
            <IndianRupee className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-xl sm:text-2xl font-heading font-extrabold text-white">
            {kpi.revenue}
          </div>
          <div className="flex items-center space-x-1 mt-1 text-xs font-mono text-emerald-400">
            <TrendingUp className="w-3 h-3" />
            <span>{kpi.revenueGrowth} YoY Growth</span>
          </div>
        </div>

        {/* KPI 2: Gross Profit Margin */}
        <div className="p-4 sm:p-5 bg-slate-900/90 text-left">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-medium">Gross Profit Margin</span>
            <Percent className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-xl sm:text-2xl font-heading font-extrabold text-white">
            {kpi.profitMargin}
          </div>
          <div className="flex items-center space-x-1 mt-1 text-xs font-mono text-emerald-400">
            <TrendingUp className="w-3 h-3" />
            <span>{kpi.marginGrowth} Margin YoY</span>
          </div>
        </div>

        {/* KPI 3: Units Sold */}
        <div className="p-4 sm:p-5 bg-slate-900/90 text-left">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-medium">Total Volume / Orders</span>
            <Package className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl sm:text-2xl font-heading font-extrabold text-white">
            {kpi.unitsSold}
          </div>
          <div className="flex items-center space-x-1 mt-1 text-xs font-mono text-emerald-400">
            <TrendingUp className="w-3 h-3" />
            <span>{kpi.unitsGrowth} Volume YoY</span>
          </div>
        </div>

        {/* KPI 4: Target Variance */}
        <div className="p-4 sm:p-5 bg-slate-900/90 text-left">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-medium">Target Variance</span>
            <Target className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-heading font-extrabold text-white">
            {kpi.targetAchievement}
          </div>
          <div className="flex items-center space-x-1 mt-1 text-xs font-mono text-cyan-400">
            <span>{kpi.targetDelta} vs Annual Target</span>
          </div>
        </div>

      </div>

      {/* SQL / DAX Code Drawer (Collapsible) */}
      {showCodeDrawer && (
        <div className="p-5 bg-slate-950 border-b border-slate-800 text-left animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-mono text-cyan-300 font-semibold uppercase tracking-wider">
                India Retail SQL Pipeline & Power BI DAX Measures
              </span>
            </div>
            <button
              onClick={() => handleCopyCode(RESUME_DATA.flagshipCaseStudy.dataPipeline.sqlQuery)}
              className="inline-flex items-center space-x-1.5 px-2.5 py-1 text-xs bg-slate-800 text-slate-200 rounded border border-slate-700 hover:bg-slate-700"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied' : 'Copy SQL'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* SQL Star Schema Extraction */}
            <div>
              <div className="text-[11px] font-mono text-slate-400 mb-1.5 flex items-center justify-between">
                <span>SQL ETL Extraction (FactSales + Zone/State/Tier Dims)</span>
                <span className="text-slate-400">ANSI SQL</span>
              </div>
              <pre className="p-3 bg-slate-900 text-slate-300 rounded-lg text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed max-h-56">
                <code>{RESUME_DATA.flagshipCaseStudy.dataPipeline.sqlQuery}</code>
              </pre>
            </div>

            {/* DAX Measures */}
            <div>
              <div className="text-[11px] font-mono text-slate-400 mb-1.5 flex items-center justify-between">
                <span>Power BI DAX Measures (Time Intelligence & Margin)</span>
                <span className="text-slate-400">DAX Formula</span>
              </div>
              <div className="space-y-2 max-h-56 overflow-y-auto">
                {RESUME_DATA.flagshipCaseStudy.analysis.daxMeasures.map((measure, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <div className="text-xs font-semibold text-cyan-400 mb-1">
                      {measure.name}
                    </div>
                    <code className="text-[11px] font-mono text-slate-300 block bg-slate-950 p-1.5 rounded border border-slate-800/80 break-all">
                      {measure.formula}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Interactive Chart Section */}
      <div className="p-5 bg-slate-925">
        
        {/* Chart View Switcher */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
          <div className="flex items-center space-x-2">
            {[
              { id: 'trend', label: 'Monthly Revenue vs Target (₹ Lakhs)', icon: TrendingUp },
              { id: 'regional', label: 'Indian Regional Performance (₹ Lakhs)', icon: BarChart2 },
              { id: 'category', label: 'Category Margin Share (₹ Cr)', icon: PieIcon }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = chartView === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setChartView(tab.id)}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            Interactive BI Visualizer
          </span>
        </div>

        {/* View 1: Revenue vs Target Trend (Area & Line) */}
        {chartView === 'trend' && (
          <div className="space-y-4">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={displayMonthlyData}
                  margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#64748B" 
                    fontSize={11} 
                    tickLine={false} 
                  />
                  <YAxis 
                    stroke="#64748B" 
                    fontSize={11} 
                    tickLine={false} 
                    unit="L" 
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} 
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    name="Actual Revenue (₹ Lakhs)"
                    stroke="#06B6D4"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                  <Area
                    type="monotone"
                    dataKey="profit"
                    name="Gross Profit (₹ Lakhs)"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorProfit)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="p-3 bg-slate-900/70 rounded-lg border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>📈 <strong>Festive Surge:</strong> October (Diwali) and November reached peak monthly revenues of ₹128 Lakhs and ₹122 Lakhs (+22.8% YoY growth) with strong margins.</span>
              <span className="font-mono text-cyan-400 text-[11px] hidden md:inline">DAX YoY Active</span>
            </div>
          </div>
        )}

        {/* View 2: Regional Performance (Bar Chart) */}
        {chartView === 'regional' && (
          <div className="space-y-4">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={ANALYTICS_DATA.regionalBreakdown}
                  margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                  <XAxis dataKey="region" stroke="#64748B" fontSize={11} tickLine={false} />
                  <YAxis stroke="#64748B" fontSize={11} tickLine={false} unit="L" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="revenue" name="Actual Revenue (₹ Lakhs)" fill="#06B6D4" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="target" name="Target Plan (₹ Lakhs)" fill="#334155" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-3 bg-slate-900/70 rounded-lg border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>🗺️ <strong>Zonal Insights:</strong> West (₹420L) and North (₹395L) drove bulk demand; East (₹200L) achieved the highest net margin efficiency at 38.5%.</span>
              <span className="font-mono text-cyan-400 text-[11px] hidden md:inline">4 Indian Zones Mapped</span>
            </div>
          </div>
        )}

        {/* View 3: Category Share Breakdown */}
        {chartView === 'category' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ANALYTICS_DATA.categoryShare}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={85}
                      paddingAngle={4}
                      dataKey="value"
                      nameKey="name"
                    >
                      {ANALYTICS_DATA.categoryShare.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(val, name, entry) => [`${val}% Share (${entry.payload.revenue})`, name]}
                      contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px', fontSize: '11px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="md:col-span-6 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Category Revenue & Profit Margins (INR)
                </div>
                {ANALYTICS_DATA.categoryShare.map((cat, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: cat.color }}></span>
                      <span className="font-medium text-slate-200">{cat.name}</span>
                    </div>
                    <div className="flex items-center space-x-3 font-mono text-[11px]">
                      <span className="text-slate-300">{cat.revenue} ({cat.value}%)</span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400 font-semibold">{cat.margin} Margin</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3 bg-slate-900/70 rounded-lg border border-slate-800/80 text-xs text-slate-400">
              💡 <strong>Category Profitability:</strong> Apparel & Festive Fashion yielded 44.5% gross margin, providing strong cash flow during festive seasons.
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

