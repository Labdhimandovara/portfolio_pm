import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_FRAMEWORK_STEPS } from '../data/portfolioData';
import { Search, Compass, Code2, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

const iconsMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-5 h-5 text-blue-600" />,
  Compass: <Compass className="w-5 h-5 text-amber-600" />,
  Code2: <Code2 className="w-5 h-5 text-emerald-600" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-purple-600" />
};

export const ProductFramework: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <section id="approach" className="py-24 px-4 sm:px-8 bg-[#FAF9F6] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono font-medium mb-4">
            <span>METHODOLOGY & EXECUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight">
            How I Think About Products
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            A 4-step framework bridging user psychology, AI feasibility, and deterministic reliability.
          </p>
        </div>

        {/* 4-Step Interactive Connector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-neutral-200 -translate-y-8 -z-0" />

          {PRODUCT_FRAMEWORK_STEPS.map((step, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedStep(idx)}
                className={`relative cursor-pointer rounded-3xl p-6 transition-all duration-300 z-10 ${
                  isSelected 
                    ? 'bg-white shadow-xl border-2 border-neutral-900 -translate-y-2' 
                    : 'bg-white/80 hover:bg-white border border-neutral-200/80 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-black font-mono ${
                    isSelected ? 'text-neutral-900' : 'text-neutral-400'
                  }`}>
                    {step.number}
                  </span>
                  <div className={`p-2.5 rounded-2xl ${isSelected ? 'bg-neutral-100 shadow-xs' : 'bg-neutral-50'}`}>
                    {iconsMap[step.iconName]}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">
                  {step.tagline}
                </p>

                {/* Short excerpt */}
                <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                  {step.description}
                </p>

                {/* Status indicator */}
                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px]">
                  <span className={`font-mono font-medium ${isSelected ? 'text-blue-600' : 'text-neutral-400'}`}>
                    {isSelected ? 'Viewing Deliverables' : 'Click to inspect'}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-blue-600' : 'text-neutral-400'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deep Dive Drawer for Selected Step */}
        <motion.div
          key={selectedStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-md"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-mono font-bold">
                  STAGE {PRODUCT_FRAMEWORK_STEPS[selectedStep].number} IN DETAIL
                </span>
                <span className="text-sm font-semibold text-neutral-900">
                  {PRODUCT_FRAMEWORK_STEPS[selectedStep].title}
                </span>
              </div>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                <strong className="text-neutral-900">PM Mindset: </strong>
                {PRODUCT_FRAMEWORK_STEPS[selectedStep].pmMindset}
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 font-semibold">
                Typical Artifacts & Deliverables
              </span>
              <div className="flex flex-wrap gap-2">
                {PRODUCT_FRAMEWORK_STEPS[selectedStep].deliverables.map((deliv, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {deliv}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
