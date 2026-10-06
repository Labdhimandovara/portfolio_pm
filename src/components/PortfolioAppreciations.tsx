import React, { useState } from 'react';
import nomuraCert from '../assets/portfolio/certificate-syCK490Z.png';
import laserHacksCert from '../assets/portfolio/certificate-MXPRy1eC.png';
import { Award, CheckCircle2, Trophy, ExternalLink, ZoomIn, Sparkles } from 'lucide-react';

export const PortfolioAppreciations: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const recognitions = [
    {
      title: "Nomura KakushIN 10.0 — Finalist",
      issuedBy: "Nomura Services India Private Limited",
      category: "Information Technology Division Coding Contest",
      date: "July 04, 2026",
      team: "Team Cortex (Labdhi Mandovara)",
      highlight: "Selected as Finalist among 1,000+ national competitive teams",
      description: "Recognized by Nomura's Technology & Data division leadership for architecting Dhan Saarthi — an inclusive 3-layer fintech platform featuring a deterministic household Financial Twin, 10+ modules, and 50+ screens for vernacular guidance."
    },
    {
      title: "LaserHacks 2025 — Lasell University, USA",
      issuedBy: "SCRS Student Chapter at Lasell University, USA",
      category: "Global AI & Health Hackathon",
      date: "November 15–16, 2025",
      team: "Team Emodio (Labdhi Mandovara, Ashutosh Singh)",
      highlight: "Day-2 Global Finalist Selection",
      description: "Awarded for outstanding engineering of Emodio, an AI-powered teletherapy platform leveraging vocal biomarkers and speech emotion classification for longitudinal patient monitoring."
    },
    {
      title: "Razorpay Buildathon 2026",
      issuedBy: "Razorpay Fintech Innovation",
      category: "Agentic AI & Commerce Protocol",
      date: "September 2026",
      team: "Raya Commerce Engine",
      highlight: "MCP Agentic Commerce & 6-Gate Payment Engine",
      description: "Engineered Raya, connecting 3 live merchant catalogs with Model Context Protocol (MCP) tool routing and a 6-gate cryptographic payment policy engine ready for 12M+ Razorpay merchants."
    }
  ];

  return (
    <section id="appreciations" className="py-20 px-4 sm:px-8 bg-[#F5F5F3] border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs text-xs font-mono font-bold text-neutral-800 mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>HONORS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Recognitions & Certificates
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Verified competitive honors, hackathon finalists, and institutional certifications.
          </p>
        </div>

        {/* Certificate Card 1: Nomura KakushIN Finalist Certificate */}
        <div className="rounded-3xl bg-[#EBEBE8] p-6 sm:p-10 border border-neutral-200/90 shadow-sm text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold mb-3">
            <span>NOMURA KAKUSHIN 10.0 • NATIONAL CODING CONTEST</span>
          </div>

          <h3 className="text-lg sm:text-2xl font-extrabold text-neutral-900 tracking-tight mb-2 max-w-2xl mx-auto">
            Nomura Information Technology Division — Finalist
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mb-6 max-w-xl mx-auto">
            Honoured by Nomura Services India for participating as a national finalist with Team Cortex (Dhan Saarthi).
          </p>

          {/* Certificate Frame with Red Border */}
          <div
            className="relative mx-auto max-w-2xl rounded-xl bg-white p-3 sm:p-4 border-4 sm:border-[6px] border-[#A91D22] shadow-md group cursor-pointer"
            onClick={() => setSelectedCert(nomuraCert)}
          >
            <img
              src={nomuraCert}
              alt="Nomura KakushIN Finalist Certificate - Labdhi Mandovara (Cortex)"
              className="w-full h-auto rounded object-contain max-h-[400px] mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
            />
            
            <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
              <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-neutral-900 font-bold text-xs shadow-md flex items-center gap-1.5">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Click to view full certificate</span>
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 text-xs text-neutral-700 font-mono">
            <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs font-semibold">
              Nomura Services India Pvt. Ltd.
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
              IT Division Coding Contest
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs text-red-700 font-bold">
              Finalist: Team Cortex
            </span>
          </div>

        </div>

        {/* Certificate Card 2: LaserHacks 2025 Lasell University USA */}
        <div className="rounded-3xl bg-[#EBEBE8] p-6 sm:p-10 border border-neutral-200/90 shadow-sm text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold mb-3">
            <span>LASELL UNIVERSITY, USA • GLOBAL HACKATHON</span>
          </div>

          <h3 className="text-lg sm:text-2xl font-extrabold text-neutral-900 tracking-tight mb-2 max-w-2xl mx-auto">
            LaserHacks 2025 — Lasell University USA
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mb-6 max-w-xl mx-auto">
            Certificate of participation awarded to Team Emodio (Labdhi Mandovara, Ashutosh Singh) organized by the SCRS Student Chapter at Lasell University.
          </p>

          {/* Certificate Frame with Gold / Blue Accent Border */}
          <div
            className="relative mx-auto max-w-lg rounded-xl bg-white p-3 sm:p-4 border-4 sm:border-[6px] border-[#1E3A8A] shadow-md group cursor-pointer"
            onClick={() => setSelectedCert(laserHacksCert)}
          >
            <img
              src={laserHacksCert}
              alt="LaserHacks 2025 Certificate - Team Emodio"
              className="w-full h-auto rounded object-contain max-h-[440px] mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
            />
            
            <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
              <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-neutral-900 font-bold text-xs shadow-md flex items-center gap-1.5">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Click to view full certificate</span>
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 text-xs text-neutral-700 font-mono">
            <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs font-semibold">
              Lasell University, USA
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
              SCRS Student Chapter
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs text-blue-700 font-bold">
              Team Emodio
            </span>
          </div>

        </div>

        {/* Verified Hackathon & Product Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recognitions.map((rec, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-neutral-200/90 shadow-2xs flex flex-col justify-between space-y-4 text-left"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1">
                  {rec.category}
                </span>
                <h4 className="text-base font-bold text-neutral-900 leading-snug">
                  {rec.title}
                </h4>
                <span className="text-xs font-semibold text-blue-700 block mt-1">
                  {rec.issuedBy}
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed mt-2.5">
                  {rec.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-700 font-semibold">{rec.highlight}</span>
                <span className="text-neutral-400">{rec.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative max-w-4xl max-h-[92vh] bg-white p-3 rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-bold shadow-md hover:bg-neutral-800"
            >
              Close
            </button>
            <img
              src={selectedCert}
              alt="Certificate Full View"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
