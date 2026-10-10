import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  FileText, 
  Table, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Bot
} from 'lucide-react';

export const RealEstateSection: React.FC = () => {
  const [activeAgentIndex, setActiveAgentIndex] = useState<number>(0);

  const agents = [
    {
      name: "Search Agent",
      role: "Property Discovery",
      action: "Searches property listings across 6+ Indian cities based on budget, BHK, and carpet area requirements.",
      input: "User search criteria (e.g. '3 BHK in Hinjewadi, Pune under ₹1.2 Cr')",
      output: "Matching property list with key specs & pricing"
    },
    {
      name: "Knowledge Agent",
      role: "Brochure & Legal RAG",
      action: "Searches builder brochures, amenity charters, and legal contracts to answer specific buyer questions.",
      input: "Property name + question ('What are the clubhouse maintenance rules?')",
      output: "Exact legal clause with brochure page citation"
    },
    {
      name: "Valuation Agent",
      role: "Price & Market Analysis",
      action: "Compares current asking prices against neighborhood benchmarks and square-foot trends.",
      input: "Property locality & quoted price",
      output: "Fair market valuation estimate"
    },
    {
      name: "Location Profiler",
      role: "Commute & Connectivity",
      action: "Calculates real commute times to nearby tech parks, metro stations, schools, and hospitals.",
      input: "Locality name or coordinates",
      output: "Commute times & upcoming metro/road projects"
    },
    {
      name: "Summarizer Agent",
      role: "Buyer Recommendation Brief",
      action: "Pulls findings from all agents together into an easy-to-read summary for the homebuyer.",
      input: "Search, Knowledge & Valuation notes",
      output: "Clean, decision-ready buyer report"
    },
    {
      name: "CRM Synchronizer",
      role: "Google Sheets CRM Sync",
      action: "Saves verified buyer preferences and shortlisted properties directly to Google Sheets in real time.",
      input: "User contact + shortlist details",
      output: "Automatically updated Google Sheet row"
    }
  ];

  return (
    <article className="relative bg-white rounded-3xl sm:rounded-[2.5rem] border border-neutral-200/90 shadow-xl overflow-hidden p-6 sm:p-10 mb-12">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-teal-700 text-white text-xs font-mono font-bold tracking-wide">
            CREWAI MULTI-AGENT ARCHITECTURE
          </span>
          <span className="text-xs font-mono font-medium text-neutral-400">
            Real Estate AI Assistant
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 font-semibold">
            6 Specialized Agents • 6+ Indian Cities
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="mt-6 space-y-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          Riya — Multi-Agent Real Estate Assistant
        </h3>
        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
          Coordinating 6 specialized CrewAI agents to make home searching effortless—answering detailed questions from builder PDF brochures, comparing fair market valuations, and updating customer leads in Google Sheets.
        </p>
      </div>

      {/* Visual Workflow: User -> Search -> Knowledge -> Property Data -> CRM -> Response */}
      <div className="mt-8 p-6 rounded-2xl bg-teal-50/50 border border-teal-200/60">
        <span className="text-xs font-mono uppercase tracking-wider font-bold text-teal-900 block mb-3">
          Multi-Agent Orchestration Flow
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
          <div className="p-3 bg-white rounded-xl border border-teal-200 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block mb-1">01</span>
            <p className="font-bold text-neutral-900">User Prompt</p>
            <p className="text-[10px] text-neutral-500 mt-0.5">Budget & Location</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-teal-200 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block mb-1">02</span>
            <p className="font-bold text-teal-700">Search Agent</p>
            <p className="text-[10px] text-neutral-500 mt-0.5">6+ Indian Cities</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-teal-200 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block mb-1">03</span>
            <p className="font-bold text-teal-700">Knowledge Agent</p>
            <p className="text-[10px] text-neutral-500 mt-0.5">PDF Brochure RAG</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-teal-200 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block mb-1">04</span>
            <p className="font-bold text-neutral-900">Property Data</p>
            <p className="text-[10px] text-neutral-500 mt-0.5">Valuation Checks</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-teal-200 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block mb-1">05</span>
            <p className="font-bold text-teal-700">CRM Agent</p>
            <p className="text-[10px] text-neutral-500 mt-0.5">Google Sheets API</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-teal-200 shadow-2xs">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block mb-1">06</span>
            <p className="font-bold text-neutral-900">Curated Output</p>
            <p className="text-[10px] text-neutral-500 mt-0.5">Executive Brief</p>
          </div>
        </div>
      </div>

      {/* 6 Specialized Agents Interactive Inspector */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-400">
            6 Specialized Autonomous Agents (Click to inspect contract)
          </h4>
          <span className="text-xs text-neutral-500 font-mono">CrewAI Swarm</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {agents.map((agent, idx) => {
            const isSelected = activeAgentIndex === idx;
            return (
              <button
                key={agent.name}
                onClick={() => setActiveAgentIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  isSelected 
                    ? 'bg-teal-50 border-teal-400 ring-2 ring-teal-500/20 shadow-sm' 
                    : 'bg-neutral-50/70 border-neutral-200/70 hover:bg-white hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-teal-700' : 'text-neutral-400'}`}>
                    AGENT 0{idx + 1}
                  </span>
                  <Bot className={`w-4 h-4 ${isSelected ? 'text-teal-600' : 'text-neutral-400'}`} />
                </div>
                <h5 className="text-sm font-bold text-neutral-900">{agent.name}</h5>
                <p className="text-xs font-medium text-neutral-500 mt-0.5">{agent.role}</p>
                <p className="text-[11px] text-neutral-600 mt-2 leading-relaxed">{agent.action}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Agent Contract Inspector */}
      <div className="mt-6 p-5 rounded-2xl bg-neutral-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <div>
          <span className="text-teal-400 font-mono font-semibold block mb-0.5">
            SELECTED AGENT: {agents[activeAgentIndex].name.toUpperCase()}
          </span>
          <p className="text-neutral-300">
            <strong>Input:</strong> {agents[activeAgentIndex].input}
          </p>
          <p className="text-neutral-300 mt-1">
            <strong>Output Contract:</strong> {agents[activeAgentIndex].output}
          </p>
        </div>
        <div className="shrink-0 px-3 py-1.5 rounded-full bg-white/10 text-neutral-300 font-mono text-[11px]">
          CrewAI Tool Choreography
        </div>
      </div>

    </article>
  );
};
