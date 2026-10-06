import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  ShieldCheck, 
  Layers, 
  Mic, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Sparkles, 
  ShoppingBag,
  Coins,
  Cpu,
  Activity
} from 'lucide-react';

export const HeroInteractiveWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'raya' | 'dhan' | 'voice'>('raya');
  const [simulating, setSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const runSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setSimStep(1);

    setTimeout(() => setSimStep(2), 700);
    setTimeout(() => setSimStep(3), 1500);
    setTimeout(() => setSimStep(4), 2200);
    setTimeout(() => {
      setSimulating(false);
      setSimStep(0);
    }, 4000);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 sm:mt-12">
      {/* Ambient background glow behind widget */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/60 via-purple-100/40 to-amber-100/60 rounded-[3rem] blur-2xl -z-10 opacity-70 transform-gpu" />

      {/* Main Glass Deck Container - Inspired by Reference Images */}
      <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-white/85 backdrop-blur-2xl border border-white/90 shadow-2xl p-5 sm:p-8 overflow-hidden">
        
        {/* Top Control Bar: Mode Selector */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-neutral-500 uppercase">
              Interactive Product Deck
            </span>
          </div>

          {/* Segmented Control Tabs */}
          <div className="inline-flex p-1 bg-neutral-100/80 rounded-full border border-neutral-200/60">
            <button
              onClick={() => setActiveTab('raya')}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'raya'
                  ? 'bg-white text-neutral-900 shadow-sm font-semibold'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Raya Agentic Commerce
            </button>
            <button
              onClick={() => setActiveTab('dhan')}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'dhan'
                  ? 'bg-white text-neutral-900 shadow-sm font-semibold'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Dhan Saarthi Ecosystem
            </button>
            <button
              onClick={() => setActiveTab('voice')}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'voice'
                  ? 'bg-white text-neutral-900 shadow-sm font-semibold'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Voice Telemetry
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Stage */}
        <div className="py-6 min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {/* TAB 1: RAYA AGENTIC COMMERCE */}
            {activeTab === 'raya' && (
              <motion.div
                key="raya"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-[11px] font-semibold">
                        Razorpay Buildathon 2026
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">MCP Protocol</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-1">
                      Autonomous Multi-Merchant Shopping & 6-Gate Checkout
                    </h3>
                  </div>

                  <button
                    onClick={runSimulation}
                    disabled={simulating}
                    className="self-start sm:self-center flex items-center gap-2 px-4 py-2 rounded-full bg-[#121214] text-white text-xs font-semibold hover:bg-blue-600 transition-all shadow-sm active:scale-95 disabled:opacity-60"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    <span>{simulating ? 'Executing Agent Loop...' : 'Simulate Agentic Flow'}</span>
                  </button>
                </div>

                {/* Visual Pipeline Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
                  {/* Step 1 */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    simStep >= 1 ? 'bg-blue-50/70 border-blue-300 ring-2 ring-blue-500/20 shadow-sm' : 'bg-neutral-50/70 border-neutral-200/70'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-neutral-400">01 • INTENT</span>
                      <Bot className={`w-4 h-4 ${simStep >= 1 ? 'text-blue-600' : 'text-neutral-400'}`} />
                    </div>
                    <p className="text-xs font-semibold text-neutral-800">Natural Language</p>
                    <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                      "Find best ergonomic desk chair under ₹12,000"
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    simStep >= 2 ? 'bg-blue-50/70 border-blue-300 ring-2 ring-blue-500/20 shadow-sm' : 'bg-neutral-50/70 border-neutral-200/70'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-neutral-400">02 • DISCOVERY</span>
                      <ShoppingBag className={`w-4 h-4 ${simStep >= 2 ? 'text-blue-600' : 'text-neutral-400'}`} />
                    </div>
                    <p className="text-xs font-semibold text-neutral-800">3 MCP Merchants</p>
                    <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                      Concurrent tool search & SKU comparison
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    simStep >= 3 ? 'bg-blue-50/70 border-blue-300 ring-2 ring-blue-500/20 shadow-sm' : 'bg-neutral-50/70 border-neutral-200/70'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-neutral-400">03 • POLICY GATE</span>
                      <ShieldCheck className={`w-4 h-4 ${simStep >= 3 ? 'text-blue-600' : 'text-neutral-400'}`} />
                    </div>
                    <p className="text-xs font-semibold text-neutral-800">6 Safety Checks</p>
                    <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                      Price revalidation & cryptographic approval
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    simStep >= 4 ? 'bg-emerald-50/70 border-emerald-300 ring-2 ring-emerald-500/20 shadow-sm' : 'bg-neutral-50/70 border-neutral-200/70'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-neutral-400">04 • CHECKOUT</span>
                      <CheckCircle2 className={`w-4 h-4 ${simStep >= 4 ? 'text-emerald-600' : 'text-neutral-400'}`} />
                    </div>
                    <p className="text-xs font-semibold text-neutral-800">Razorpay Order</p>
                    <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                      User-in-the-loop authorization confirmed
                    </p>
                  </div>
                </div>

                {/* Telemetry pill bottom row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs text-neutral-600">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      3 Connected Catalogs
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      PostgreSQL State
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-400 italic">
                    {simulating ? 'Processing cryptographic policy gates...' : 'Ready for intent execution'}
                  </span>
                </div>
              </motion.div>
            )}

            {/* TAB 2: DHAN SAARTHI */}
            {activeTab === 'dhan' && (
              <motion.div
                key="dhan"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-semibold">
                        Nomura KakushIN 10.0 Finalist
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">1,000+ Teams</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-1">
                      10+ Modules & 50+ UI Screens for Inclusive Financial Guidance
                    </h3>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-amber-100/70 text-amber-800 text-xs font-semibold">
                    3-Tier Architecture
                  </div>
                </div>

                {/* Ecosystem Modules Preview */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-amber-400 transition-all">
                    <Coins className="w-5 h-5 text-amber-600 mb-2" />
                    <h4 className="text-xs font-bold text-neutral-900">Financial Twin</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Real-time simulation of cash flow & savings capacity</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-emerald-400 transition-all">
                    <Layers className="w-5 h-5 text-emerald-600 mb-2" />
                    <h4 className="text-xs font-bold text-neutral-900">Kisan Saarthi</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Agricultural credit, seasonal yields & crop cycle advice</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-purple-400 transition-all">
                    <Sparkles className="w-5 h-5 text-purple-600 mb-2" />
                    <h4 className="text-xs font-bold text-neutral-900">Sakhi Mode</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Micro-savings circles and self-help group literacy</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-blue-400 transition-all">
                    <Mic className="w-5 h-5 text-blue-600 mb-2" />
                    <h4 className="text-xs font-bold text-neutral-900">Voice-First Access</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Multilingual natural voice for non-literate navigation</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-neutral-600 border-t border-neutral-100">
                  <span className="font-medium text-neutral-700">Consent-Driven Onboarding • Offline Companion Mode Ready</span>
                  <span className="text-[11px] text-neutral-400 font-mono">50+ Screens Designed & Prototyped</span>
                </div>
              </motion.div>
            )}

            {/* TAB 3: VOICE TELEMETRY */}
            {activeTab === 'voice' && (
              <motion.div
                key="voice"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold">
                        Voice AI Telemetry & Benchmarks
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">Edysor AI Research</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-1">
                      Agora vs Pipecat: 100-Turn Latency Profiling
                    </h3>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold">
                    STT → LLM → TTS
                  </div>
                </div>

                {/* Pipeline Latency Visualization */}
                <div className="p-4 rounded-2xl bg-neutral-50/90 border border-neutral-200/80 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-neutral-800">Streaming Voice Pipeline Breakdown</span>
                    <span className="font-mono text-[11px] text-neutral-500">100 Automated Conversation Turns</span>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[11px] font-medium text-neutral-600 mb-1">
                        <span>Speech-To-Text (Deepgram Streaming)</span>
                        <span className="font-mono text-neutral-800">P50: ~180ms</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full w-[22%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-medium text-neutral-600 mb-1">
                        <span>LLM Inference (Groq Ultra-Fast LPU)</span>
                        <span className="font-mono text-neutral-800">Time-to-First-Token: ~210ms</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full w-[28%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-medium text-neutral-600 mb-1">
                        <span>Text-To-Speech (Cartesia Streaming Audio)</span>
                        <span className="font-mono text-neutral-800">First Chunk: ~160ms</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[20%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600">
                  <span className="font-mono text-[11px] text-neutral-500">
                    Profiles: P50, P90, P95, Mean, Max & Interruption Barge-in
                  </span>
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    ✓ Evaluated for Sub-Second Natural Conversations
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Floating Stats Bar */}
        <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-medium text-neutral-700">Verified System Benchmarks</span>
          </div>
          <div className="flex items-center gap-4">
            <span>664 Automated Unit Tests</span>
            <span>•</span>
            <span>6 Orchestrated Agents</span>
            <span>•</span>
            <span>98% Crash Accuracy</span>
          </div>
        </div>

      </div>
    </div>
  );
};
