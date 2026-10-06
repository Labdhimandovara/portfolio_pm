import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroInteractiveWidget } from './HeroInteractiveWidget';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 px-4 sm:px-8 overflow-hidden ambient-mesh">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />

      {/* Decorative subtle atmospheric blurs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-blue-100/40 via-purple-50/20 to-transparent blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-neutral-200/90 shadow-xs mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-neutral-800 uppercase">
            {PERSONAL_INFO.eyebrow}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 max-w-4xl mx-auto leading-[1.08]"
        >
          Building AI Products <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            from Idea to Impact.
          </span>
        </motion.h1>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto mt-6 leading-relaxed font-normal"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Core Value Proposition Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-xs sm:text-sm font-medium text-neutral-500 max-w-xl mx-auto"
        >
          "I build and shape AI-powered products from problem definition to prototype, architecture and execution."
        </motion.div>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#121214] text-white text-sm font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95"
          >
            <span>View Product Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenContact}
            className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 text-sm font-semibold border border-neutral-300/80 shadow-xs hover:border-neutral-400 transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
            <span>Let's Connect</span>
          </button>
        </motion.div>

        {/* Secondary Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-5 sm:gap-8 mt-6 text-xs text-neutral-500"
        >
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-neutral-900 transition-colors font-medium"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <span className="w-1 h-1 rounded-full bg-neutral-300" />

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-neutral-900 transition-colors font-medium"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <span className="w-1 h-1 rounded-full bg-neutral-300" />

          <a
            href="mailto:mandowaralabdhi@gmail.com"
            className="flex items-center gap-1 hover:text-neutral-900 transition-colors font-medium"
          >
            <span>mandowaralabdhi@gmail.com</span>
          </a>
        </motion.div>

        {/* Interactive Glass Product Deck Centerpiece */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <HeroInteractiveWidget />
        </motion.div>

      </div>
    </section>
  );
};
