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
  Coins
} from 'lucide-react';
import { CaseStudyRaya } from './CaseStudyRaya';
import { CaseStudyDhanSaarthi } from './CaseStudyDhanSaarthi';
import { CaseStudyMathEngineer } from './CaseStudyMathEngineer';
import { CaseStudyFraudShield } from './CaseStudyFraudShield';
import { RealEstateSection } from './RealEstateSection';
import { VoiceBenchmarkSection } from './VoiceBenchmarkSection';
import { SystemsSection } from './SystemsSection';

export const DevanshuStyleWorks: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>('raya');

  const projects = [
    {
      id: 'raya',
      title: 'Raya by Razorpay',
      company: 'Razorpay Buildathon 2026',
      badge: 'BUILDATHON WINNER TRACK',
      year: '2026',
      role: 'Product Architect & AI Engineer',
      skills: 'Agentic Commerce, MCP Protocol, 6-Gate Policy Engine, PostgreSQL',
      scale: '3 Connected Merchants • 6-Gate Payment Policy Engine • 12M+ Razorpay Merchant Scale',
      summary: 'An MCP-powered agentic commerce platform allowing autonomous AI agents to discover products across multiple merchants, compare options, assemble shopping carts, and execute safe checkout.',
      accent: '#2D5BFF'
    },
    {
      id: 'dhan',
      title: 'Dhan Saarthi (Cortex)',
      company: 'Nomura KakushIN 10.0',
      badge: 'FINALIST / 1,000+ TEAMS',
      year: '2026',
      role: 'Lead Product Designer & System Architect',
      skills: 'Financial Inclusion, 50+ UI Screens, 10+ Modules, Voice-First UX, 3-Tier Architecture',
      scale: '10+ Modules • 50+ Screens • 24/7 Vernacular Guidance • Selected from 1,000+ Teams',
      summary: 'A multimodal financial life companion designed for underbanked citizens, combining voice-first dialect access, consent-driven onboarding, and an intelligent household Financial Twin.',
      accent: '#E07A5F'
    },
    {
      id: 'math',
      title: 'MathEngineer',
      company: 'EdTech Systems Innovation',
      badge: '664 AUTOMATED TESTS',
      year: '2026',
      role: 'Full-Stack Product Builder',
      skills: 'Deterministic Computing, Numerical Methods, RAG & OCR, Gemini Socratic Fallback',
      scale: '664 Unit Tests • 3 Numerical Methods • 7 Learning Modules • 20 Practice Bank',
      summary: 'A deterministic-first engineering mathematics solver turning step-by-step pedagogy into an interactive product with OCR handwritten equation parsing and textbook RAG.',
      accent: '#3D5A50'
    },
    {
      id: 'fraud',
      title: 'Citizen Fraud Shield',
      company: 'Public AI Safety & Trust',
      badge: '3 ML FRAUD MODELS',
      year: '2026',
      role: 'Product Lead & ML Systems Engineer',
      skills: 'FastAPI Async, Deepfake Audio Detection, Transaction Phishing NLP, Gemini Chatbot',
      scale: '3 Specialized Scenarios (Voice, SMS, Currency) • Sub-3s Latency • Plain-English Directives',
      summary: 'A citizen-focused scam prevention hub replacing high-stress ambiguity with rapid machine learning verification for voice extortion, fake UPI payment alerts, and currency notes.',
      accent: '#8338EC'
    },
    {
      id: 'voice',
      title: 'Voice as a Product Interface',
      company: 'Edysor AI & Research',
      badge: '100-TURN BENCHMARK',
      year: '2026',
      role: 'AI Prompt Engineer Intern & Voice Researcher',
      skills: 'Agora WebRTC vs Pipecat, Streaming STT-LLM-TTS, 3 Language Modes, Deepgram/Cartesia',
      scale: '100 Automated Turns • P50/P90/P95 Profiling • Hindi, Telugu & Mixed Vernacular Modes',
      summary: 'Quantitative benchmarking of real-time streaming voice architectures for conversational sub-second human cadence, paired with a functional 3-language VoiceBot.',
      accent: '#F77F00'
    },
    {
      id: 'riya',
      title: 'Riya — Multi-Agent Real Estate Assistant',
      company: 'Autonomous Agentic Systems',
      badge: '6 CREWAI AGENTS',
      year: '2026',
      role: 'AI Product Builder',
      skills: 'CrewAI Choreography, PDF Brochure RAG, Google Sheets CRM API, Indian City Real Estate',
      scale: '6 Autonomous Agents • 6+ Major Indian Cities • Automated CRM Pipeline',
      summary: 'Orchestrating 6 specialized autonomous agents to conduct property discovery, legal PDF prospectus retrieval, valuation checks, and seamless CRM synchronization.',
      accent: '#028090'
    },
    {
      id: 'systems',
      title: '5G ADAS & Acoustic ML',
      company: 'Connected Systems & Deep Learning',
      badge: '98% CRASH ACCURACY',
      year: '2025 - 2026',
      role: 'Signal Processing & ML Engineer',
      skills: '5G Internet of Vehicles (IoV), Trajectory Prediction, LSTM, MFCC Audio Features',
      scale: '98% Accident Prediction Accuracy • 15,000+ Speech Audio Clips (RAVDESS/CREMA-D)',
      summary: 'Foundational systems engineering combining real-time 5G telematics collision trajectory forecasting with an LSTM neural network classifying 5 vocal emotional states.',
      accent: '#10B981'
    }
  ];

  return (
    <section id="works" className="py-24 px-4 sm:px-8 bg-white border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header matching Devanshu's editorial style */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-mono font-bold mb-3">
            <span>SELECTED CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
            My Works
          </h2>
          <p className="text-neutral-600 mt-3 text-base sm:text-lg">
            Showcasing a diverse range of scalable AI solutions, agentic commerce platforms, and user experiences across multiple domains.
          </p>
        </div>

        {/* Project Editorial Cards Stack */}
        <div className="space-y-6">
          {projects.map((proj, idx) => {
            const isExpanded = expandedProject === proj.id;
            return (
              <div
                key={proj.id}
                className="rounded-3xl border border-neutral-200/90 bg-[#FBFBF9] hover:border-neutral-300 transition-all overflow-hidden shadow-xs"
              >
                {/* Project Header Banner / Clickable Strip */}
                <div
                  onClick={() => setExpandedProject(isExpanded ? null : proj.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white hover:bg-neutral-50/70 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-sm font-mono font-bold text-neutral-400">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                        {proj.company}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        {proj.year}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        {proj.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>

                  {/* Right metadata & expand trigger */}
                  <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-neutral-100">
                    <div className="text-left md:text-right space-y-1">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                        MY ROLE
                      </span>
                      <span className="text-xs font-bold text-neutral-900 block">
                        {proj.role}
                      </span>
                      <span className="text-[11px] text-neutral-500 font-mono block">
                        {proj.scale}
                      </span>
                    </div>

                    <div className={`w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-neutral-900 text-white' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
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
                      {proj.id === 'systems' && <SystemsSection />}
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
