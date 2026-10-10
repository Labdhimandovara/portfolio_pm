import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Layers, 
  Mic, 
  Smartphone, 
  ShieldCheck, 
  Globe, 
  Users, 
  Compass, 
  CheckCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const CaseStudyDhanSaarthi: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string>('twin');

  const modules = [
    {
      id: 'twin',
      name: 'Financial Twin',
      role: 'Simulated Household Balance Sheet',
      desc: 'Dynamic projection modeling daily cash flow, seasonal farm income fluctuations, and emergency liquidity buffers.',
      badge: 'Core Engine'
    },
    {
      id: 'kisan',
      name: 'Kisan Saarthi',
      role: 'Agricultural Credit & Crop Companion',
      desc: 'Integrates seasonal sowing cycles, rainfall outlooks, and localized mandi prices to plan working capital credit.',
      badge: 'Agritech Inclusion'
    },
    {
      id: 'sakhi',
      name: 'Sakhi',
      role: 'Women Entrepreneur & Micro-Savings',
      desc: 'Tailored for self-help groups (SHGs), micro-entrepreneurs, and informal gold/chit-fund saving discipline.',
      badge: 'Community Finance'
    },
    {
      id: 'events',
      name: 'Life Event Planning',
      role: 'Milestone-Based Capital Allocation',
      desc: 'Structured savings roadmaps for children education, family health emergencies, and wedding expenditures.',
      badge: 'Life Goals'
    },
    {
      id: 'market',
      name: 'Market Pulse',
      role: 'Vernacular Financial Literacy',
      desc: 'De-jargonized audio briefings translating macroeconomic inflation and interest rates into simple terms.',
      badge: 'Vernacular Literacy'
    },
    {
      id: 'offline',
      name: 'Offline Companion',
      role: 'Zero-Connectivity Local Cache',
      desc: 'On-device encrypted cache allowing rural citizens to review budgets and scheduled repayment dates without 4G.',
      badge: 'Rural Resilience'
    }
  ];

  return (
    <article className="relative bg-white rounded-3xl sm:rounded-[2.5rem] border border-neutral-200/90 shadow-xl overflow-hidden p-6 sm:p-10 mb-12">
      
      {/* Header with Verified Nomura Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-mono font-bold tracking-wide flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            NOMURA KAKUSHIN 10.0 — FINALIST
          </span>
          <span className="text-xs font-mono font-semibold text-neutral-400">
            Selected from 1,000+ Teams
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-neutral-700 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200 font-semibold">
            10+ Modules • 50+ UI/UX Screens
          </span>
        </div>
      </div>

      {/* Title & Description */}
      <div className="mt-6 space-y-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          Dhan Saarthi — Making Financial Guidance Accessible
        </h3>
        <p className="text-base sm:text-lg text-neutral-700 max-w-3xl leading-relaxed">
          A financial guidance app for families and shop owners across India who find typical banking apps complicated. Designed with voice interaction in local languages, simple budget tools, and offline access.
        </p>
      </div>

      {/* 5-Step Product Flow Architecture */}
      <div className="mt-8 p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60">
        <span className="text-xs font-mono uppercase tracking-wider font-bold text-amber-900 block mb-4">
          How We Built It • 5 Key Stages
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
          <div className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-xs">
            <span className="text-[10px] font-mono font-bold text-amber-700 block mb-1">STAGE 1</span>
            <p className="text-xs font-bold text-neutral-900">User Research</p>
            <p className="text-[11px] text-neutral-500 mt-1">Understanding why banking apps feel intimidating</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-xs">
            <span className="text-[10px] font-mono font-bold text-amber-700 block mb-1">STAGE 2</span>
            <p className="text-xs font-bold text-neutral-900">Core Needs</p>
            <p className="text-[11px] text-neutral-500 mt-1">Voice-first navigation, simple terms, clear privacy</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-xs">
            <span className="text-[10px] font-mono font-bold text-amber-700 block mb-1">STAGE 3</span>
            <p className="text-xs font-bold text-neutral-900">UI/UX Design</p>
            <p className="text-[11px] text-neutral-500 mt-1">10 key modules and 50+ prototype screens</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-xs">
            <span className="text-[10px] font-mono font-bold text-amber-700 block mb-1">STAGE 4</span>
            <p className="text-xs font-bold text-neutral-900">Smart Features</p>
            <p className="text-[11px] text-neutral-500 mt-1">Voice assistant + simple cashflow calculations</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-xs">
            <span className="text-[10px] font-mono font-bold text-amber-700 block mb-1">STAGE 5</span>
            <p className="text-xs font-bold text-neutral-900">User Experience</p>
            <p className="text-[11px] text-neutral-500 mt-1">Gentle savings reminders & offline support</p>
          </div>
        </div>
      </div>

      {/* 3-Layer Fintech Architecture Visualization */}
      <div className="mt-10">
        <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-400 mb-4">
          3-Layer Fintech Architecture
        </h4>

        <div className="space-y-3">
          {/* Layer 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-900">Experience & Multimodal Access Layer</h5>
                <p className="text-xs text-neutral-600 mt-0.5">50+ UI/UX Screens • Voice-First Dialect Synthesis • Vernacular Audio Responses</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-full bg-white border text-[11px] font-medium text-neutral-700">Multilingual</span>
              <span className="px-2.5 py-1 rounded-full bg-white border text-[11px] font-medium text-neutral-700">Voicebot UI</span>
              <span className="px-2.5 py-1 rounded-full bg-white border text-[11px] font-medium text-neutral-700">Offline Cache</span>
            </div>
          </div>

          {/* Layer 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-900">Intelligence & Simulation Layer</h5>
                <p className="text-xs text-neutral-600 mt-0.5">Financial Twin • Kisan & Sakhi Domain Rules • Deterministic Budgeting Engine</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-full bg-white border text-[11px] font-medium text-neutral-700">Financial Twin</span>
              <span className="px-2.5 py-1 rounded-full bg-white border text-[11px] font-medium text-neutral-700">Predictive Cashflow</span>
              <span className="px-2.5 py-1 rounded-full bg-white border text-[11px] font-medium text-neutral-700">Generative Advice</span>
            </div>
          </div>

          {/* Layer 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-900">Infrastructure & Trust Layer</h5>
                <p className="text-xs text-neutral-600 mt-0.5">Consent Architecture • Banking API Aggregator Connectors • End-to-End Cryptography</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-full bg-white border text-[11px] font-medium text-neutral-700">Consent Flow</span>
              <span className="px-2.5 py-1 rounded-full bg-white border text-[11px] font-medium text-neutral-700">Data Privacy</span>
              <span className="px-2.5 py-1 rounded-full bg-white border text-[11px] font-medium text-neutral-700">Encrypted Local Store</span>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Ecosystem Modules Browser */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-400">
            Ecosystem Modules (10+ Designed Services)
          </h4>
          <span className="text-xs text-neutral-500 font-mono">Click module to inspect purpose</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {modules.map((mod) => {
            const isSelected = activeModule === mod.id;
            return (
              <div
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                  isSelected 
                    ? 'bg-amber-50/70 border-amber-400 ring-2 ring-amber-500/20 shadow-sm' 
                    : 'bg-white border-neutral-200/80 hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-amber-700 px-2 py-0.5 rounded-full bg-amber-100/60">
                    {mod.badge}
                  </span>
                  <CheckCircle className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-600' : 'text-neutral-300'}`} />
                </div>
                <h5 className="text-sm font-bold text-neutral-900">{mod.name}</h5>
                <p className="text-xs font-semibold text-neutral-600 mt-0.5">{mod.role}</p>
                <p className="text-[11px] text-neutral-500 mt-2 leading-relaxed">{mod.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Highlights Footer Grid */}
      <div className="mt-10 pt-8 border-t border-neutral-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="p-3">
          <span className="text-2xl font-black font-mono text-neutral-950">1,000+</span>
          <p className="text-xs text-neutral-600 font-medium mt-1">Teams Evaluated</p>
          <p className="text-[10px] text-neutral-400">Nomura KakushIN 10.0</p>
        </div>
        <div className="p-3">
          <span className="text-2xl font-black font-mono text-neutral-950">50+</span>
          <p className="text-xs text-neutral-600 font-medium mt-1">Screens Prototyped</p>
          <p className="text-[10px] text-neutral-400">Multimodal UX flows</p>
        </div>
        <div className="p-3">
          <span className="text-2xl font-black font-mono text-neutral-950">10+</span>
          <p className="text-xs text-neutral-600 font-medium mt-1">Modular Ecosystem</p>
          <p className="text-[10px] text-neutral-400">Targeted persona services</p>
        </div>
        <div className="p-3">
          <span className="text-2xl font-black font-mono text-neutral-950">24/7</span>
          <p className="text-xs text-neutral-600 font-medium mt-1">Voice & Chat Access</p>
          <p className="text-[10px] text-neutral-400">Vernacular guidance</p>
        </div>
      </div>

    </article>
  );
};
