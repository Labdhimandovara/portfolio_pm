import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  CheckCircle, 
  HelpCircle, 
  BookOpen, 
  Cpu, 
  Sparkles, 
  ShieldCheck,
  ChevronRight,
  TestTube
} from 'lucide-react';

export const CaseStudyMathEngineer: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2);

  const tutoringStages = [
    { name: "01. Student Input", desc: "Handwritten note via OCR or practice problem from 20-problem bank" },
    { name: "02. Assessment", desc: "Equation classification (Runge-Kutta, Newton-Raphson, Euler)" },
    { name: "03. Deterministic Solver", desc: "Zero-hallucination numerical computation with strict floating-point bounds" },
    { name: "04. RAG Knowledge", desc: "Textbook curriculum indexing for verified formulas and syllabus hints" },
    { name: "05. AI Fallback", desc: "Gemini conversational teacher activates if student struggles with hints" },
    { name: "06. Step Explanation", desc: "Graduated hint reveal preventing passive answer-copying" }
  ];

  return (
    <article className="relative bg-white rounded-3xl sm:rounded-[2.5rem] border border-neutral-200/90 shadow-xl overflow-hidden p-6 sm:p-10 mb-12">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-mono font-bold tracking-wide">
            EDTECH PRODUCT INNOVATION
          </span>
          <span className="text-xs font-mono font-medium text-neutral-400">
            Deterministic-First Tutoring
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold flex items-center gap-1.5">
            <TestTube className="w-3.5 h-3.5" />
            664 Automated Unit Tests Passing
          </span>
        </div>
      </div>

      {/* Title & Core Philosophy */}
      <div className="mt-6 space-y-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          MathEngineer — Turning Step-by-Step Learning into a Product
        </h3>
        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
          Bridging mathematical rigor and student pedagogy through a deterministic-first engine. Built with 664 automated tests, OCR handwritten equation capture, and a 4-tier tutoring architecture.
        </p>
      </div>

      {/* Problem vs Product Response */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
          <span className="text-[11px] font-mono font-bold uppercase text-red-600">The Problem</span>
          <h4 className="text-sm font-bold text-neutral-900">Calculators Output Answers; LLMs Hallucinate Math</h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Engineering students solving complex numerical methods (Runge-Kutta, Euler, Newton-Raphson) either receive a cold single number with zero derivation, or ask generative LLMs that frequently invent incorrect numerical arithmetic.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
          <span className="text-[11px] font-mono font-bold uppercase text-emerald-700">The Product Response</span>
          <h4 className="text-sm font-bold text-neutral-900">Deterministic Computation + Socratic AI Tutoring</h4>
          <p className="text-xs text-neutral-700 leading-relaxed">
            Math is computed deterministically by verified algorithms guaranteeing 100% precision. Generative AI is strictly relegated to Socratic pedagogical explanation, guided hints, and textbook context retrieval.
          </p>
        </div>
      </div>

      {/* Animated 6-Stage Product Flow */}
      <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">
              PRODUCT EXECUTION PIPELINE
            </span>
            <h4 className="text-xl font-bold tracking-tight text-white">
              Deterministic-First Tutoring Architecture
            </h4>
          </div>
          <span className="text-xs text-neutral-400 font-mono">
            Click step to inspect logic
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {tutoringStages.map((stage, idx) => {
            const isSelected = activeStage === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-3.5 rounded-2xl text-left border transition-all ${
                  isSelected 
                    ? 'bg-white text-neutral-950 border-white shadow-lg' 
                    : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold block mb-1 ${
                  isSelected ? 'text-emerald-700' : 'text-neutral-400'
                }`}>
                  STAGE 0{idx + 1}
                </span>
                <p className="text-xs font-bold leading-tight">{stage.name}</p>
                <p className={`text-[10px] mt-2 leading-relaxed ${isSelected ? 'text-neutral-600' : 'text-neutral-400'}`}>
                  {stage.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Decisions & Verified Metrics Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
        
        {/* Product Decisions */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-neutral-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            Key Product Decisions
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Graduated Socratic Hints:</strong> Instead of spoiling the final answer immediately, students receive three progressive clue tiers to build intuition.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Multimodal OCR:</strong> Allows students to snap phone photos of lecture notebooks; parsed formulas feed directly into solver routines.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>4-Tier Fallback:</strong> Exact Solver → RAG Notes → Gemini Dialogue → Socratic Clue loop.</span>
            </li>
          </ul>
        </div>

        {/* Verified Scale */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-neutral-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Verified Product Metrics
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-2xl font-black font-mono text-neutral-950">664</span>
              <p className="text-xs font-semibold text-neutral-800 mt-1">Automated Tests</p>
              <p className="text-[11px] text-neutral-500">Unit, integration & boundary testing</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-2xl font-black font-mono text-neutral-950">3</span>
              <p className="text-xs font-semibold text-neutral-800 mt-1">Numerical Methods</p>
              <p className="text-[11px] text-neutral-500">Runge-Kutta, Newton-Raphson, Euler</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-2xl font-black font-mono text-neutral-950">7</span>
              <p className="text-xs font-semibold text-neutral-800 mt-1">Learning Modules</p>
              <p className="text-[11px] text-neutral-500">Curriculum-mapped engineering topics</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-2xl font-black font-mono text-neutral-950">20</span>
              <p className="text-xs font-semibold text-neutral-800 mt-1">Practice Problems</p>
              <p className="text-[11px] text-neutral-500">Step-by-step verified problem bank</p>
            </div>
          </div>
        </div>

      </div>

    </article>
  );
};
