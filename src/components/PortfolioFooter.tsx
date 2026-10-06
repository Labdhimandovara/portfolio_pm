import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Copy, Check, Mail, Monitor } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

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

export const PortfolioFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 px-4 sm:px-8 bg-[#FBFBF9] border-t border-neutral-200/90 text-neutral-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Top Callout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight">
              Let's Connect :
            </h2>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base max-w-md">
              Have an APM, PM, or AI Product role worth building together? Let's talk.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopy}
              className="px-5 py-3 rounded-full bg-white hover:bg-neutral-100 border border-neutral-300 font-bold text-xs text-neutral-900 shadow-2xs transition-all flex items-center gap-2 active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-neutral-500" />}
              <span>{copied ? 'Copied to Clipboard!' : PERSONAL_INFO.email}</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white hover:bg-neutral-100 border border-neutral-300 text-blue-600 shadow-2xs transition-all flex items-center gap-1.5 text-xs font-semibold"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-900 shadow-2xs transition-all flex items-center gap-1.5 text-xs font-semibold"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Desktop Experience Banner matching Portfolio's exact footer callout */}
        <div className="p-4 rounded-2xl bg-neutral-100/70 border border-neutral-200/70 flex items-center gap-3 text-xs text-neutral-600">
          <Monitor className="w-4 h-4 text-neutral-400 shrink-0" />
          <span>
            This portfolio features in-depth case studies, system architectures, and interactive flows that are best experienced on a larger screen. For the optimal viewing experience, please open this link on your desktop or laptop.
          </span>
        </div>

        {/* Bottom Bar matching Portfolio's footer layout */}
        <div className="pt-6 border-t border-neutral-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-900">{PERSONAL_INFO.name}</span>
            <span>•</span>
            <span className="font-mono text-[11px]">B.Tech ENTC • Symbiosis Institute of Technology</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700 font-medium transition-colors"
            >
              <span>Go back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
