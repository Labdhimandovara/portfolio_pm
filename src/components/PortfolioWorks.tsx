import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ChevronDown, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Activity, 
  Zap,
  Building2,
  Mic,
  Coins,
  ExternalLink
} from 'lucide-react';
import { CaseStudyRaya } from './CaseStudyRaya';
import { CaseStudyDhanSaarthi } from './CaseStudyDhanSaarthi';
import { CaseStudyMathEngineer } from './CaseStudyMathEngineer';
import { CaseStudyFraudShield } from './CaseStudyFraudShield';
import { RealEstateSection } from './RealEstateSection';
import { VoiceBenchmarkSection } from './VoiceBenchmarkSection';
import { CaseStudyADAS } from './CaseStudyADAS';
import { CaseStudyEmodio } from './CaseStudyEmodio';

export const PortfolioWorks: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>('raya');

  const projects = [
    {
      id: 'raya',
      title: 'Raya by Razorpay',
      brand: 'Razorpay Buildathon 2026',
      projectCount: 'Agentic Commerce',
      year: '2026',
      role: 'Product Architect & AI Engineer',
      skills: 'Agentic AI, Model Context Protocol (MCP), Payment Guardrails, PostgreSQL',
      scaleHighlight: '3 Connected Stores • 6 Payment Safety Gates • Live YouTube Demo',
      description: 'An AI shopping assistant where agents browse store catalogs, compare products, build carts, and trigger secure checkouts using Razorpay APIs.',
      accent: '#2D5BFF'
    },
    {
      id: 'dhan',
      title: 'Dhan Saarthi (Cortex)',
      brand: 'Nomura KakushIN 10.0',
      projectCount: '10+ Modules • 50+ Screens',
      year: '2026',
      role: 'Lead Product Designer & System Architect',
      skills: 'Fintech UX, Multilingual Voice, Household Budgeting, System Architecture',
      scaleHighlight: 'National Finalist from 1,000+ Teams • Local Language Voice Guidance',
      description: 'A financial guidance app for families and shop owners in India, offering local-language voice assistance, simple budgeting, and clear savings goals.',
      accent: '#E07A5F'
    },
    {
      id: 'math',
      title: 'MathEngineer',
      brand: 'EdTech Systems',
      projectCount: '7 Modules • 20 Practice Bank',
      year: '2026',
      role: 'Full-Stack Product Builder',
      skills: 'Numerical Methods, 664 Unit Tests, RAG, Handwriting OCR, Gemini Hints',
      scaleHighlight: '664 Automated Tests Passing • Verified Step-by-Step Derivations',
      description: 'An engineering math learning tool that scans handwritten equations, verifies derivations with deterministic formulas, and provides guided hints instead of skipping steps.',
      accent: '#3D5A50'
    },
    {
      id: 'fraud',
      title: 'Citizen Fraud Shield',
      brand: 'Public AI Safety & Trust',
      projectCount: '3 ML Models • FastAPI',
      year: '2026',
      role: 'Product Lead & ML Engineer',
      skills: 'FastAPI, Audio Spoof Detection, Phishing NLP, Streamlit & Gemini',
      scaleHighlight: '3 Real Checks (Voice, SMS, Banknote) • Live Video Demo Available',
      description: 'A simple safety tool to help everyday citizens quickly verify suspicious phone calls, phishing SMS links, and counterfeit notes before losing money.',
      accent: '#8338EC'
    },
    {
      id: 'voice',
      title: 'Voice as a Product Interface',
      brand: 'Edysor AI & Latency Research',
      projectCount: '100 Automated Turns',
      year: '2026',
      role: 'AI Prompt Engineer Intern & Voice Researcher',
      skills: 'Agora vs Pipecat, Streaming STT-LLM-TTS, Deepgram, Groq, 3 Languages',
      scaleHighlight: 'Benchmarked 100 Turns • Sub-500ms Human Cadence • Live Working Demo',
      description: 'Benchmarked real-time speech pipelines (Agora vs. Pipecat) to test conversation delay and turnaround times, paired with a working 3-language voice bot.',
      accent: '#F77F00'
    },
    {
      id: 'riya',
      title: 'Riya — Multi-Agent Real Estate Assistant',
      brand: 'Autonomous Systems & CRM',
      projectCount: '6 CrewAI Agents',
      year: '2026',
      role: 'AI Product Builder',
      skills: 'CrewAI Multi-Agent Swarm, Brochure PDF RAG, Google Sheets CRM API',
      scaleHighlight: '6 Autonomous Agents • 6+ Major Indian Cities • Auto-Synced CRM',
      description: 'A multi-agent real estate chatbot that searches listings, reads builder PDF brochures for legal clauses, checks prices, and logs customer inquiries to Google Sheets.',
      accent: '#028090'
    },
    {
      id: 'adas',
      title: '5G ADAS & IoV Collision Prevention',
      brand: 'Automotive ML & Connected Vehicles',
      projectCount: 'Real-Time CV & 5G V2X',
      year: '2025 - 2026',
      role: 'Automotive Systems & ML Engineer',
      skills: 'Computer Vision, Multi-Vehicle Tracking, 5G IoV, Trajectory Forecasting',
      scaleHighlight: '98% Collision Prediction Accuracy • Real Dashcam Vehicle Tracking',
      description: 'Camera-based object detection tested on Indian road conditions (autorickshaws, trucks, cars) paired with trajectory forecasting to alert drivers before potential crashes.',
      accent: '#10B981'
    },
    {
      id: 'emodio',
      title: 'Emodio — Acoustic AI & Vocal Biomarkers',
      brand: 'LaserHacks 2025 (Lasell University, USA)',
      projectCount: '15,000+ Vocal Samples • BiLSTM',
      year: '2025',
      role: 'Lead Audio ML Engineer & Product Architect',
      skills: 'Acoustic Biomarkers, MFCC Features, BiLSTM Neural Network, Telehealth',
      scaleHighlight: 'Day-2 Global Finalist Selection • 15,000+ Audio Samples (RAVDESS/CREMA-D)',
      description: 'A telehealth prototype built for LaserHacks 2025 that analyzes voice pitch and emotional tone from speech to help therapists monitor patient mood trends over time.',
      accent: '#3B82F6'
    }
  ];

  return (
    <section id="works" className="py-24 px-4 sm:px-8 bg-white border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header matching Portfolio's exact layout */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-mono font-bold mb-3">
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
            My Works
          </h2>
          <p className="text-neutral-600 mt-3 text-base sm:text-lg">
            Showcasing a diverse range of scalable design solutions, agentic commerce platforms, and user experiences across multiple domains.
          </p>
        </div>

        {/* Project Editorial Cards (matching Portfolio card typography & metadata layout) */}
        <div className="space-y-6">
          {projects.map((proj, idx) => {
            const isExpanded = expandedProject === proj.id;
            return (
              <div
                key={proj.id}
                className="rounded-3xl border border-neutral-200/90 bg-[#FBFBF9] hover:border-neutral-300 transition-all overflow-hidden shadow-xs"
              >
                {/* Project Header Box matching Portfolio's exact metadata fields */}
                <div
                  onClick={() => setExpandedProject(isExpanded ? null : proj.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-start justify-between gap-6 bg-white hover:bg-neutral-50/70 transition-colors"
                >
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl font-extrabold font-mono text-neutral-950">
                        0{idx + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                        {proj.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Scale Highlight Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{proj.scaleHighlight}</span>
                    </div>
                  </div>

                  {/* Portfolio's 4-Box Metadata Grid (Brand, Projects, Year, Role, Skills) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 text-left lg:w-72 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-neutral-100">
                    <div className="p-2.5 rounded-xl bg-[#FBFBF9] border border-neutral-200/80">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                        BRAND / CHALLENGE
                      </span>
                      <span className="text-xs font-bold text-neutral-900 block truncate">
                        {proj.brand}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#FBFBF9] border border-neutral-200/80">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                        YEAR
                      </span>
                      <span className="text-xs font-bold text-neutral-900 block">
                        {proj.year}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#FBFBF9] border border-neutral-200/80 sm:col-span-2 lg:col-span-2">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                        ROLE
                      </span>
                      <span className="text-xs font-bold text-neutral-900 block">
                        {proj.role}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#FBFBF9] border border-neutral-200/80 sm:col-span-2 lg:col-span-2">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                        SKILLS
                      </span>
                      <span className="text-[11px] font-medium text-neutral-700 block truncate">
                        {proj.skills}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Toggle Bar */}
                <div 
                  onClick={() => setExpandedProject(isExpanded ? null : proj.id)}
                  className="px-6 py-3 bg-[#FBFBF9] border-t border-neutral-200/80 flex items-center justify-between text-xs cursor-pointer hover:bg-neutral-100 transition-colors"
                >
                  <span className="font-mono font-semibold text-blue-700">
                    {isExpanded ? 'Hide In-Depth Case Study' : 'View Full In-Depth Case Study & Architecture →'}
                  </span>
                  <div className={`w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-neutral-900 text-white' : ''}`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Expanded Deep Dive Case Study */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-neutral-200/80 p-4 sm:p-8 bg-[#FBFBF9]"
                    >
                      {proj.id === 'raya' && <CaseStudyRaya />}
                      {proj.id === 'dhan' && <CaseStudyDhanSaarthi />}
                      {proj.id === 'math' && <CaseStudyMathEngineer />}
                      {proj.id === 'fraud' && <CaseStudyFraudShield />}
                      {proj.id === 'voice' && <VoiceBenchmarkSection />}
                      {proj.id === 'riya' && <RealEstateSection />}
                      {proj.id === 'adas' && <CaseStudyADAS />}
                      {proj.id === 'emodio' && <CaseStudyEmodio />}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
