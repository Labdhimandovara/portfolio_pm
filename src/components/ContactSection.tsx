import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  Sparkles,
  Send,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const GitHubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.name) return;
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 bg-neutral-900 text-white relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-purple-600/10 to-amber-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-mono font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START A CONVERSATION</span>
        </div>

        {/* Large Closing Statement */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-3xl mx-auto leading-[1.08]">
          Have a product worth building?
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-neutral-300 max-w-xl mx-auto mt-6 leading-relaxed">
          Let's turn the problem into something people actually want to use.
        </p>

        {/* Contact Links & Email Copy Pill */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          
          <button
            onClick={handleCopyEmail}
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-100 transition-all shadow-md active:scale-95"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-neutral-500" />}
            <span>{copied ? 'Email Copied!' : PERSONAL_INFO.email}</span>
          </button>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all active:scale-95"
          >
            <LinkedInIcon className="w-4 h-4 text-blue-400" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 opacity-60" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all active:scale-95"
          >
            <GitHubIcon className="w-4 h-4 text-neutral-300" />
            <span>GitHub Code</span>
            <ArrowUpRight className="w-4 h-4 opacity-60" />
          </a>
        </div>

        {/* Interactive Quick Note Form */}
        <div className="mt-14 max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-4">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>DIRECT INQUIRY / PRODUCT NOTE</span>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
              <Check className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white">Thank you for reaching out!</h4>
              <p className="text-xs text-neutral-300">
                I'll respond to your email at <strong>{form.email}</strong> shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-neutral-400 block mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Alex (Recruiter / Founder)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-hidden focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-neutral-400 block mb-1">WORK EMAIL</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-hidden focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-neutral-400 block mb-1">ROLE / OPPORTUNITY CONTEXT</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the APM, PM, or AI Product role you have in mind..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-hidden focus:border-blue-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Product Message</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
