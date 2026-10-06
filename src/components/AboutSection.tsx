import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, Compass, Cpu, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-white border-y border-neutral-200/80 relative">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono font-medium">
              <span>BACKGROUND & MOTIVATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
              Engineer by training. <br />
              <span className="text-blue-600">Product thinker</span> by practice.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              <p>
                I am a B.Tech student in Electronics & Telecommunication at <strong>Symbiosis Institute of Technology, Pune</strong> (CGPA 8.4), working at the intersection of AI engineering and product design.
              </p>
              <p>
                My journey into product wasn't born out of buzzwords, but from seeing powerful machine learning models crumble in users' hands because no one thought through the edge cases, latency budgets, or human anxiety. Whether it's building an MCP agentic commerce layer for Razorpay, a 50-screen inclusive financial companion recognized at Nomura KakushIN, or benchmarking voice latency between Agora and Pipecat, I care about turning complex intelligence into intuitive, dependable products.
              </p>
              <p>
                I don't claim decades of enterprise PM tenure. Instead, I bring what fast-moving product teams need right now: <strong>technical fluency in modern AI</strong>, the empathy to talk to real users, rapid prototyping speed, and the discipline to validate systems with automated tests and quantitative telemetry.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-neutral-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Product Discovery & PRDs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Agentic AI & MCP Servers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Voice AI Benchmarks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Cross-Functional Leadership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Credential Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Education Card */}
            <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/90 space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-white shadow-2xs border border-neutral-200">
                  <GraduationCap className="w-5 h-5 text-neutral-800" />
                </div>
                <span className="text-xs font-mono font-bold text-neutral-900 bg-white px-2.5 py-1 rounded-full border border-neutral-200">
                  CGPA 8.4 / 10.0
                </span>
              </div>
              <h3 className="text-base font-bold text-neutral-950">
                {PERSONAL_INFO.education.degree}
              </h3>
              <p className="text-xs text-neutral-600">
                {PERSONAL_INFO.education.institution}
              </p>
              <div className="text-[11px] font-mono text-neutral-400 pt-1">
                Batch: {PERSONAL_INFO.education.timeline}
              </div>
            </div>

            {/* Schooling Highlights */}
            <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/90 space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                Foundational Academic Record
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-neutral-200/50">
                  <span className="text-neutral-700">Class XII (Senior Secondary)</span>
                  <span className="font-mono font-bold text-neutral-900">8.1 CGPA</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-neutral-700">Class X (Secondary)</span>
                  <span className="font-mono font-bold text-neutral-900">9.5 CGPA</span>
                </div>
              </div>
              <p className="text-[11px] text-neutral-500 pt-1">
                National Public School (Gandhinagar), Indore, Madhya Pradesh
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
