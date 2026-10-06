import React from 'react';
import { Award, Quote, CheckCircle2, Heart } from 'lucide-react';

export const DevanshuStyleAppreciations: React.FC = () => {
  const appreciations = [
    {
      author: "Engineering Lead & Mentor",
      org: "Edysor AI (Voice Systems)",
      date: "Aug 2026",
      note: "I appreciate your willingness to dive deep into real-time voice architectures (Agora vs Pipecat) and all the efforts taken to automate our 100-turn latency benchmark. You consistently balanced engineering rigor with clear product documentation.",
      tag: "Technical Depth"
    },
    {
      author: "Hackathon Evaluation Jury",
      org: "Nomura KakushIN 10.0",
      date: "Jul 2026",
      note: "Dhan Saarthi was recognized as a Finalist from 1,000+ teams because of its human-centric approach to financial inclusion. The 3-layer architecture, 50+ screens, and vernacular voice guidance showed deep product intuition beyond just raw code.",
      tag: "Product & Impact"
    },
    {
      author: "Collaborator & Product Builder",
      org: "Razorpay Buildathon 2026",
      date: "Sep 2026",
      note: "Labdhi's clarity on the 6-gate payment policy engine for Raya was phenomenal. She ensured that while the shopping discovery was autonomous, user security and price revalidation remained completely bulletproof.",
      tag: "Agentic Systems"
    },
    {
      author: "Senior Faculty Advisor",
      org: "Symbiosis Institute of Technology",
      date: "Jul 2026",
      note: "As Department Magazine Head, she showed exceptional ownership, directing writers, visual designers, and faculty reviewers to publish an annual edition of the highest visual and editorial standard.",
      tag: "Leadership & Ownership"
    }
  ];

  return (
    <section id="appreciations" className="py-24 px-4 sm:px-8 bg-[#FBFBF9] border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header matching Devanshu's style */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>RECOGNITION & FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
            Appreciations
          </h2>
          <p className="text-neutral-600 mt-3 text-base sm:text-lg">
            Words of recognition from engineering mentors, product collaborators, hackathon juries, and faculty leaders.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appreciations.map((app, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700 bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-200">
                    {app.tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {app.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                  "{app.note}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-neutral-900">{app.author}</h4>
                  <p className="text-[11px] text-neutral-500 font-mono">{app.org}</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
