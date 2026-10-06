import React from 'react';
import { motion } from 'framer-motion';
import { HACKATHONS } from '../data/portfolioData';
import { Trophy, Award, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const HackathonsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-[#FAF9F6] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-mono font-medium mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>RAPID INNOVATION & HACKATHONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight">
            Competitive Hackathon Honors
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            Rapid high-pressure product delivery validated by industry juries, global hackathons, and enterprise challenges.
          </p>
        </div>

        {/* 3 Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HACKATHONS.map((hack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Badge & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full text-white shadow-2xs ${
                    hack.badge === 'FINALIST' ? 'bg-amber-600' :
                    hack.badge === 'GLOBAL FINALIST' ? 'bg-purple-600' :
                    'bg-blue-600'
                  }`}>
                    {hack.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 font-medium">
                    {hack.date}
                  </span>
                </div>

                {/* Event Name & Project */}
                <h3 className="text-xl font-bold text-neutral-950 group-hover:text-blue-600 transition-colors">
                  {hack.name}
                </h3>
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">
                  {hack.edition}
                </p>
                <div className="mt-2 inline-block text-xs font-mono font-bold text-neutral-900 bg-neutral-100 px-2.5 py-0.5 rounded-md">
                  Project: {hack.project}
                </div>

                <p className="text-xs text-neutral-600 mt-4 leading-relaxed">
                  {hack.summary}
                </p>
              </div>

              {/* Bullet Details */}
              <div className="mt-6 pt-4 border-t border-neutral-100 space-y-2">
                {hack.details.map((det, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-neutral-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 mt-0.5 shrink-0" />
                    <span>{det}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
