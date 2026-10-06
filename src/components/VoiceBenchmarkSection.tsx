import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  Activity, 
  Layers, 
  Zap, 
  Volume2, 
  Radio, 
  Globe2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const VoiceBenchmarkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'benchmark' | 'voicebot'>('pipeline');

  return (
    <article className="relative bg-white rounded-3xl sm:rounded-[2.5rem] border border-neutral-200/90 shadow-xl overflow-hidden p-6 sm:p-10 mb-12">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-mono font-bold tracking-wide">
            VOICE AI & LATENCY TELEMETRY
          </span>
          <span className="text-xs font-mono font-medium text-neutral-400">
            Edysor AI & Real-Time Research
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-orange-800 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200 font-semibold">
            100 Automated Conversation Turns Evaluated
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="mt-6 space-y-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          Voice as a Product Interface
        </h3>
        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
          Quantitative benchmarking of real-time voice architectures (Agora vs Pipecat) across streaming STT, LLM inference, and TTS synthesis — paired with a 3-language multilingual voice assistant.
        </p>
      </div>

      {/* Section Nav Pill */}
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('pipeline')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            activeTab === 'pipeline'
              ? 'bg-neutral-950 text-white shadow-xs'
              : 'bg-neutral-100 text-neutral-600 hover:text-neutral-950'
          }`}
        >
          STT → LLM → TTS Streaming Pipeline
        </button>
        <button
          onClick={() => setActiveTab('benchmark')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            activeTab === 'benchmark'
              ? 'bg-neutral-950 text-white shadow-xs'
              : 'bg-neutral-100 text-neutral-600 hover:text-neutral-950'
          }`}
        >
          Agora vs Pipecat Comparison
        </button>
        <button
          onClick={() => setActiveTab('voicebot')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            activeTab === 'voicebot'
              ? 'bg-neutral-950 text-white shadow-xs'
              : 'bg-neutral-100 text-neutral-600 hover:text-neutral-950'
          }`}
        >
          Multilingual VoiceBot (Hindi / Telugu / Mixed)
        </button>
      </div>

      {/* Dynamic Content Views */}
      <div className="mt-6">
        {activeTab === 'pipeline' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white space-y-6">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-orange-400 font-bold uppercase">
                Real-Time Voice Streaming Architecture
              </span>
              <span className="text-neutral-400 font-mono">Sub-500ms Human Cadence Target</span>
            </div>

            {/* Pipeline Stage Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold">STAGE 01</span>
                  <Mic className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="text-sm font-bold text-white">Streaming STT (Speech-to-Text)</h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Deepgram Nova streaming WebSocket connection. Emits incremental transcript tokens before utterance completes.
                </p>
                <div className="pt-2 text-[11px] font-mono text-blue-300">
                  Focus: Interim transcripts & VAD cutoffs
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold">STAGE 02</span>
                  <Zap className="w-4 h-4 text-purple-400" />
                </div>
                <h4 className="text-sm font-bold text-white">Streaming LLM Inference</h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Groq ultra-fast LPU inference / low-latency completions. Streams first response tokens to TTS immediately.
                </p>
                <div className="pt-2 text-[11px] font-mono text-purple-300">
                  Focus: Time-to-First-Token (TTFT)
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold">STAGE 03</span>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="text-sm font-bold text-white">Streaming TTS & Playback</h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Cartesia Sonic streaming synthesis. Audio frames pushed into WebRTC audio track with instant barge-in cancellation.
                </p>
                <div className="pt-2 text-[11px] font-mono text-emerald-300">
                  Focus: First audio chunk playback & interruption
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'benchmark' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-base font-bold text-neutral-900">
                  Architectural Benchmark: Agora vs Pipecat
                </h4>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Automated 100-turn latency harness tracking P50, P90, P95, mean, max latency, and failure rates.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono font-semibold self-start">
                100 Automated Turns
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Agora Profile */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-bold text-neutral-900">Agora RTC Architecture</h5>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">WebRTC Native</span>
                </div>
                <ul className="space-y-2 text-xs text-neutral-600">
                  <li><strong>Transport:</strong> Proprietary SD-RTN network optimized for global telecommunications.</li>
                  <li><strong>Barge-in:</strong> Client-side audio channel mute & server-side interrupt signaling.</li>
                  <li><strong>Trade-off:</strong> Highly resilient network packet loss recovery; requires SDK bridging for Python server agents.</li>
                </ul>
              </div>

              {/* Pipecat Profile */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-bold text-neutral-900">Pipecat Pipeline Framework</h5>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-semibold">Open Framework</span>
                </div>
                <ul className="space-y-2 text-xs text-neutral-600">
                  <li><strong>Transport:</strong> Asynchronous Python streaming pipeline integrating WebRTC (Daily/LiveKit).</li>
                  <li><strong>Barge-in:</strong> Direct pipeline frame cancellation upon speech detection event.</li>
                  <li><strong>Trade-off:</strong> Extremely modular component pluggability; sensitive to local event-loop scheduling.</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-100 text-xs text-neutral-700 font-mono">
              Metrics Monitored: STT Turnaround • Time-to-First-Token (TTFT) • TTS Chunk Latency • End-to-End P50/P90/P95 • Failure Rate %
            </div>
          </div>
        )}

        {activeTab === 'voicebot' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-neutral-900">
                  Multilingual Voice Assistant
                </h4>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Supporting 3 language modes: Hindi, Telugu & mixed-language conversational interactions.
                </p>
              </div>
              <Globe2 className="w-5 h-5 text-orange-600" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white border border-neutral-200">
                <span className="text-xs font-mono font-bold text-orange-600 block mb-1">MODE 01</span>
                <h5 className="text-sm font-bold text-neutral-900">Hindi Voice Mode</h5>
                <p className="text-xs text-neutral-500 mt-1">Full vernacular Hindi speech recognition with localized phrasing.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-neutral-200">
                <span className="text-xs font-mono font-bold text-orange-600 block mb-1">MODE 02</span>
                <h5 className="text-sm font-bold text-neutral-900">Telugu Voice Mode</h5>
                <p className="text-xs text-neutral-500 mt-1">Vernacular Telugu acoustic parsing and natural cadence synthesis.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-neutral-200">
                <span className="text-xs font-mono font-bold text-orange-600 block mb-1">MODE 03</span>
                <h5 className="text-sm font-bold text-neutral-900">Mixed Code-Switching</h5>
                <p className="text-xs text-neutral-500 mt-1">Seamless bilingual Hinglish/Telugish real-time dialogue understanding.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-neutral-200/80 text-xs text-neutral-600">
              Integrated with Web Speech API, Flask backend, and gTTS with automated conversation logging and audio cleanup routines.
            </div>
          </div>
        )}
      </div>

      {/* Verified Metrics Footer */}
      <div className="mt-8 pt-6 border-t border-neutral-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div>
          <span className="text-xl sm:text-2xl font-black font-mono text-neutral-950">100</span>
          <p className="text-xs text-neutral-600 mt-0.5 font-medium">Automated Turns</p>
        </div>
        <div>
          <span className="text-xl sm:text-2xl font-black font-mono text-neutral-950">2</span>
          <p className="text-xs text-neutral-600 mt-0.5 font-medium">Architectures Benchmarked</p>
        </div>
        <div>
          <span className="text-xl sm:text-2xl font-black font-mono text-neutral-950">3</span>
          <p className="text-xs text-neutral-600 mt-0.5 font-medium">Language Modes</p>
        </div>
        <div>
          <span className="text-xl sm:text-2xl font-black font-mono text-neutral-950">Sub-500ms</span>
          <p className="text-xs text-neutral-600 mt-0.5 font-medium">Latency Optimization Focus</p>
        </div>
      </div>

    </article>
  );
};
