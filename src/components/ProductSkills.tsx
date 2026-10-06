import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_TOOLKIT } from '../data/portfolioData';
import { Briefcase, Bot, Code2, Users2, Check } from 'lucide-react';

export const ProductSkills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'product' | 'ai' | 'technical' | 'collaboration'>('product');

  const categories = [
    { id: 'product' as const, label: 'Product Thinking', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'ai' as const, label: 'AI & Agentic Systems', icon: <Bot className="w-4 h-4" /> },
    { id: 'technical' as const, label: 'Technical Execution', icon: <Code2 className="w-4 h-4" /> },
    { id: 'collaboration' as const, label: 'Leadership & Team', icon: <Users2 className="w-4 h-4" /> },
  ];

  const currentSkills = PRODUCT_TOOLKIT[activeCategory];

  return (
    <section id="toolkit" className="py-24 px-4 sm:px-8 bg-[#FAF9F6] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono font-medium mb-4">
            <span>CAPABILITIES & ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight">
            The Product Toolkit
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            A balanced synthesis of user-centric product discovery, modern AI agent architectures, and hands-on software engineering.
          </p>
        </div>

        {/* Category Pill Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-neutral-200/60 rounded-full border border-neutral-300/70 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white text-neutral-950 shadow-md font-bold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {currentSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                      {skill.level}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-blue-600 transition-colors" />
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="font-mono">Applied in Projects</span>
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
