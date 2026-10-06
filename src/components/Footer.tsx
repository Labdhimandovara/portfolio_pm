import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-8 bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-7 h-7 rounded-full bg-white text-neutral-900 font-bold flex items-center justify-center text-[11px]">
            LM
          </div>
          <div>
            <p className="font-semibold text-white">{PERSONAL_INFO.name}</p>
            <p className="text-[11px] text-neutral-500 font-mono">B.Tech ENTC • Symbiosis Institute of Technology</p>
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-neutral-400">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#approach" className="hover:text-white transition-colors">Approach</a>
          <a href="#metrics" className="hover:text-white transition-colors">Metrics</a>
          <a href="#toolkit" className="hover:text-white transition-colors">Toolkit</a>
          <a href="#leadership" className="hover:text-white transition-colors">Leadership</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-neutral-900 text-center text-[11px] text-neutral-600 font-mono">
        Designed for Product Management × AI × Engineering • All metrics verified against codebase & official competition records.
      </div>
    </footer>
  );
};
