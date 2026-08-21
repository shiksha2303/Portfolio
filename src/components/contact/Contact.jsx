import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MessageSquare,
  Sparkles,
  FileText
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/Icons';
import { RESUME_DATA } from '../../data/resumeData';

export const Contact = ({ onOpenResume }) => {
  const { personal } = RESUME_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null
  const nameInputRef = React.useRef(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleRequestCall = () => {
    if (nameInputRef.current) {
      nameInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      nameInputRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    // Client-side simulated dispatch + direct mailto fallback
    setFormStatus('success');
    
    // Also prepare mailto
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-background-secondary border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-2">
              <MessageSquare className="w-4 h-4" />
              <span>Direct Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Get in Touch
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md mt-2 md:mt-0">
            Open to Data Analyst roles, BI internships, and analytics engineering collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="glass-card p-6 border border-slate-800 text-left">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Primary Contact
                    </span>
                    <h3 className="text-base font-heading font-bold text-white">
                      Email Address
                    </h3>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1 px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${personal.email}`}
                className="text-base sm:text-lg font-mono font-semibold text-cyan-400 hover:text-cyan-300 break-all transition-colors block"
              >
                {personal.email}
              </a>
              <p className="text-xs text-slate-400 mt-1">
                Direct inbox • Response within 24 business hours
              </p>
            </div>

            {/* Direct Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              
              {/* Request a Call */}
              <button
                type="button"
                onClick={handleRequestCall}
                className="glass-card-hover p-4 border border-slate-800 flex items-center justify-between group w-full cursor-pointer"
                title="Request a call via the message form"
              >
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    Request a Call
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </button>

              {/* Location */}
              <div className="glass-card p-4 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-white">
                    {personal.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-4 border border-slate-800 flex items-center justify-between group"
              >
                <div className="flex items-center space-x-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-4 border border-slate-800 flex items-center justify-between group"
              >
                <div className="flex items-center space-x-2.5">
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    GitHub
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>

            </div>

            {/* Quick Resume View Action */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Prefer reviewing the complete resume?</span>
              </div>
              <button
                onClick={onOpenResume}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-xs font-semibold text-cyan-300 border border-slate-700"
              >
                View Resume
              </button>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 border border-slate-800 text-left">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fill out the details below to initiate a discussion or email directly.
                  </p>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                  Direct Pipeline
                </span>
              </div>

              {formStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs sm:text-sm mb-6 flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Message formatted successfully!</div>
                    <p className="text-emerald-400/90 text-xs mt-0.5">
                      Opening your default email client to dispatch to <strong>{personal.email}</strong>.
                    </p>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-3 rounded-lg bg-red-950/80 border border-red-800 text-red-300 text-xs mb-4">
                  Please fill in your name, email, and message before sending.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 text-slate-200 placeholder-slate-400 text-xs sm:text-sm border border-slate-800 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 text-slate-200 placeholder-slate-400 text-xs sm:text-sm border border-slate-800 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    placeholder="Data Analyst Opportunity / Project Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 text-slate-200 placeholder-slate-400 text-xs sm:text-sm border border-slate-800 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Shiksha, we're reviewing your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 text-slate-200 placeholder-slate-400 text-xs sm:text-sm border border-slate-800 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-accent text-slate-950 font-bold text-xs sm:text-sm hover:bg-accent-hover transition-all shadow-md shadow-accent/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Shiksha</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
