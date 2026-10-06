import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, CheckCircle2, GraduationCap, Compass, BookOpen, Heart } from 'lucide-react';

export const DevanshuStyleAbout: React.FC = () => {
  const superPowers = [
    { title: "Product Strategy & PRDs", desc: "Translating ambiguous problems into scoped requirements and decision trees." },
    { title: "Agentic AI & MCP", desc: "Architecting autonomous tool-use protocols and secure policy gates." },
    { title: "Voice AI & Low Latency", desc: "Benchmarking streaming STT → LLM → TTS pipelines for sub-second responses." },
    { title: "Deterministic Guardrails", desc: "Combining mathematical truth algorithms with generative AI fallbacks." },
    { title: "Rapid High-Fidelity UX", desc: "Prototyping 50+ screens for inclusive multimodal and voice-first access." },
    { title: "Automated QA & Telemetry", desc: "Building 660+ automated test suites and turn-by-turn latency profilers." },
    { title: "Multi-Agent Systems", desc: "Choreographing CrewAI swarms with dedicated roles and CRM pipelines." },
    { title: "Cross-Team Leadership", desc: "Guiding publication, design, and engineering teams to successful delivery." },
  ];

  return (
    <section id="about-me" className="py-24 px-4 sm:px-8 bg-white border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
            About Me
          </h2>
          <p className="text-neutral-600 mt-3 text-base sm:text-lg">
            Hi, I'm Labdhi — an engineer by training, and a product thinker by practice.
          </p>
        </div>

        {/* Story Intro */}
        <div className="p-8 rounded-3xl bg-[#FBFBF9] border border-neutral-200/90 mb-12 space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
          <p>
            I am a B.Tech student in Electronics & Telecommunication Engineering at <strong>Symbiosis Institute of Technology, Pune</strong> (CGPA 8.4). My goal is simple: <em>to bridge the gap between cutting-edge AI engineering and products people actually enjoy using without friction or fear.</em>
          </p>
          <p>
            Whether it's designing an MCP-powered agentic commerce layer for Razorpay, crafting an inclusive 50-screen financial guidance ecosystem recognized at Nomura KakushIN, or conducting 100-turn latency benchmarks between Agora and Pipecat at Edysor AI, I believe great products require both technical rigor and user empathy.
          </p>
        </div>

        {/* My Super Powers (Matching Devanshu's Exact Section) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="text-2xl font-extrabold text-neutral-950 tracking-tight">
              My Super Powers
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {superPowers.map((power, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 mb-3" />
                <h4 className="text-sm font-bold text-neutral-900">{power.title}</h4>
                <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">{power.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Thematic Pillars (Roots, What I Do, Future of Tech, Off-Screen) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pillar 1: Roots & Foundation */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBF9] border border-neutral-200/90 space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              01 • ROOTS & FOUNDATION
            </span>
            <h4 className="text-xl font-bold text-neutral-950">Engineering & Discipline</h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Trained in hardware signals, telecommunications, and deep learning algorithms at Symbiosis Institute of Technology (8.4 CGPA), building on a foundational record at National Public School (Class X 9.5, Class XII 8.1 CGPA).
            </p>
          </div>

          {/* Pillar 2: What I Do */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBF9] border border-neutral-200/90 space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              02 • WHAT I DO
            </span>
            <h4 className="text-xl font-bold text-neutral-950">AI Product Prototyping</h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              I shape products from first principles: isolating user friction, framing boundary conditions, authoring PRDs, prototyping interactive UI flows, and writing clean backend services in Python and TypeScript.
            </p>
          </div>

          {/* Pillar 3: The Future of Tech */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBF9] border border-neutral-200/90 space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
              03 • THE FUTURE OF TECH
            </span>
            <h4 className="text-xl font-bold text-neutral-950">Agentic Commerce & Voice</h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Fascinated by agent-to-agent transactions (MCP), real-time speech interaction, and explainable safety guardrails. I aim to build systems that automate friction while keeping users empowered.
            </p>
          </div>

          {/* Pillar 4: Off-Screen */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBF9] border border-neutral-200/90 space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              04 • OFF-SCREEN
            </span>
            <h4 className="text-xl font-bold text-neutral-950">Leadership & Storytelling</h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Heading department magazines, coordinating 5+ cultural productions, mentoring peers on design hierarchy, and reading about design history, economics, and human behavior.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
