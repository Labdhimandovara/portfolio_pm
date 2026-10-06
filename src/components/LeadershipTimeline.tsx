import React from 'react';
import { motion } from 'framer-motion';
import { LEADERSHIP_EXPERIENCE } from '../data/portfolioData';
import { Award, BookOpen, Users, Palette, CheckCircle2, ArrowRight } from 'lucide-react';

export const LeadershipTimeline: React.FC = () => {
  return (
    <section id="leadership" className="py-24 px-4 sm:px-8 bg-[#FAF9F6] relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono font-medium mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>RESPONSIBILITY & INITIATIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight">
            Leadership & Ownership
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            A clear trajectory of increasing scope: from visual design execution to cross-functional orchestration and executive publication ownership.
          </p>
        </div>

        {/* Visual Progression Banner: Design -> Coordination -> Leadership -> Ownership */}
        <div className="mb-14 p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="font-mono font-bold text-neutral-400 uppercase text-[11px]">
            Leadership Progression Trajectory:
          </span>
          <div className="flex items-center gap-2 sm:gap-4 font-semibold text-neutral-800">
            <span className="px-3 py-1 rounded-full bg-neutral-100 border text-neutral-600">01 Design</span>
            <span>→</span>
            <span className="px-3 py-1 rounded-full bg-neutral-100 border text-neutral-600">02 Coordination</span>
            <span>→</span>
            <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800">03 Leadership</span>
            <span>→</span>
            <span className="px-3 py-1 rounded-full bg-neutral-900 text-white shadow-xs">04 360° Ownership</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-neutral-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {LEADERSHIP_EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Pin */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-neutral-900 group-hover:border-blue-600 group-hover:scale-125 transition-all shadow-xs" />

              {/* Role Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      STAGE: {item.tier.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-950 mt-1">
                      {item.role}
                    </h3>
                  </div>

                  <span className="text-xs font-mono font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
