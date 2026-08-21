import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Mail, 
  Phone, 
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  Award,
  Compass,
  Code2,
  Globe2,
  Sparkles
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/Icons';
import { RESUME_DATA } from '../../data/resumeData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const { personal, about, skills, experience, projects, flagshipCaseStudy, education, achievements, languages } = RESUME_DATA;

  const handleCopyPlainText = () => {
    const plainText = `
SHIKSHA SONDIK
${personal.email} | ${personal.phone} | LinkedIn: ${personal.linkedin} | GitHub: ${personal.github}

CAREER OBJECTIVE
${personal.careerObjective}

EDUCATION
${education.degree} Expected ${education.duration.replace('Expected ', '')}
${education.institution}

INTERNSHIP EXPERIENCE
${experience[0].role} – ${experience[0].company} ${experience[0].duration}
• ${experience[0].bullets[0]}
• ${experience[0].bullets[1]}
• ${experience[0].bullets[2]}

${experience[1].role} – ${experience[1].company} ${experience[1].duration}
• ${experience[1].bullets[0]}
• ${experience[1].bullets[1]}
• ${experience[1].bullets[2]}

PROJECTS
1. ${projects[0].title} – ${projects[0].subtitle} (${projects[0].techStack.slice(0, 4).join(', ')})
• ${projects[0].highlights[0]}
• ${projects[0].highlights[1]}

2. ${projects[1].title} – ${projects[1].subtitle} (${projects[1].techStack.slice(0, 4).join(', ')})
• ${projects[1].highlights[0]}
• ${projects[1].highlights[1]}

3. ${flagshipCaseStudy.title} (${flagshipCaseStudy.tools.slice(0, 3).join(', ')})
• Designed an interactive Power BI dashboard analysing regional sales performance, revenue trends, and product category insights across multiple business segments across India.
• Authored SQL queries to extract and transform raw relational data; applied DAX measures for dynamic KPIs, enabling data-driven reporting on growth and top-performing segments.

TECHNICAL SKILLS
Programming Languages: ${skills.categories.find(c => c.id === 'programming-languages')?.items.join(', ')}
Web & Mobile Technologies: ${skills.categories.find(c => c.id === 'web-mobile')?.items.join(', ')}
Database: ${skills.categories.find(c => c.id === 'database')?.items.join(', ')}
AI/ML: ${skills.categories.find(c => c.id === 'ai-ml')?.items.join(', ')}
Tools & Methodologies: ${skills.categories.find(c => c.id === 'tools-methodologies')?.items.join(', ')}
Business Tools: ${skills.categories.find(c => c.id === 'business-tools')?.items.join(', ')}

SOFT SKILLS
${skills.categories.find(c => c.id === 'soft-skills')?.items.join(' | ')}

ACHIEVEMENTS & EXTRA-CURRICULAR ACTIVITIES
• ${achievements[0].title}: ${achievements[0].impact}
• ${achievements[1].title}: ${achievements[1].impact}

LANGUAGES
${languages.map(l => `${l.name} – ${l.level}`).join(' | ')}
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      
      {/* Modal Container */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Bar / Action Controls */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-heading font-bold text-white">
                Interactive Resume Viewer
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Official Resume • B.Tech CSE (2027)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium bg-slate-850 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-700 transition-colors"
              title="Copy plain text formatted for ATS"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copied ? 'Copied ATS Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium bg-slate-850 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-700 transition-colors"
              title="Print formatted resume"
            >
              <Printer className="w-3.5 h-3.5 text-slate-300" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={() => {
                alert(`Official Resume for ${personal.name} is verified.\nTo request an updated official PDF copy, you can reach out directly to ${personal.email}.`);
              }}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg transition-colors shadow-sm"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 bg-slate-900 text-left text-slate-200 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 text-center sm:text-left">
            <h1 className="text-3xl font-heading font-extrabold text-white tracking-wide">
              {personal.name.toUpperCase()}
            </h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 mt-2.5 text-xs text-slate-300 font-mono">
              <a href={`mailto:${personal.email}`} className="hover:text-cyan-300 transition-colors flex items-center space-x-1">
                <Mail className="w-3 h-3 text-cyan-400" />
                <span>{personal.email}</span>
              </a>
              <span>|</span>
              <a href={`tel:${personal.phone}`} className="hover:text-cyan-300 transition-colors flex items-center space-x-1">
                <Phone className="w-3 h-3 text-cyan-400" />
                <span>{personal.phone}</span>
              </a>
              <span>|</span>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors flex items-center space-x-1">
                <LinkedinIcon className="w-3 h-3 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
              <span>|</span>
              <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors flex items-center space-x-1">
                <GithubIcon className="w-3 h-3 text-white" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1.5 mb-2.5 flex items-center space-x-2">
              <Compass className="w-4 h-4" />
              <span>Career Objective</span>
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed text-justify">
              {personal.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1.5 mb-2.5 flex items-center space-x-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">{education.degree}</h3>
                <p className="text-xs text-slate-300">{education.institution}</p>
              </div>
              <span className="text-xs font-mono text-cyan-400 mt-1 sm:mt-0">{education.duration}</span>
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1.5 mb-3 flex items-center space-x-2">
              <Briefcase className="w-4 h-4" />
              <span>Internship Experience</span>
            </h2>
            <div className="space-y-5">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1.5">
                    <div>
                      <span className="text-sm font-bold text-white">{exp.role}</span>
                      <span className="text-xs text-cyan-300 font-medium"> – {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-300">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1.5 mb-3 flex items-center space-x-2">
              <Layers className="w-4 h-4" />
              <span>Projects</span>
            </h2>
            <div className="space-y-4">
              
              {/* PunchIn */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <span className="text-sm font-bold text-white">
                    1. PunchIn – Attendance & Payroll Management System <span className="text-xs font-normal text-slate-400 font-mono">(HTML, CSS, JavaScript, SQL)</span>
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-300">
                  <li>Developed a full-featured web application for employee attendance tracking and automated payroll computation, supporting organisations of up to 50+ staff.</li>
                  <li>Designed a normalised SQL database schema (3NF) covering employee records, attendance logs, and payroll tables, reducing data redundancy.</li>
                </ul>
              </div>

              {/* RouteSure */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <span className="text-sm font-bold text-white">
                    2. RouteSure – Smart Route Optimisation Web App <span className="text-xs font-normal text-slate-400 font-mono">(HTML, CSS, JavaScript, Maps API)</span>
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-300">
                  <li>Architected a web application integrating a Maps API to compute and display optimised travel routes with live distance and ETA visualisation.</li>
                  <li>Implemented dynamic re-routing logic for multiple waypoints, with filter controls for fastest, safest, and shortest path preferences.</li>
                </ul>
              </div>

              {/* Sales Analytics Dashboard (India-Centric Flagship Case Study) */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <span className="text-sm font-bold text-white">
                    3. Sales Analytics Dashboard <span className="text-xs font-normal text-slate-400 font-mono">(Power BI, SQL, Excel)</span>
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-300">
                  <li>Designed an interactive Power BI dashboard analysing regional sales performance, revenue trends, and product category insights across multiple business segments across India.</li>
                  <li>Authored SQL queries to extract and transform raw relational data; applied DAX measures for dynamic KPIs, enabling data-driven reporting on growth and top-performing segments.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1.5 mb-2.5 flex items-center space-x-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div>
                <strong className="text-white">Programming Languages: </strong>
                <span>Python, JavaScript (ES6+), C, C++, Java, SQL</span>
              </div>
              <div>
                <strong className="text-white">Web & Mobile Technologies: </strong>
                <span>HTML5, CSS3, React.js, Node.js, Bootstrap, Responsive Design, REST API Integration, DOM Manipulation, UI/UX Design</span>
              </div>
              <div>
                <strong className="text-white">Database: </strong>
                <span>MySQL, DBMS, ETL, Data Modelling, Normalised Schema Design (3NF)</span>
              </div>
              <div>
                <strong className="text-white">AI/ML: </strong>
                <span>Python (Pandas, NumPy), Data Cleaning, Data Wrangling, Exploratory Data Analysis, Data Visualisation</span>
              </div>
              <div>
                <strong className="text-white">Tools & Methodologies: </strong>
                <span>Git, GitHub, VS Code, Agile/Scrum, SDLC, Version Control, DSA, OOP, Requirement Research</span>
              </div>
              <div>
                <strong className="text-white">Business Tools: </strong>
                <span>Power BI, DAX, Tableau, Advanced Excel, MS Office, Google Analytics, KPI Reporting</span>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1.5 mb-2 flex items-center space-x-2">
              <span>Soft Skills</span>
            </h2>
            <p className="text-xs text-slate-300">
              Communication | Research & Analytical Thinking | Stakeholder Collaboration | Content Design | Problem-Solving
            </p>
          </div>

          {/* Achievements & Extra-Curricular Activities */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1.5 mb-2.5 flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Achievements & Extra-Curricular Activities</span>
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-slate-300">
              <li>
                <strong className="text-white">Event Coordinator – College Technical & Cultural Fests: </strong>
                <span>Spearheaded end-to-end planning and execution of multiple college-level events, managing volunteer teams of 20+ members and logistics for 300+ participants.</span>
              </li>
              <li>
                <strong className="text-white">Community Drive Lead – Menstrual Hygiene Initiative: </strong>
                <span>Led grassroots fundraising campaigns and coordinated procurement and distribution of sanitary products, impacting 200+ beneficiaries across multiple communities.</span>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1.5 mb-2 flex items-center space-x-2">
              <Globe2 className="w-4 h-4" />
              <span>Languages</span>
            </h2>
            <p className="text-xs text-slate-300">
              English – Professional Proficiency | Hindi – Native / Full Professional Proficiency | German – Intermediate (B1 Level)
            </p>
          </div>

        </div>

        {/* Footer Note */}
        <div className="p-3.5 bg-slate-950 border-t border-slate-800 text-center text-[11px] text-slate-400 font-mono no-print">
          Source of Truth: Resume Verified • B.Tech CSE (Expected 2027) • Coal India Ltd. (BCCL) Intern
        </div>

      </div>

    </div>
  );
};

