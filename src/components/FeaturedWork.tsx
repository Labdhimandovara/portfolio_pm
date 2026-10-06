import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CaseStudyRaya } from './CaseStudyRaya';
import { CaseStudyDhanSaarthi } from './CaseStudyDhanSaarthi';
import { CaseStudyMathEngineer } from './CaseStudyMathEngineer';
import { CaseStudyFraudShield } from './CaseStudyFraudShield';
import { RealEstateSection } from './RealEstateSection';
import { VoiceBenchmarkSection } from './VoiceBenchmarkSection';
import { SystemsSection } from './SystemsSection';
import { Sparkles, Layers, Filter } from 'lucide-react';

export const FeaturedWork: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'agentic', label: 'Agentic AI' },
    { id: 'fintech', label: 'Fintech & Inclusion' },
    { id: 'edtech', label: 'EdTech Systems' },
    { id: 'safety', label: 'AI Safety' },
    { id: 'voice', label: 'Voice AI' },
  ];

  return (
    <section id="work" className="py-24 px-4 sm:px-8 bg-[#FAF9F6] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight">
              Selected Product Work
            </h2>
            <p className="text-neutral-600 mt-3 text-base sm:text-lg max-w-xl">
              Editorial case studies combining user problem framing, system architecture, and verified metrics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  filter === cat.id
                    ? 'bg-[#121214] text-white shadow-xs font-semibold'
                    : 'bg-white hover:bg-neutral-100 text-neutral-600 border border-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Product Studies */}
        <div className="space-y-6">
          {(filter === 'all' || filter === 'agentic') && (
            <CaseStudyRaya />
          )}

          {(filter === 'all' || filter === 'fintech') && (
            <CaseStudyDhanSaarthi />
          )}

          {(filter === 'all' || filter === 'edtech') && (
            <CaseStudyMathEngineer />
          )}

          {(filter === 'all' || filter === 'safety') && (
            <CaseStudyFraudShield />
          )}

          {(filter === 'all' || filter === 'agentic') && (
            <RealEstateSection />
          )}

          {(filter === 'all' || filter === 'voice') && (
            <VoiceBenchmarkSection />
          )}

          {(filter === 'all') && (
            <SystemsSection />
          )}
        </div>

      </div>
    </section>
  );
};
