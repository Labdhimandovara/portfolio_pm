import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Compass, Film, Music, Gamepad2, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const DevanshuStyleNavbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [activeFunTag, setActiveFunTag] = useState<string | null>(null);

  const funTags = [
    { id: 'movies', label: 'Fav. Movies', icon: <Film className="w-3 h-3 text-amber-500" />, tip: 'Interstellar, The Social Network, Whiplash' },
    { id: 'travel', label: 'Travel & Photography', icon: <Camera className="w-3 h-3 text-blue-500" />, tip: 'Exploring heritage architecture & mountain trails' },
    { id: 'games', label: 'Fav. Board Games', icon: <Gamepad2 className="w-3 h-3 text-purple-500" />, tip: 'Catan, Chess & strategy puzzles' },
    { id: 'music', label: 'Fav. Songs', icon: <Music className="w-3 h-3 text-emerald-500" />, tip: 'Ambient acoustic, Indie pop & Lo-fi beats' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FBFBF9]/90 backdrop-blur-xl border-b border-neutral-200/70 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3">
        
        {/* Top bar row */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand identifier pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-neutral-900 tracking-tight">
              Hi, I'm {PERSONAL_INFO.name.split(' ')[0]}.
            </span>
          </div>

          {/* Primary Navigation Links */}
          <nav className="flex items-center gap-1.5">
            <a
              href="#works"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-all"
            >
              My Works
            </a>
            <a
              href="#about-me"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-all"
            >
              About Me
            </a>
            <a
              href="#journey"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-all"
            >
              My Journey
            </a>
            <a
              href="#appreciations"
              className="hidden sm:inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-all"
            >
              Appreciations
            </a>

            <button
              onClick={onOpenContact}
              className="ml-2 px-4 py-1.5 rounded-full bg-neutral-950 hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-xs"
            >
              Let's Connect
            </button>
          </nav>
        </div>

        {/* Secondary Interactive Pills Row (Exact Devanshu Chauhan touch!) */}
        <div className="hidden md:flex items-center justify-between pt-2.5 mt-2 border-t border-neutral-200/50 text-[11px] text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="font-mono text-neutral-400">Hover elements to interact:</span>
            {funTags.map((tag) => (
              <div
                key={tag.id}
                onMouseEnter={() => setActiveFunTag(tag.id)}
                onMouseLeave={() => setActiveFunTag(null)}
                className="relative group cursor-pointer"
              >
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200/80 transition-colors">
                  {tag.icon}
                  <span className="font-medium text-neutral-700">{tag.label}</span>
                </div>

                {activeFunTag === tag.id && (
                  <div className="absolute top-full left-0 mt-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 text-white text-[11px] shadow-lg whitespace-nowrap z-50 animate-in fade-in zoom-in-95 duration-150">
                    {tag.tip}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center gap-0.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors flex items-center gap-0.5"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};
