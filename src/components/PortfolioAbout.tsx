import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, Palette, Compass, Trophy, Code2 } from 'lucide-react';

import labdhiGreenPortrait from '../assets/portfolio/labdhi_portrait_green.jpg';
import labdhiFormalElevator from '../assets/portfolio/labdhi_formal_elevator.png';
import profilePhoto from '../assets/portfolio/profile-CQEuO0j2.jpg';
import userPhoto1 from '../assets/portfolio/user-HOK2bPUo.jpg';
import avatar3D from '../assets/avatar_3d.jpg';
import hackathonCake from '../assets/portfolio/cake-Khk05ZwI.jpg';

import artwork1 from '../assets/portfolio/artwork1-7kfIIppc.jpg';
import artwork2 from '../assets/portfolio/artwork2-CdTeIpFE.jpg';
import artwork3 from '../assets/portfolio/artwork3-CQsPYwn9.jpg';
import artwork4 from '../assets/portfolio/artwork4-BqrmbCcy.jpg';

export const PortfolioAbout: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(2);
  const [selectedArt, setSelectedArt] = useState<string | null>(null);

  const photoCards = [
    {
      id: 'photo-1',
      src: labdhiFormalElevator,
      title: 'Professional & Presentation',
      subtitle: 'Hackathons & technical defense'
    },
    {
      id: 'photo-2',
      src: userPhoto1,
      title: 'Reading & Product Thinking',
      subtitle: 'Exploring user behavior & systems'
    },
    {
      id: 'photo-3',
      src: labdhiGreenPortrait,
      title: 'Labdhi Mandovara',
      subtitle: 'AI Engineer & Product Builder'
    },
    {
      id: 'photo-4',
      src: profilePhoto,
      title: 'Builder & Innovator',
      subtitle: 'Symbiosis Institute of Technology, Pune'
    },
    {
      id: 'photo-5',
      src: avatar3D,
      title: '3D AI Persona',
      subtitle: 'Agentic AI & intelligent interfaces'
    }
  ];

  const superPowers = [
    { title: "Product Strategy & PRDs", desc: "Translating fuzzy problems into clear scopes, boundary conditions, and decision trees." },
    { title: "Agentic AI & MCP Protocol", desc: "Architecting autonomous tool-use protocols, multi-merchant search, and 6-gate policy engines." },
    { title: "Real-Time Streaming Voice", desc: "Benchmarking streaming STT → LLM → TTS pipelines for sub-500ms conversation latency." },
    { title: "Deterministic Guardrails", desc: "Combining mathematical algorithms with generative AI fallbacks for 100% verified answers." },
    { title: "Rapid High-Fidelity UX", desc: "Prototyping 50+ screens for inclusive multimodal and vernacular voice-first accessibility." },
    { title: "Automated QA & Telemetry", desc: "Building 664 unit test suites and turn-by-turn latency profilers for rock-solid reliability." },
    { title: "Multi-Agent Orchestration", desc: "Choreographing CrewAI swarms with dedicated roles, tools, and CRM synchronizations." },
    { title: "Cross-Functional Leadership", desc: "Leading departmental magazines, hackathon delegations, and cross-team collaborations." },
  ];

  const artworks = [
    { src: artwork1, title: 'Charcoal & Graphite Portrait', medium: 'Traditional Sketching' },
    { src: artwork2, title: 'Expressive Fine Art', medium: 'Pencil on Paper' },
    { src: artwork3, title: 'Detailed Figurative Art', medium: 'Graphite Shading' },
    { src: artwork4, title: 'Creative Aesthetic Composition', medium: 'Mixed Media Art' }
  ];

  return (
    <section id="about-me" className="py-24 px-4 sm:px-8 bg-white border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
            About Me
          </h2>
        </div>

        {/* 5-Photo Fan/Arc Carousel */}
        <div className="relative max-w-4xl mx-auto py-6 flex items-center justify-center select-none overflow-x-hidden sm:overflow-visible">
          <div className="flex items-center justify-center -space-x-4 sm:-space-x-8 md:-space-x-12">
            {photoCards.map((card, idx) => {
              const isCenter = idx === 2;
              const isLeft1 = idx === 1;
              const isLeft2 = idx === 0;
              const isRight1 = idx === 3;
              const isRight2 = idx === 4;

              let transformClass = '';
              let zIndexClass = 'z-10';
              let sizeClass = 'w-36 h-56 sm:w-48 sm:h-72 md:w-56 md:h-80';

              if (isCenter) {
                transformClass = 'scale-105 sm:scale-110 -translate-y-2 shadow-2xl';
                zIndexClass = 'z-30';
              } else if (isLeft1) {
                transformClass = '-rotate-3 sm:-rotate-4 scale-95 opacity-90 shadow-lg';
                zIndexClass = 'z-20';
              } else if (isRight1) {
                transformClass = 'rotate-3 sm:rotate-4 scale-95 opacity-90 shadow-lg';
                zIndexClass = 'z-20';
              } else if (isLeft2) {
                transformClass = '-rotate-6 sm:-rotate-8 scale-85 opacity-75 shadow-md';
                zIndexClass = 'z-10';
              } else if (isRight2) {
                transformClass = 'rotate-6 sm:rotate-8 scale-85 opacity-75 shadow-md';
                zIndexClass = 'z-10';
              }

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`relative flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border-2 border-white/90 cursor-pointer transition-all duration-300 hover:scale-105 hover:z-40 ${sizeClass} ${transformClass} ${zIndexClass}`}
                >
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-left">
                    <span className="text-[11px] font-bold text-white">{card.title}</span>
                    <span className="text-[9px] text-neutral-300">{card.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bio Copy */}
        <div className="max-w-2xl mx-auto text-center mt-10 space-y-4">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Hi, I'm Labdhi.
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            AI Engineer and Product Builder from India. I design and build experiences that feel effortless, blending intelligent agentic systems and intuitive UX seamlessly into everyday life so it becomes not just functional, but delightful.
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal">
            B.Tech in Electronics & Telecommunication at Symbiosis Institute of Technology, Pune (CGPA 8.4). Nomura KakushIN Finalist (Team Cortex). Razorpay Buildathon 2026 builder (Raya). LaserHacks 2025 Finalist (Team Emodio).
          </p>
        </div>

        {/* My Super Powers */}
        <div className="mt-20">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
              My Super Powers
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {superPowers.map((power, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FBFBF9] border border-neutral-200/80 shadow-2xs hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all text-left"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 mb-3" />
                <h4 className="text-sm font-bold text-neutral-900">{power.title}</h4>
                <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">{power.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Off-Screen: Artist Showcase */}
        <div className="mt-20 p-6 sm:p-10 rounded-3xl bg-[#FAF9F5] border border-neutral-200/90 text-left">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold mb-2">
                <Palette className="w-3.5 h-3.5" />
                <span>OFF-SCREEN CREATIVE PURSUITS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                Artist & Sketching
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Beyond code and PRDs, I practice traditional fine-art sketching. Balancing proportions, contrast, and visual hierarchy in hand-drawn portraits directly sharpens how I design clean product experiences.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-500 bg-white px-3 py-1.5 rounded-full border border-neutral-200">
                4 Original Sketches
              </span>
            </div>
          </div>

          {/* Gallery of Labdhi's Actual Artworks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {artworks.map((art, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedArt(art.src)}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-xs cursor-pointer"
              >
                <img
                  src={art.src}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-left">
                  <span className="text-xs font-bold text-white leading-tight">{art.title}</span>
                  <span className="text-[10px] text-neutral-300 font-mono mt-0.5">{art.medium}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Team Hackathon Celebration Card */}
          <div className="mt-6 p-4 rounded-2xl bg-white border border-neutral-200/80 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-neutral-200">
              <img src={hackathonCake} alt="Hackathon Celebration" className="w-full h-full object-cover" />
            </div>
            <div className="text-xs text-neutral-600 leading-relaxed text-left">
              <span className="font-bold text-neutral-900 block mb-0.5">Team Spirit & Hackathon Milestones</span>
              Celebrating post-demo moments and prototype milestones with the team! Building AI products is as much about shared team momentum and high energy as it is about clean architecture.
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox for Artworks */}
      {selectedArt && (
        <div
          onClick={() => setSelectedArt(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative max-w-3xl max-h-[90vh] bg-neutral-950 p-2 rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-md"
            >
              Close
            </button>
            <img
              src={selectedArt}
              alt="Artwork Full View"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
