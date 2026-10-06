import React from 'react';
import { Award, Quote, CheckCircle2, Heart } from 'lucide-react';

export const DevanshuStyleAppreciations: React.FC = () => {
  const appreciations = [
    {
      receivedFrom: "Engineering Lead & Mentor",
      designation: "Lead AI Engineer",
      programName: "Edysor AI — Real-Time Voice Research",
      receivedDate: "21-08-2026",
      note: "I appreciate your willingness to dive deep into real-time voice architectures (Agora vs Pipecat) and all the efforts taken to automate our 100-turn latency benchmark. You consistently balanced engineering rigor with clear product documentation and delivered low latency streaming pipelines sticking to rigorous testing processes.",
      tag: "Technical Rigor"
    },
    {
      receivedFrom: "Nomura KakushIN Evaluation Jury",
      designation: "Technology Division Panel",
      programName: "Nomura KakushIN 10.0 IT Coding Contest",
      receivedDate: "15-07-2026",
      note: "Such a well thought through and deeply empathetic financial inclusion ecosystem. Dhan Saarthi stood out among 1,000+ participating teams because of its seamless 3-layer architecture, 50+ screens, and vernacular voice guidance. Kudos on making complex fintech feel completely accessible.",
      tag: "Hackathon Finalist"
    },
    {
      receivedFrom: "Collaborator & Product Builder",
      designation: "Fintech Systems Lead",
      programName: "Razorpay Buildathon 2026 — Agentic Commerce",
      receivedDate: "28-09-2026",
      note: "Labdhi's clarity on the 6-gate payment policy engine for Raya was phenomenal. She ensured that while the shopping discovery was autonomous across 3 merchants, user security, price revalidation, and cryptographic approvals remained completely bulletproof.",
      tag: "Agentic Systems"
    },
    {
      receivedFrom: "Senior Faculty Advisor & Editorial Chair",
      designation: "Department Chair (ENTC)",
      programName: "Annual Department Magazine Publication",
      receivedDate: "10-07-2026",
      note: "As Department Magazine Head, she showed exceptional ownership, directing visual designers, writers, and faculty reviewers to publish an annual edition of the highest visual and editorial standard. Great leadership, collaboration, and highest level of ownership shown.",
      tag: "Leadership & Ownership"
    }
  ];

  return (
    <section id="appreciations" className="py-24 px-4 sm:px-8 bg-[#FBFBF9] border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header matching Devanshu Chauhan */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>RECOGNITION HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
            Appreciations
          </h2>
          <p className="text-neutral-600 mt-3 text-base sm:text-lg">
            Devanshu Chauhan - Recognition History - Appreciation Programs & Peer Mentorship Notes.
          </p>
        </div>

        {/* Devanshu Chauhan 4-Field Structured Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appreciations.map((app, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              {/* Top metadata table header matching Devanshu */}
              <div className="grid grid-cols-2 gap-3 text-xs border-b border-neutral-100 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                    Received From
                  </span>
                  <span className="font-bold text-neutral-900 block mt-0.5">
                    {app.receivedFrom}
                  </span>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    {app.designation}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                    Received Date
                  </span>
                  <span className="font-mono text-xs font-semibold text-neutral-700 block mt-0.5">
                    {app.receivedDate}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 inline-block mt-1">
                    {app.tag}
                  </span>
                </div>
              </div>

              {/* Program Name */}
              <div>
                <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1">
                  Program Name / Initiative
                </span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50/70 px-2.5 py-1 rounded-lg border border-blue-200/60 inline-block">
                  {app.programName}
                </span>
              </div>

              {/* Nomination Note */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                  Nomination Note & Feedback
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic pt-1">
                  "{app.note}"
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Verified Recognition History</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
