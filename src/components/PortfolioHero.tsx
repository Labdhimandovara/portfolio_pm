import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroWorkspaceImg from '../assets/hero_workspace.jpg';
import { Sparkles, Music, BookOpen, Film, Gamepad2, Camera, Laptop, Coffee, Info, Volume2, X } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

interface Hotspot {
  id: string;
  label: string;
  category: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  x: string; // percentage from left
  y: string; // percentage from top
  details?: string[];
}

export const PortfolioHero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const hotspots: Hotspot[] = [
    {
      id: 'books',
      label: 'Books',
      category: 'Product & Systems',
      icon: <BookOpen className="w-3.5 h-3.5 text-blue-500" />,
      title: 'Current Bookshelf',
      description: 'Books that shape my thinking on product architectures, human behavior, and high-agency engineering.',
      x: '38%',
      y: '18%',
      details: [
        'The Silent Patient — Alex Michaelides',
        'Zero to One — Peter Thiel',
        'The Design of Everyday Things — Don Norman',
        'Designing Data-Intensive Applications — Martin Kleppmann',
        'Atomic Habits — James Clear'
      ]
    },
    {
      id: 'plant',
      label: 'Plant',
      category: 'Greenery',
      icon: <Coffee className="w-3.5 h-3.5 text-emerald-500" />,
      title: 'Desk Plant',
      description: 'A touch of calm and patience during intensive hackathons, training runs, and debugging marathons.',
      x: '52%',
      y: '17%',
      details: ['Brings fresh focus & greenery to the workstation']
    },
    {
      id: 'games',
      label: 'Fav Games',
      category: 'PlayStation & Strategy',
      icon: <Gamepad2 className="w-3.5 h-3.5 text-indigo-500" />,
      title: 'Gaming & Strategy',
      description: 'Big fan of world-building and tactical decision-making in video games.',
      x: '64%',
      y: '18%',
      details: [
        'God of War (Ragnarok)',
        'Horizon Zero Dawn',
        'FIFA / EA FC',
        'Chess Strategy'
      ]
    },
    {
      id: 'camera',
      label: 'Camera',
      category: 'Moments & Photography',
      icon: <Camera className="w-3.5 h-3.5 text-amber-500" />,
      title: 'Visual Storytelling',
      description: 'Capturing candid human moments, street architecture, and visual aesthetics off-screen.',
      x: '39%',
      y: '33%',
      details: [
        'Analog-style photography',
        'Visual composition & framing',
        'Travel memories from Maharashtra & MP'
      ]
    },
    {
      id: 'speakers',
      label: 'Fav Songs',
      category: 'Audio & Voice AI',
      icon: <Music className="w-3.5 h-3.5 text-rose-500" />,
      title: 'Smart Audio & Fav Songs',
      description: 'Music that powers my late-night focus sessions, plus my obsession with real-time streaming voice pipelines.',
      x: '51%',
      y: '33%',
      details: [
        'Ambient Lo-Fi & Indie Folk',
        'Coke Studio Season 14',
        'A.R. Rahman Classics',
        'Ludovico Einaudi & Hans Zimmer'
      ]
    },
    {
      id: 'boardgames',
      label: 'Board Games',
      category: 'Tabletop Strategy & Puzzles',
      icon: <Gamepad2 className="w-3.5 h-3.5 text-orange-500" />,
      title: 'Favorite Board Games & Puzzles',
      description: 'Strategic planning, resource optimization, and spatial algorithmic logic.',
      x: '65%',
      y: '34%',
      details: [
        'Chess (Tactical Strategy & Foresight)',
        'Splendor (Resource Engine Building)',
        'Monopoly (Negotiation & Trade)',
        'Rubik\'s Cube (Spatial & Algorithmic Solving)'
      ]
    },
    {
      id: 'workstation',
      label: 'Code & PRDs',
      category: 'AI Engineering & Product Work',
      icon: <Laptop className="w-3.5 h-3.5 text-blue-600" />,
      title: 'Primary Workstation',
      description: 'Where ideas transform into tested software, MCP tools, and production-ready AI products.',
      x: '52%',
      y: '53%',
      details: [
        'Building Raya (Agentic Commerce for Razorpay)',
        'Designing Dhan Saarthi (Nomura KakushIN Finalist)',
        'Benchmarking Agora vs Pipecat (Edysor AI)',
        'Writing 664 unit tests for deterministic solvers'
      ]
    }
  ];

  return (
    <section id="home" className="relative pt-6 sm:pt-10 pb-16 px-4 sm:px-6 bg-[#FBFBF9] overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Title Area matching Portfolio reference screenshot */}
        <div className="flex flex-col items-center justify-center space-y-2 mb-6 sm:mb-8">
          
          {/* Main Name Heading with Cursor Pointer */}
          <div className="relative inline-flex items-center">
            {/* The signature pink/magenta cursor pointer */}
            <div className="absolute -left-6 sm:-left-8 top-1 sm:top-2 text-[#E05670] transform -rotate-12 animate-bounce">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current drop-shadow-sm" viewBox="0 0 24 24">
                <path d="M3 3l7 18 3-7 7-3L3 3z" />
              </svg>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
              Hi, I'm <span className="text-[#D9536C]">Labdhi</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-normal max-w-2xl leading-relaxed">
            AI Engineer & Product Builder crafting intelligent, scalable products
          </p>

          {/* Micro Interactive Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200/90 shadow-2xs text-[11px] text-neutral-500 font-mono mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Click or hover items on the shelf & desk to explore</span>
          </div>
        </div>

        {/* 3D Workspace Scene Centerpiece */}
        <div className="relative mx-auto max-w-4xl rounded-3xl overflow-hidden border border-neutral-200/90 bg-white shadow-xl group">
          
          {/* Image of the 3D clay desk setup */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] select-none overflow-hidden bg-[#FAF9F5]">
            <img
              src={heroWorkspaceImg}
              alt="Labdhi's 3D Workspace with shelf and desk"
              className="w-full h-full object-cover sm:object-contain object-center transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Interactive Hotspot Buttons on the Shelf & Desk */}
            {hotspots.map((h) => (
              <div
                key={h.id}
                style={{ left: h.x, top: h.y }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  onClick={() => setActiveHotspot(activeHotspot?.id === h.id ? null : h)}
                  onMouseEnter={() => setActiveHotspot(h)}
                  className="relative group/hotspot p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white text-neutral-800 shadow-md border border-neutral-300/80 backdrop-blur-md transition-all hover:scale-110 active:scale-95"
                  aria-label={h.title}
                >
                  <span className="absolute -inset-1 rounded-full bg-blue-500/20 animate-ping opacity-60 pointer-events-none" />
                  {h.icon}
                  
                  {/* Subtle hover label pill */}
                  <span className="hidden sm:group-hover/hotspot:inline-block absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-neutral-900/90 text-white text-[10px] font-mono whitespace-nowrap shadow-lg z-30 pointer-events-none">
                    {h.label}
                  </span>
                </button>
              </div>
            ))}

            {/* Active Hotspot Info Overlay Card */}
            <AnimatePresence>
              {activeHotspot && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-2xl text-left z-30"
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-neutral-100 border border-neutral-200">
                        {activeHotspot.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                          {activeHotspot.category}
                        </span>
                        <h4 className="text-sm font-bold text-neutral-900 leading-tight">
                          {activeHotspot.title}
                        </h4>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                    {activeHotspot.description}
                  </p>

                  {activeHotspot.details && activeHotspot.details.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-neutral-100 space-y-1">
                      {activeHotspot.details.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-neutral-700 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Scene Bottom Quick Interaction Bar */}
          <div className="px-4 py-3 bg-neutral-50/90 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-600">
              <span className="px-2 py-0.5 rounded-md bg-white border border-neutral-200 font-semibold text-neutral-800">
                AI + Product
              </span>
              <span>Symbiosis Institute of Technology • CGPA 8.4</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#works"
                className="px-4 py-1.5 rounded-full bg-neutral-900 hover:bg-blue-600 text-white font-bold text-xs transition-colors"
              >
                View Selected Works
              </a>
              <button
                onClick={onOpenContact}
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 font-semibold text-xs border border-neutral-200 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
