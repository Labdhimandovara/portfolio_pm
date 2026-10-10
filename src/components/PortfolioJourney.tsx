import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const PortfolioJourney: React.FC = () => {
  const journey = [
    {
      period: "Sep 2026",
      location: "Bengaluru (Virtual)",
      title: "Razorpay Buildathon 2026 — Raya Agentic Commerce",
      org: "Razorpay",
      desc: "Built Raya, an agentic shopping assistant connecting multiple merchant catalogs. Implemented a 6-gate checkout workflow designed for Razorpay's 12M+ merchant ecosystem.",
      tags: ["Agentic Commerce", "MCP Protocol", "6-Gate Checkout"]
    },
    {
      period: "Jul 2026 – Aug 2026",
      location: "Remote",
      title: "AI Engineer Intern — Real-Time Voice Agents",
      org: "Edysor AI",
      desc: "Built real-time voice agents using Agora, Pipecat, Deepgram, and Cartesia. Created a 100-turn automated benchmarking tool to measure end-to-end conversational latency and interruption handling.",
      tags: ["Voice AI", "Latency Benchmarking", "Agora vs Pipecat"]
    },
    {
      period: "Jul 2026",
      location: "Mumbai",
      title: "Nomura KakushIN 10.0 — Finalist (Dhan Saarthi)",
      org: "Nomura Information Technology Division",
      desc: "Selected as a Finalist among 1,000+ participating teams. Built Dhan Saarthi, an inclusive vernacular financial app spanning 10+ modules and 50+ screens to help rural and first-time users bank confidently.",
      tags: ["Fintech Inclusion", "50+ Screens", "10+ Modules"]
    },
    {
      period: "Aug 2025 – Jul 2026",
      location: "Pune",
      title: "Department Magazine Head & Design Head",
      org: "Symbiosis Institute of Technology",
      desc: "Led the editorial direction, Figma visual design systems, and print publication layout, coordinating between writers, designers, and faculty reviewers.",
      tags: ["Creative Direction", "Design Systems", "Editorial Leadership"]
    },
    {
      period: "Nov 2025",
      location: "Global Hackathon (SCRS & Lasell University, USA)",
      title: "LaserHacks 2025 — Day-2 Global Finalist (Emodio)",
      org: "SCRS & Lasell University",
      desc: "Selected for the Day-2 Global Finals. Built Emodio, an audio AI companion that detects voice pitch and emotional tone to help therapists monitor patient mood trends.",
      tags: ["Audio AI", "Global Finalist", "Healthcare ML"]
    },
    {
      period: "2023 – 2027",
      location: "Pune, Maharashtra",
      title: "B.Tech in Electronics & Telecommunication (CGPA 8.4)",
      org: "Symbiosis Institute of Technology",
      desc: "Focusing on signal processing, telecommunications, deep learning models, and real-time interactive software systems.",
      tags: ["B.Tech ENTC", "CGPA 8.4", "Signal Processing"]
    },
    {
      period: "2020 – 2023",
      location: "Indore, Madhya Pradesh",
      title: "Foundational Leadership & Academics",
      org: "National Public School (Gandhinagar)",
      desc: "Served as Principal Representative (2020–2021) and Cultural Head (2021–2022) organizing 5+ major productions. Graduated with 9.5 CGPA in Class X and 8.1 CGPA in Class XII.",
      tags: ["Cultural Head", "Principal Rep", "9.5 CGPA"]
    }
  ];

  return (
    <section id="journey" className="py-24 px-4 sm:px-8 bg-[#FBFBF9] border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 border border-neutral-300 text-neutral-800 text-xs font-mono font-bold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>CHRONOLOGICAL MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
            My Journey
          </h2>
          <p className="text-neutral-600 mt-3 text-base sm:text-lg">
            A progression of curiosity, leadership, competitive hackathons, and real-world system building.
          </p>
        </div>

        {/* Journey Timeline Cards */}
        <div className="space-y-4">
          {journey.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono font-bold text-neutral-950 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-neutral-500">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    {item.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-950 pt-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-blue-700">
                  {item.org}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {item.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-neutral-50 border border-neutral-200 text-[11px] font-mono text-neutral-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
