import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, ArrowDown, ExternalLink, ShieldCheck, Zap, Bot, RefreshCw } from 'lucide-react';
import avatar3D from '../assets/avatar_3d.jpg';
import realPhoto from '../assets/labdhi_photo.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export const DevanshuStyleHero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [showRealPhoto, setShowRealPhoto] = useState(false);

  return (
    <section className="relative pt-12 sm:pt-16 pb-20 px-4 sm:px-8 bg-[#FBFBF9] overflow-hidden">
      
      {/* Subtle atmospheric ambient grid */}
      <div className="max-w-6xl mx-auto">
        
        {/* Main Grid: Left Typography & Right 3D Avatar Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Big Editorial Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300/80 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>AI ENGINEER & PRODUCT BUILDER</span>
            </div>

            {/* Headline matching Devanshu's typography hierarchy */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 leading-[1.06]">
              Welcome to <br />
              <span className="text-neutral-950">My Portfolio.</span> <br />
              <span className="text-blue-600 font-extrabold">Hi, I'm Labdhi.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-neutral-600 font-normal max-w-xl leading-relaxed">
              AI Engineer and Product Builder exploring how intelligent systems, agentic architectures, and voice interfaces can become useful, intuitive, and scalable products.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#works"
                className="px-6 py-3.5 rounded-full bg-neutral-950 hover:bg-blue-600 text-white font-bold text-xs tracking-wide shadow-md transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Explore Selected Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs tracking-wide border border-neutral-300 shadow-2xs transition-all active:scale-95"
              >
                Let's Talk
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold text-xs transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* Tool / Capability Pill Badges */}
            <div className="pt-6 border-t border-neutral-200/80">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 font-semibold">
                Core Stack & AI Tooling:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Product Strategy",
                  "Agentic AI (MCP)",
                  "Voice AI (Agora/Pipecat)",
                  "CrewAI Swarms",
                  "FastAPI",
                  "PostgreSQL",
                  "React & TS",
                  "RAG & OCR",
                  "664 Tests"
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-medium text-neutral-700 shadow-3xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 3D AI Stylized Character Avatar + Real Photo Toggle */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background circular accent */}
            <div className="absolute inset-4 bg-gradient-to-tr from-amber-200/40 via-blue-100/50 to-purple-100/40 rounded-[3rem] blur-xl -z-10" />

            {/* Avatar Frame Card */}
            <div className="relative w-full max-w-sm rounded-[2.5rem] bg-white p-4 border border-neutral-200/80 shadow-xl overflow-hidden group">
              
              {/* Image Display */}
              <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden bg-neutral-100 border border-neutral-100">
                <img
                  src={showRealPhoto ? realPhoto : avatar3D}
                  alt="Labdhi Mandovara"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Photo mode switch pill */}
                <button
                  onClick={() => setShowRealPhoto(!showRealPhoto)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-neutral-900 text-[11px] font-bold shadow-md hover:bg-white transition-all flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3 h-3 text-blue-600" />
                  <span>{showRealPhoto ? 'View 3D Avatar' : 'View Real Photo'}</span>
                </button>

                {/* Badge Label */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-mono font-semibold">
                  {showRealPhoto ? 'Real Photograph' : 'AI Stylized Avatar'}
                </div>
              </div>

              {/* Character Details & Floating Tags */}
              <div className="pt-4 text-center space-y-1">
                <h3 className="text-lg font-extrabold text-neutral-950">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-neutral-500 font-medium">
                  B.Tech ENTC • Symbiosis Institute of Technology
                </p>
                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] font-mono">
                  <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold">
                    CGPA 8.4 / 10.0
                  </span>
                  <span className="text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 font-bold">
                    Nomura Finalist
                  </span>
                </div>
              </div>

            </div>

            {/* Floating Sticker 1: Top Right */}
            <div className="hidden sm:flex absolute -top-4 -right-2 p-3 rounded-2xl bg-white border border-neutral-200/90 shadow-md flex-col text-left text-xs animate-float-slow">
              <span className="text-[10px] font-mono font-bold text-amber-600">RAZORPAY '26</span>
              <span className="font-bold text-neutral-900">Raya Agentic</span>
              <span className="text-[10px] text-neutral-500">6-Gate Policy Engine</span>
            </div>

            {/* Floating Sticker 2: Bottom Left */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 p-3 rounded-2xl bg-white border border-neutral-200/90 shadow-md flex-col text-left text-xs animate-float-reverse">
              <span className="text-[10px] font-mono font-bold text-blue-600">RESEARCH</span>
              <span className="font-bold text-neutral-900">Agora vs Pipecat</span>
              <span className="text-[10px] text-neutral-500">100-Turn Latency Profiler</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
