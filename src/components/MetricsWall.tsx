import React from 'react';
import { motion } from 'framer-motion';
import { VERIFIED_METRICS } from '../data/portfolioData';
import { Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const MetricsWall: React.FC = () => {
  return (
    <section id="metrics" className="py-24 px-4 sm:px-8 bg-neutral-900 text-white relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>RIGOR & SYSTEM SCALE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Verified Product Metrics
          </h2>
          <p className="text-neutral-400 mt-4 text-base sm:text-lg">
            Every metric reflects real codebase unit tests, benchmark turns, and production-ready architectures from my projects.
          </p>
        </div>

        {/* 10 Verified Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {VERIFIED_METRICS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-semibold uppercase text-neutral-400 tracking-wider">
                    {item.tag}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  {item.number}
                </div>

                <div className="text-xs sm:text-sm font-bold text-neutral-200 mt-2 leading-tight">
                  {item.label}
                </div>
              </div>

              <p className="text-[11px] text-neutral-400 mt-3 pt-3 border-t border-white/5 leading-relaxed">
                {item.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Verification Guarantee Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-neutral-300">
              Zero fabricated claims. Sourced directly from verifiable repositories, hackathon submissions, and test logs.
            </span>
          </div>
          <span className="font-mono text-[11px] text-neutral-500">
            Source: Resume & Git Repositories
          </span>
        </div>

      </div>
    </section>
  );
};
