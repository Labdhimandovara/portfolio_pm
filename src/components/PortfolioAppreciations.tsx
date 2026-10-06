import React, { useState } from 'react';
import certImg1 from '../assets/portfolio/certificate-syCK490Z.png';
import certImg2 from '../assets/portfolio/certificate-MXPRy1eC.png';
import { Award, CheckCircle2, Heart, ExternalLink, ZoomIn } from 'lucide-react';

export const PortfolioAppreciations: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const appreciationNotes = [
    {
      receivedFrom: "Anil Kumar",
      titleRole: "Sr. Eng. Manager & Program Lead",
      programName: "Thank You.. U make a Difference !",
      receivedDate: "21-12-2024",
      note: "Such a professional, energetic and very well thought through event and product execution, it doesn't feel like your team is organising this for the first time - Feedback from an external team. Kudos and thanks to each one of you for stepping up and making the AI product and Hackathon initiative a grand success. Great energy, collaboration and highest level of ownership shown by each volunteer across all teams. With your inspiring participation, we have laid a great architecture & foundation which will serve us well in future events.",
      borderColor: "border-emerald-500"
    },
    {
      receivedFrom: "Nomura Technology Jury",
      titleRole: "KakushIN 10.0 Evaluation Panel",
      programName: "Nomura KakushIN Finalist Honor",
      receivedDate: "15-07-2026",
      note: "Selected as Top Finalist from over 1,000+ national submissions. Dhan Saarthi presented a remarkably mature 3-layer architecture and 50+ screens for multilingual financial inclusion, combining voice accessibility with a deterministic household Financial Twin.",
      borderColor: "border-blue-500"
    },
    {
      receivedFrom: "Razorpay Buildathon Mentors",
      titleRole: "Fintech Systems Architecture",
      programName: "Raya — Agentic Commerce Award",
      receivedDate: "28-09-2026",
      note: "Outstanding execution on MCP agentic commerce. Labdhi designed a robust 6-gate payment policy engine ensuring multi-merchant cart synchronization, cryptographic approval, and zero-hallucination payment safety.",
      borderColor: "border-amber-500"
    }
  ];

  return (
    <section id="appreciations" className="py-20 px-4 sm:px-8 bg-[#F5F5F3] border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Certificate Card Container (Exact replication of Portfolio reference screenshot) */}
        <div className="rounded-3xl bg-[#EBEBE8] p-6 sm:p-10 border border-neutral-200/90 shadow-sm text-center">
          
          <h3 className="text-base sm:text-xl font-bold text-neutral-800 tracking-tight mb-6 max-w-xl mx-auto">
            Received a six month certification in Product management in Gen AI and Agentic AI
          </h3>

          {/* Certificate Display Frame with red border matching Portfolio's certificate card */}
          <div className="relative mx-auto max-w-2xl rounded-xl bg-white p-3 sm:p-4 border-4 sm:border-[6px] border-[#A91D22] shadow-md group cursor-pointer"
               onClick={() => setSelectedCert(certImg1)}>
            <img
              src={certImg1}
              alt="Labdhi Mandovara Certification"
              className="w-full h-auto rounded object-contain max-h-[380px] mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
            />
            
            <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
              <span className="px-3 py-1.5 rounded-full bg-white/95 text-neutral-900 font-bold text-xs shadow-md flex items-center gap-1.5">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Click to view full certificate</span>
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-600 font-mono">
            <span className="px-2.5 py-1 rounded-full bg-white border border-neutral-200">
              BITS School of Management (BITSoM) / CEPD
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white border border-neutral-200">
              Verified Credential & QR Code
            </span>
          </div>

        </div>

        {/* Appreciation Program Card (Exact replication of Portfolio bottom card in screenshot) */}
        {appreciationNotes.map((app, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-[#ECECE9] p-6 sm:p-10 border border-neutral-200/90 shadow-sm text-left"
          >
            {/* Header Title with Labdhi's Name */}
            <h4 className="text-sm sm:text-base font-bold text-neutral-700 tracking-tight mb-6">
              Labdhi Mandovara - Recognition History - Appreciation Programs
            </h4>

            {/* Main Content Layout */}
            <div className="space-y-6">
              
              {/* Top Row: Left Badge + 3 Columns */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                
                {/* Left "THANK YOU YOU MAKE A DIFFERENCE" Badge (Exact emblem from Portfolio screenshot) */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white border border-neutral-200 shadow-2xs flex flex-col items-center justify-center p-2 text-center flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mb-1 text-rose-500">
                    <Heart className="w-4 h-4 fill-rose-500" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase leading-tight text-neutral-800 tracking-tight">
                    THANK YOU
                  </span>
                  <span className="text-[9px] font-bold text-neutral-500 leading-tight">
                    YOU MAKE
                  </span>
                  <span className="text-[8px] font-extrabold text-[#D9536C] tracking-tighter">
                    A DIFFERENCE
                  </span>
                </div>

                {/* 3 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full text-xs">
                  
                  {/* Column 1: Received From */}
                  <div className="border-l-2 border-neutral-400 pl-3">
                    <span className="text-[11px] text-neutral-500 block">Received From</span>
                    <span className="font-bold text-neutral-900 text-sm block mt-0.5">{app.receivedFrom}</span>
                    <span className="text-[10px] text-neutral-500 block">{app.titleRole}</span>
                  </div>

                  {/* Column 2: Program Name */}
                  <div className={`border-l-2 ${app.borderColor} pl-3`}>
                    <span className="text-[11px] text-neutral-500 block">Program Name</span>
                    <span className="font-bold text-neutral-900 text-sm block mt-0.5 leading-snug">
                      {app.programName}
                    </span>
                  </div>

                  {/* Column 3: Received Date */}
                  <div className="border-l-2 border-rose-500 pl-3">
                    <span className="text-[11px] text-neutral-500 block">Received Date</span>
                    <span className="font-mono font-bold text-neutral-900 text-sm block mt-0.5">
                      {app.receivedDate}
                    </span>
                  </div>

                </div>

              </div>

              {/* Bottom Row: Nomination Note */}
              <div className="pt-2">
                <span className="text-xs font-bold text-neutral-800 block mb-1.5">
                  Nomination Note
                </span>
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed max-w-3xl">
                  {app.note}
                </p>
              </div>

            </div>

          </div>
        ))}

        {/* Second Certificate Card (Honors & Recognition) */}
        <div className="rounded-3xl bg-[#EBEBE8] p-6 sm:p-8 border border-neutral-200/90 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-full sm:w-1/3 rounded-xl overflow-hidden border-2 border-neutral-300 bg-white p-2 shadow-xs cursor-pointer group"
               onClick={() => setSelectedCert(certImg2)}>
            <img
              src={certImg2}
              alt="Labdhi Mandovara Honors"
              className="w-full h-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="w-full sm:w-2/3 text-left space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 font-bold">
              VERIFIED MERIT
            </span>
            <h4 className="text-lg font-bold text-neutral-900">
              Executive Recognition & Academic Distinction
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Consistently recognized for bridging technical AI architecture with human-centric product execution, from hackathon stages to departmental leadership at Symbiosis Institute of Technology.
            </p>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Certificate */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white p-4 rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-bold shadow-md hover:bg-neutral-800"
            >
              Close
            </button>
            <img
              src={selectedCert}
              alt="Certificate Full View"
              className="w-full h-auto max-h-[82vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
