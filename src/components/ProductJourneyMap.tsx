import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IDEA_TO_PRODUCT_STAGES } from '../data/portfolioData';
import { ArrowRight, Lightbulb, Compass, Code, PlayCircle, RefreshCw } from 'lucide-react';

export const ProductJourneyMap: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section className="py-20 px-4 sm:px-8 bg-neutral-900 text-white rounded-[2.5rem] sm:rounded-[3.5rem] mx-2 sm:mx-6 my-10 overflow-hidden relative shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-mono mb-3">
              <span>END-TO-END EXECUTION CYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              From Idea to Scalable Product
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              An interactive roadmap of how I shepherd ambiguous concepts from first principles into robust systems.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span>Click any phase to inspect PM rationale</span>
          </div>
        </div>

        {/* Horizontal Scrollable Step Track */}
        <div className="overflow-x-auto pb-6 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {IDEA_TO_PRODUCT_STAGES.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all text-xs font-semibold ${
                    isActive
                      ? 'bg-white text-neutral-950 border-white shadow-lg scale-105'
                      : 'bg-white/5 hover:bg-white/15 text-neutral-300 border-white/10'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                    isActive ? 'bg-neutral-900 text-white' : 'bg-white/10 text-neutral-300'
                  }`}>
                    {stage.step}
                  </span>
                  <span>{stage.name}</span>
                  {idx < IDEA_TO_PRODUCT_STAGES.length - 1 && (
                    <span className="text-neutral-600 pl-1">→</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Display */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black font-mono text-blue-400">
                {IDEA_TO_PRODUCT_STAGES[activeStage].step}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {IDEA_TO_PRODUCT_STAGES[activeStage].name}
              </h3>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              {IDEA_TO_PRODUCT_STAGES[activeStage].description}
            </p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-center">
            <button
              onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : IDEA_TO_PRODUCT_STAGES.length - 1))}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStage((prev) => (prev < IDEA_TO_PRODUCT_STAGES.length - 1 ? prev + 1 : 0))}
              className="px-4 py-2.5 rounded-full bg-white text-neutral-950 hover:bg-blue-300 font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              <span>Next Phase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
