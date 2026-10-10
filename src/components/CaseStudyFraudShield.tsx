import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  PhoneCall, 
  CreditCard, 
  Banknote, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Lock, 
  MessageSquare,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const CaseStudyFraudShield: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'call' | 'tx' | 'note'>('call');

  const scenarios = [
    {
      id: 'call' as const,
      title: 'Call Verification',
      icon: <PhoneCall className="w-5 h-5 text-purple-600" />,
      tagline: 'Deepfake & Voice Extortion Scams',
      problem: 'Elderly citizens receiving urgent spoofed voice calls claiming a family member is in trouble or hospitalized.',
      mlPipeline: 'Audio analysis checks pitch jitter and acoustic spectral patterns to tell real human speech apart from synthetic clones.',
      userOutput: 'Clear verdict ("Likely Synthetic Voice: 92%") plus an immediate prompt to call back the relative on a trusted saved number.'
    },
    {
      id: 'tx' as const,
      title: 'Transaction Fraud',
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
      tagline: 'Phishing SMS & Fake Payment Links',
      problem: 'Misleading UPI payment requests or fake electricity bill warnings trying to trick users into transferring money.',
      mlPipeline: 'FastAPI backend checks text phishing patterns and domain redirects against verified payment gateway lists.',
      userOutput: 'Highlights fake payment links and gives a 1-tap dialer for the national cyber fraud helpline (1930).'
    },
    {
      id: 'note' as const,
      title: 'Counterfeit Currency',
      icon: <Banknote className="w-5 h-5 text-emerald-600" />,
      tagline: 'Physical Bank Note Inspection',
      problem: 'Local street vendors receiving fake high-value notes in busy, poorly lit markets.',
      mlPipeline: 'Computer vision model trained to verify official RBI security watermarks, magnetic threads, and micro-lettering.',
      userOutput: 'Clear visual bounding box showing if security threads or watermarks are missing.'
    }
  ];

  const current = scenarios.find(s => s.id === activeScenario)!;

  return (
    <article className="relative bg-white rounded-3xl sm:rounded-[2.5rem] border border-neutral-200/90 shadow-xl overflow-hidden p-6 sm:p-10 mb-12">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-purple-700 text-white text-xs font-mono font-bold tracking-wide">
            AI SAFETY & TRUST
          </span>
          <span className="text-xs font-mono font-medium text-neutral-400">
            Citizen Security Product
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-purple-800 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200 font-semibold">
            3 ML Models • FastAPI • Gemini Assistant
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="mt-6 space-y-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          Citizen Fraud Shield — Designing for Digital Safety
        </h3>
        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
          A safety app designed for everyday citizens. When someone receives a suspicious call, phishing text, or questionable currency note, Fraud Shield gives them a fast verdict and calm, step-by-step guidance instead of confusion.
        </p>

        {/* Live Demo Video Callout */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1SMmUGr6aV1JcZeKRfOI79GyUs5Xz6X86/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>
            </svg>
            <span>Watch Live Product Demo Video (Google Drive)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-xs font-mono text-neutral-500">
            Full walkthrough of deepfake call verification & Streamlit dashboard
          </span>
        </div>
      </div>

      {/* Interactive 3-Scenario Cards Selector */}
      <div className="mt-8">
        <span className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-400 block mb-3">
          Interactive Scenario Explorer (Select to Inspect User Journey)
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {scenarios.map((scen) => {
            const isSelected = activeScenario === scen.id;
            return (
              <button
                key={scen.id}
                onClick={() => setActiveScenario(scen.id)}
                className={`p-5 rounded-2xl text-left border transition-all ${
                  isSelected 
                    ? 'bg-purple-50/80 border-purple-400 ring-2 ring-purple-500/20 shadow-sm' 
                    : 'bg-neutral-50/70 border-neutral-200/70 hover:bg-white hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-white shadow-2xs border border-neutral-200/60">
                    {scen.icon}
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-purple-700' : 'text-neutral-400'}`}>
                    {isSelected ? 'ACTIVE PREVIEW' : 'CLICK TO VIEW'}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-neutral-900">{scen.title}</h4>
                <p className="text-xs font-medium text-neutral-500 mt-0.5">{scen.tagline}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Scenario Detailed Breakdown */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScenario}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="mt-6 p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-mono font-bold">
              SCENARIO VERIFICATION WORKFLOW
            </span>
            <span className="text-sm font-semibold text-neutral-300">
              {current.title}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                Citizen Stress Point
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                {current.problem}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 block font-semibold">
                ML Pipeline Architecture
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                {current.mlPipeline}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 block font-semibold">
                Product UX Output & Trust Action
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                {current.userOutput}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Product Pillars & Architecture */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
        
        {/* Core Product PM Focus */}
        <div className="space-y-3">
          <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-neutral-900">
            UX Principles for High-Stress Moments
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
              <span><strong>Fast Answers:</strong> Waiting even a few seconds causes panic during a suspected scam. Optimized API response times to under 3 seconds.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
              <span><strong>Plain English:</strong> No confusing percentages or model loss terms—just clear "Safe" or "High Risk" verdicts with what to do next.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
              <span><strong>Calm Guidance:</strong> An interactive Gemini assistant helps victims freeze accounts, take screenshots, and file reports without feeling overwhelmed.</span>
            </li>
          </ul>
        </div>

        {/* Technical Architecture */}
        <div className="space-y-3">
          <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-neutral-900">
            Technology Stack & Delivery
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
              <span className="text-xs font-mono font-bold text-neutral-400 block">BACKEND</span>
              <span className="text-sm font-bold text-neutral-900">FastAPI Async</span>
              <p className="text-[11px] text-neutral-500 mt-0.5">Multipart audio, text & image APIs</p>
            </div>
            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
              <span className="text-xs font-mono font-bold text-neutral-400 block">AI ASSISTANT</span>
              <span className="text-sm font-bold text-neutral-900">Gemini LLM</span>
              <p className="text-[11px] text-neutral-500 mt-0.5">Contextual safety counseling</p>
            </div>
            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
              <span className="text-xs font-mono font-bold text-neutral-400 block">MODELS</span>
              <span className="text-sm font-bold text-neutral-900">3 ML Classifiers</span>
              <p className="text-[11px] text-neutral-500 mt-0.5">Specialized fraud vector models</p>
            </div>
            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
              <span className="text-xs font-mono font-bold text-neutral-400 block">DASHBOARD</span>
              <span className="text-sm font-bold text-neutral-900">Streamlit UI</span>
              <p className="text-[11px] text-neutral-500 mt-0.5">Accessible verification panel</p>
            </div>
          </div>
        </div>

      </div>

    </article>
  );
};
