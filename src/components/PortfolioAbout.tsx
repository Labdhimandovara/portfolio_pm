import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, Palette, Compass, Trophy, Code2, ZoomIn } from 'lucide-react';

import labdhiFormalBlazer from '../assets/portfolio/labdhi_formal_blazer.png';
import labdhiArtistPainting from '../assets/portfolio/labdhi_artist_painting.png';
import labdhiGreenPortrait from '../assets/portfolio/labdhi_portrait_green.jpg';
import labdhiFormalElevator from '../assets/portfolio/labdhi_formal_elevator.png';
import userPhoto1 from '../assets/portfolio/user-HOK2bPUo.jpg';
import profilePhoto from '../assets/portfolio/profile-CQEuO0j2.jpg';
import avatar3D from '../assets/avatar_3d.jpg';

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
      src: labdhiArtistPainting,
      title: 'Artist & Creator',
      subtitle: 'Holding original watercolor painting'
    },
    {
      id: 'photo-2',
      src: labdhiFormalElevator,
      title: 'Presentation & Defense',
      subtitle: 'Technical product walkthroughs'
    },
    {
      id: 'photo-3',
      src: labdhiFormalBlazer,
      title: 'Labdhi Mandovara',
      subtitle: 'AI Engineer & Product Builder'
    },
    {
      id: 'photo-4',
      src: labdhiGreenPortrait,
      title: 'Campus & Community',
      subtitle: 'Symbiosis Institute of Technology'
    },
    {
      id: 'photo-5',
      src: userPhoto1,
      title: 'Reading & Systems',
      subtitle: 'Product strategy & human behavior'
    }
  ];

  const superPowers = [
    { title: "Product Thinking & PRDs", desc: "Turning ambiguous problems into clear feature scopes, user journeys, and specifications." },
    { title: "AI & Agentic Systems", desc: "Building practical AI tools, agent workflows (MCP), and safe checkout guardrails." },
    { title: "Real-Time Voice AI", desc: "Testing low-latency streaming pipelines so voice interactions feel natural and responsive." },
    { title: "Reliable Logic + AI", desc: "Combining deterministic formulas with LLMs so outputs stay accurate and grounded." },
    { title: "UI/UX Prototyping", desc: "Designing simple, accessible interfaces that non-technical users can navigate without friction." },
    { title: "Testing & Code Reliability", desc: "Writing comprehensive automated test suites so products don't fail when people need them." },
    { title: "Multi-Agent Automation", desc: "Orchestrating multi-agent tasks (CrewAI) for search, document analysis, and CRM sync." },
    { title: "Team Leadership", desc: "Leading student publications, hackathon teams, and cross-functional projects to delivery." },
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
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
            I'm an AI engineer and product builder from India who loves building useful, intuitive products. I focus on connecting deep technical systems—like AI agents, real-time voice, and computer vision—with clean, human-centered experiences.
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal">
            B.Tech in Electronics & Telecommunication at Symbiosis Institute of Technology, Pune (CGPA 8.4).
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
                Beyond code and PRDs, I practice traditional fine art and watercolor sketching. Balancing proportions, contrast, and visual hierarchy in hand-drawn portraits directly sharpens how I design clean product experiences.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-500 bg-white px-3 py-1.5 rounded-full border border-neutral-200">
                Traditional Art & Sketches
              </span>
            </div>
          </div>

          {/* Featured Artist Spotlight Card */}
          <div className="mb-8 p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex flex-col md:flex-row items-center gap-6">
            <div
              onClick={() => setSelectedArt(labdhiArtistPainting)}
              className="w-full md:w-56 aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 cursor-pointer group flex-shrink-0 relative"
            >
              <img
                src={labdhiArtistPainting}
                alt="Labdhi Mandovara with Watercolor Painting"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-2 rounded-full bg-white/90 text-neutral-900 shadow-sm">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <span className="text-[10px] font-mono uppercase font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                Original Artwork
              </span>
              <h4 className="text-lg font-bold text-neutral-900">
                Hand-Painted Watercolors & Sketchbook
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                "Art gives me an intuitive appreciation for whitespace, visual balance, and emotional resonance. When I design a screen or architect a user flow, I approach it with the same care for harmony that I bring to a blank canvas."
              </p>
            </div>
          </div>

          {/* Gallery of Labdhi's Fine-Art Sketches */}
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
