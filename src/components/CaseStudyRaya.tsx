import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Layers, 
  Lock, 
  Zap, 
  Database,
  ExternalLink,
  ShoppingBag,
  TrendingUp,
  Cpu
} from 'lucide-react';

export const CaseStudyRaya: React.FC = () => {
  const [activeGate, setActiveGate] = useState<number>(0);

  const policyGates = [
    { title: "Gate 1: Product Match Check", desc: "Confirms the agent's product selection accurately matches what the customer requested." },
    { title: "Gate 2: Live Price Check", desc: "Checks store prices in real time right before checkout to prevent unexpected price changes." },
    { title: "Gate 3: Merchant Verification", desc: "Validates that the store is genuine using authenticated merchant credentials." },
    { title: "Gate 4: Spending Limit Cap", desc: "Enforces user budget caps so the agent can never add items beyond set limits." },
    { title: "Gate 5: User Confirmation", desc: "Prompts the customer to review the cart and tap approve before any payment is initiated." },
    { title: "Gate 6: One-Time Payment Session", desc: "Creates a single-use Razorpay checkout link so users are never charged twice." }
  ];

  return (
    <article className="relative bg-white rounded-3xl sm:rounded-[2.5rem] border border-neutral-200/90 shadow-xl overflow-hidden p-6 sm:p-10 mb-12">
      
      {/* Editorial Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-mono font-bold tracking-wide">
            RAZORPAY BUILDATHON 2026
          </span>
          <span className="text-xs font-mono font-medium text-neutral-400">
            Agentic Commerce Protocol
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-medium">
            ● 3 Connected Merchants Live
          </span>
        </div>
      </div>

      {/* Main Title & Positioning */}
      <div className="mt-6 space-y-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          Raya — Making Commerce Agentic
        </h3>
        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
          An MCP-powered agentic commerce platform designed to let AI agents discover products, compare options across multiple storefronts, assemble carts, and complete secure checkout through a 6-gate payment policy engine.
        </p>

        {/* Live Demo Video Callout */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="https://youtu.be/U-m0F5HJozo?si=6f3zk3q7xv5V8_b4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Watch Live Demo Video (YouTube)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-xs font-mono text-neutral-500">
            Recorded live during Razorpay Buildathon 2026
          </span>
        </div>
      </div>

      {/* Embedded Video Demo Player */}
      <div className="mt-6 rounded-3xl overflow-hidden border border-neutral-200 bg-black shadow-lg">
        <div className="px-5 py-3 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs">
          <span className="font-mono text-neutral-300 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Live Product Video Walkthrough: Raya Agentic Commerce
          </span>
          <a
            href="https://youtu.be/U-m0F5HJozo?si=6f3zk3q7xv5V8_b4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white font-mono text-[11px] flex items-center gap-1"
          >
            <span>Open in YouTube</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="relative aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/U-m0F5HJozo"
            title="Raya by Razorpay - Agentic Commerce Live Demo"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Why This Matters: Traditional eCommerce vs Agentic Commerce */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-neutral-50/80 border border-blue-100">
        <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-blue-900 mb-3 flex items-center gap-1.5">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          Why This Matters: The Architectural Paradigm Shift
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-white/80 border border-neutral-200/60 space-y-1">
            <span className="font-bold text-neutral-900 block">Traditional eCommerce: High Friction</span>
            <p className="text-neutral-600">
              User jumps between 5 browser tabs, manually filters specs, copies discount codes, fills forms, and gets trapped in fragmented checkout funnels.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/90 border border-blue-200/80 space-y-1 ring-1 ring-blue-500/20">
            <span className="font-bold text-blue-950 block">Agentic Commerce (Raya): Intent-Driven</span>
            <p className="text-neutral-700">
              User specifies natural intent; AI agent autonomously queries 3 MCP merchant catalogs, ranks alternatives, builds a cart, and presents a 1-click verified checkout.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Product Journey: User Intent -> Order */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-400">
            Visual Product Journey (8-Stage Execution)
          </h4>
          <span className="text-xs text-neutral-500 font-mono">End-to-End Workflow</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {[
            { step: "01", name: "User Request", desc: "Natural prompt" },
            { step: "02", name: "AI Agent", desc: "Understands request" },
            { step: "03", name: "Store Search", desc: "Searches 3 stores" },
            { step: "04", name: "Compare", desc: "Ranks best options" },
            { step: "05", name: "Cart Review", desc: "Prepares order" },
            { step: "06", name: "User Approval", desc: "User confirms" },
            { step: "07", name: "Razorpay", desc: "Secure checkout" },
            { step: "08", name: "Order Placed", desc: "Confirmed" }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200/70 hover:bg-white hover:border-blue-400 transition-all text-center flex flex-col justify-between"
            >
              <span className="text-[10px] font-mono font-bold text-neutral-400 block mb-1">{item.step}</span>
              <p className="text-xs font-bold text-neutral-900">{item.name}</p>
              <p className="text-[10px] text-neutral-500 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6-Gate Payment Policy Engine Interactive Inspection */}
      <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
              <ShieldCheck className="w-4 h-4" />
              <span>TRANSACTION SAFEGUARD MIDDLEWARE</span>
            </div>
            <h4 className="text-xl font-bold tracking-tight text-white mt-1">
              6-Gate Payment Policy Engine
            </h4>
          </div>
          <span className="text-xs text-neutral-400 font-mono">
            Click any gate to inspect validation rule
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {policyGates.map((gate, i) => {
            const isSelected = activeGate === i;
            return (
              <button
                key={i}
                onClick={() => setActiveGate(i)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  isSelected 
                    ? 'bg-white text-neutral-950 border-white shadow-lg' 
                    : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-blue-600' : 'text-neutral-400'}`}>
                    GATE 0{i + 1}
                  </span>
                  <Check className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-600' : 'text-neutral-500'}`} />
                </div>
                <h5 className="text-xs font-bold leading-snug">{gate.title}</h5>
                <p className={`text-[11px] mt-2 leading-relaxed ${isSelected ? 'text-neutral-700' : 'text-neutral-400'}`}>
                  {gate.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Decisions & Technical Depth Two-Column Layout */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
        
        {/* Product Decisions */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-neutral-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Product Decisions
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
            <li className="flex items-start gap-2.5">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Multi-merchant discovery:</strong> Structured catalog MCP endpoints allow autonomous agents to compare prices without web scraping brittleness.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>AI-driven intent extraction:</strong> Translates conversational language into strict filter schemas and bounds.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Secure user approval:</strong> Zero silent billing. Cart generation is autonomous, but payment trigger requires cryptographically confirmed user consent.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Price revalidation:</strong> Atomic real-time check at checkout prevents bait-and-switch cache issues.</span>
            </li>
          </ul>
        </div>

        {/* Technical Depth & Verified Metrics */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-neutral-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            Technical Architecture & Verified Scale
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-2xl font-black font-mono text-neutral-950">3</span>
              <p className="text-xs font-semibold text-neutral-800 mt-1">Connected Merchants</p>
              <p className="text-[11px] text-neutral-500">Live MCP catalog server integration</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-2xl font-black font-mono text-neutral-950">6</span>
              <p className="text-xs font-semibold text-neutral-800 mt-1">Payment Policy Gates</p>
              <p className="text-[11px] text-neutral-500">Cryptographic approval & safeguards</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-2xl font-black font-mono text-neutral-950">PostgreSQL</span>
              <p className="text-xs font-semibold text-neutral-800 mt-1">State Integrity</p>
              <p className="text-[11px] text-neutral-500">Transactional ledger & token replay defense</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-2xl font-black font-mono text-neutral-950">12M+</span>
              <p className="text-xs font-semibold text-neutral-800 mt-1">Razorpay Merchant</p>
              <p className="text-[11px] text-neutral-500">Designed for scale across global ecosystem</p>
            </div>
          </div>
        </div>

      </div>

    </article>
  );
};
