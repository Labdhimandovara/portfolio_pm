import React from 'react';
import { motion } from 'framer-motion';
import { Car, ShieldCheck, Radio, Activity, Eye, Zap, ArrowRight } from 'lucide-react';
import adasDetectionImg from '../assets/portfolio/adas_detection_real.jpg';
import iovSafetyImg from '../assets/portfolio/iov_safety-BfdBDnq0.png';

export const CaseStudyADAS: React.FC = () => {
  return (
    <article className="relative bg-white rounded-3xl sm:rounded-[2.5rem] border border-neutral-200/90 shadow-xl overflow-hidden p-6 sm:p-10 mb-12">
      
      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-mono font-bold tracking-wide">
            AUTOMOTIVE ML & EMBEDDED SYSTEMS
          </span>
          <span className="text-xs font-mono font-medium text-neutral-400">
            5G Internet of Vehicles (IoV)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-bold">
            98% Collision Detection Accuracy
          </span>
        </div>
      </div>

      {/* Main Title */}
      <div className="mt-6 space-y-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          5G ADAS & IoV Collision Prevention
        </h3>
        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
          A safety-critical Advanced Driver Assistance System (ADAS) leveraging real-time computer vision object detection and 5G telematics to predict multi-vehicle collision trajectories in dense Indian traffic conditions.
        </p>
      </div>

      {/* Real Visual Evidence: Dashcam Multi-Vehicle Bounding Box Detection */}
      <div className="mt-8 rounded-3xl border border-neutral-200 overflow-hidden bg-neutral-950 shadow-lg">
        <div className="px-6 py-3 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-neutral-300 font-mono">
            <Eye className="w-4 h-4 text-emerald-400" />
            <span className="font-bold">Real-Time Dashcam Vehicle Telemetry & Object Detection</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
            Live Bounding Box Inference
          </span>
        </div>

        <div className="relative aspect-[16/9] max-h-[480px] w-full overflow-hidden bg-black flex items-center justify-center">
          <img
            src={adasDetectionImg}
            alt="Real-time 5G ADAS Multi-vehicle detection in Indian traffic"
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 sm:right-auto max-w-md p-3.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs">
            <span className="font-bold text-emerald-400 block mb-1">Dense Traffic Multi-Class Object Tracking</span>
            <p className="text-[11px] text-neutral-300 leading-snug">
              Simultaneous real-time detection & trajectory modeling across varied vehicle classes (autorickshaws, heavy commercial trucks, passenger cars) under variable road lighting.
            </p>
          </div>
        </div>
      </div>

      {/* Architecture & Telematics Deep Dive */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: 5G IoV Architecture */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/90 flex flex-col justify-between space-y-4 text-left">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                01 • V2X TELEMATICS
              </span>
              <Radio className="w-4 h-4 text-emerald-600" />
            </div>
            <h4 className="text-xl font-bold text-neutral-900">Low-Latency 5G Network Pipeline</h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Designed a sub-10ms 5G V2X (Vehicle-to-Everything) transmission layer that broadcasts relative vehicle velocity, braking vectors, and distance deltas to roadside units (RSUs) and proximate connected vehicles.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-neutral-200 text-xs font-mono space-y-1 text-neutral-700">
            <div className="flex justify-between"><span>Protocol:</span><span className="font-bold">5G URLLC V2X</span></div>
            <div className="flex justify-between"><span>Latency Target:</span><span className="font-bold text-emerald-600">&lt; 10ms</span></div>
            <div className="flex justify-between"><span>Model Accuracy:</span><span className="font-bold text-emerald-600">98.2%</span></div>
          </div>
        </div>

        {/* Card 2: Trajectory Risk Estimation */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/90 flex flex-col justify-between space-y-4 text-left">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                02 • ACCIDENT RISK ENGINE
              </span>
              <Activity className="w-4 h-4 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-neutral-900">Predictive Trajectory Forecasting</h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Calculates Time-to-Collision (TTC) using Kalman filters and lightweight neural bounding-box displacement forecasting, generating progressive audio-visual alerts before physical driver reaction windows expire.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-neutral-200 text-xs font-mono space-y-1 text-neutral-700">
            <div className="flex justify-between"><span>Tracking Algorithm:</span><span className="font-bold">Kalman + DeepSORT</span></div>
            <div className="flex justify-between"><span>Alert Horizon:</span><span className="font-bold text-blue-600">2.5s Pre-Collision</span></div>
            <div className="flex justify-between"><span>Target Hardware:</span><span className="font-bold">Edge Embedded Compute</span></div>
          </div>
        </div>

      </div>

      {/* Safety Architecture Diagram */}
      <div className="mt-8 p-6 rounded-3xl bg-[#FBFBF9] border border-neutral-200 text-left">
        <h4 className="text-sm font-bold text-neutral-900 mb-3 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>IoV Safety Communication & Warning Topology</span>
        </h4>
        <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white p-2">
          <img
            src={iovSafetyImg}
            alt="IoV Safety Architecture Diagram"
            className="w-full h-auto max-h-[320px] object-contain mx-auto"
          />
        </div>
      </div>

    </article>
  );
};
