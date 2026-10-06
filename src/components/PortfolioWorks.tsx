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
      skills: 'Agentic AI, MCP Protocol, 6-Gate Policy Engine, PostgreSQL',
      scaleHighlight: '3 Connected Merchants • 6-Gate Payment Policy Engine • 12M+ Razorpay Scale',
      description: 'An MCP-powered agentic commerce platform designed to let AI agents discover products across multiple storefronts, compare options, assemble shopping carts, and complete secure checkout through a 6-gate payment policy engine.',
      accent: '#2D5BFF'
    },
    {
      id: 'dhan',
      title: 'Dhan Saarthi (Cortex)',
      brand: 'Nomura KakushIN 10.0',
      projectCount: '10+ Modules • 50+ Screens',
      year: '2026',
      role: 'Lead Product Designer & System Architect',
      skills: 'Financial Inclusion, Voice-First UX, Financial Twin, 3-Layer Fintech Architecture',
      scaleHighlight: 'Selected as Finalist from 1,000+ Teams • 24/7 Vernacular Guidance',
      description: 'An AI-powered financial inclusion ecosystem architected as a 3-layer fintech platform, uniting voice-first multilingual accessibility, consent-driven onboarding, and an intelligent household Financial Twin.',
      accent: '#E07A5F'
    },
    {
      id: 'math',
      title: 'MathEngineer',
      brand: 'EdTech Systems Innovation',
      projectCount: '7 Modules • 20 Practice Bank',
      year: '2026',
      role: 'Full-Stack Product Builder',
      skills: 'Deterministic Solvers, 664 Unit Tests, RAG, Multimodal OCR, Gemini Socratic Fallback',
      scaleHighlight: '664 Automated Tests Passing • 3 Verified Numerical Methods',
      description: 'A deterministic-first engineering mathematics solver turning step-by-step learning into an interactive product with OCR handwritten equation parsing, textbook RAG, and graduated Socratic hints.',
      accent: '#3D5A50'
    },
    {
      id: 'fraud',
      title: 'Citizen Fraud Shield',
      brand: 'Public AI Safety & Trust',
      projectCount: '3 ML Models • FastAPI',
      year: '2026',
      role: 'Product Lead & ML Engineer',
      skills: 'FastAPI Backend, Deepfake Audio Detection, Phishing NLP, Streamlit & Gemini',
      scaleHighlight: '3 Verified Scenarios (Voice, SMS, Banknote) • Sub-3s Latency',
      description: 'A public-facing scam prevention product combining 3 specialized ML detection models, an intuitive Streamlit verification dashboard, and an empathetic Gemini safety assistant for high-stress scam defense.',
      accent: '#8338EC'
    },
    {
      id: 'voice',
      title: 'Voice as a Product Interface',
      brand: 'Edysor AI & Latency Research',
      projectCount: '100 Automated Turns',
      year: '2026',
      role: 'AI Prompt Engineer Intern & Voice Researcher',
      skills: 'Agora WebRTC vs Pipecat, Streaming STT-LLM-TTS, Deepgram, Groq LPU, Cartesia, 3 Language Modes',
      scaleHighlight: 'P50, P90, P95 Latency Profiling • Sub-500ms Human Cadence Focus',
      description: 'Quantitative benchmarking of real-time streaming voice architectures comparing Agora and Pipecat across streaming STT, LLM inference, and TTS pipelines, paired with a functional 3-language VoiceBot.',
      accent: '#F77F00'
    },
    {
      id: 'riya',
      title: 'Riya — Multi-Agent Real Estate Assistant',
      brand: 'Autonomous Systems & CRM',
      projectCount: '6 CrewAI Agents',
      year: '2026',
      role: 'AI Product Builder',
      skills: 'CrewAI Orchestration, PDF Brochure RAG, Google Sheets CRM API, Indian City Real Estate',
      scaleHighlight: '6 Autonomous Agents • 6+ Major Indian Cities • Automated CRM Synchronization',
      description: 'Orchestrating 6 specialized autonomous CrewAI agents to conduct property discovery, legal PDF prospectus retrieval, valuation checks, and seamless CRM synchronization.',
      accent: '#028090'
    },
    {
      id: 'adas',
      title: '5G ADAS & IoV Collision Prevention',
      brand: 'Automotive ML & Connected Vehicles',
      projectCount: 'Real-Time CV & 5G V2X',
      year: '2025 - 2026',
      role: 'Automotive Systems & ML Engineer',
      skills: 'Computer Vision, Multi-Vehicle Bounding Box Tracking, 5G IoV, Kalman Filters, V2X',
      scaleHighlight: '98% Accident Prediction Accuracy • Real-Time Dashcam Vehicle Inference',
      description: 'Safety-critical automotive ML stack combining real-time camera object detection across diverse Indian traffic (autorickshaws, trucks, cars) with 5G V2X trajectory forecasting to avert multi-vehicle collisions.',
      accent: '#10B981'
    },
    {
      id: 'emodio',
      title: 'Emodio — Acoustic AI & Vocal Biomarkers',
      brand: 'LaserHacks 2025 Global Finalist (Lasell University, USA)',
      projectCount: '15,000+ Vocal Samples • BiLSTM',
      year: '2025',
      role: 'Lead Audio ML Engineer & Product Architect',
      skills: 'Acoustic Biomarkers, MFCC & Prosody, BiLSTM Neural Network, Telehealth Teletherapy',
      scaleHighlight: 'Day-2 Global Finalist Selection • 15,000+ Speech Audio Clips (RAVDESS/CREMA-D)',
      description: 'AI-driven vocal biomarker companion developed for LaserHacks 2025 at Lasell University USA. Analyzes micro-acoustic voice tremor, spectral contrast, and MFCC features using a Bidirectional LSTM for longitudinal patient teletherapy tracking.',
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
