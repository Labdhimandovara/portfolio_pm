import { Project, MetricItem, LeadershipRole, HackathonAchievement, ProductStep } from '../types';

export const PERSONAL_INFO = {
  name: "Labdhi Mandovara",
  eyebrow: "PRODUCT MANAGEMENT × AI × ENGINEERING",
  headline: "Building AI Products from Idea to Impact.",
  tagline: "AI Engineer and Product Builder exploring how intelligent systems can become useful, intuitive and scalable products.",
  positioning: "I build and shape AI-powered products from problem definition to prototype, architecture and execution.",
  email: "mandowaralabdhi@gmail.com",
  linkedin: "https://www.linkedin.com/in/labdhi-mandovara-047561278/",
  github: "https://github.com/labdhimandovara",
  education: {
    degree: "B.Tech in Electronics & Telecommunication Engineering",
    institution: "Symbiosis Institute of Technology, Pune, Maharashtra",
    timeline: "2023 – 2027",
    cgpa: "8.4 / 10.0"
  },
  availability: "Available for APM & AI Product Roles (Summer / Full-Time)"
};

export const PRODUCT_FRAMEWORK_STEPS: ProductStep[] = [
  {
    number: "01",
    title: "Understand",
    tagline: "User problem, context, pain points and constraints",
    description: "Deep dive into user pain points, situational constraints, and market friction before writing a single prompt or line of code. Distinguish between perceived wants and fundamental cognitive burdens.",
    pmMindset: "Focusing on 'why this problem hurts' rather than jumping to LLM novelty.",
    deliverables: ["User Journey & Friction Mapping", "Edge-Case Analysis", "Feasibility & Latency Budgets"],
    iconName: "Search"
  },
  {
    number: "02",
    title: "Define",
    tagline: "Problem framing, requirements, priorities and product direction",
    description: "Frame requirements clearly with explicit boundary conditions, failure fallback paths, and success guardrails. Balance user agency against automation autonomy.",
    pmMindset: "Clear requirement scoping: defining what an AI system should NEVER do is as vital as what it can do.",
    deliverables: ["PRD & Boundary Conditions", "Agent Decision Policy Gates", "Deterministic vs Probabilistic Matrix"],
    iconName: "Compass"
  },
  {
    number: "03",
    title: "Build",
    tagline: "Prototype, AI workflows, technical architecture and iteration",
    description: "Bridge system design and user experience through rapid interactive prototyping, model benchmarking, MCP tool orchestration, and resilient multi-agent coordination.",
    pmMindset: "Engineering feasibility meets UX clarity: architecting systems with predictable fallbacks.",
    deliverables: ["High-Fidelity Interactive Prototypes", "MCP & API Integration Layer", "Streaming Latency Benchmarking"],
    iconName: "Code2"
  },
  {
    number: "04",
    title: "Validate",
    tagline: "Testing, feedback, metrics and refinement",
    description: "Rigorously test performance under real-world degradation, multi-turn stress tests, and automated validation suites to ensure consistency, trust, and user safety.",
    pmMindset: "Iterate on telemetry and automated unit suites rather than anecdotal vibes.",
    deliverables: ["Automated Test Matrix (660+ tests)", "Turn Latency (P50/P90/P95) Profiling", "User Comprehension & Trust Audits"],
    iconName: "CheckCircle2"
  }
];

export const IDEA_TO_PRODUCT_STAGES = [
  { step: "01", name: "IDEA", description: "Observing an unaddressed user frustration in workflow or commerce." },
  { step: "02", name: "PROBLEM", description: "Isolating core friction, cognitive overload, or manual operational drag." },
  { step: "03", name: "RESEARCH", description: "Benchmarking existing approaches, latency constraints, and model capabilities." },
  { step: "04", name: "PRODUCT DEFINITION", description: "Framing user requirements, guardrails, policy gates, and feature boundaries." },
  { step: "05", name: "PROTOTYPE", description: "Designing intuitive UI/UX with high visual fidelity and low cognitive load." },
  { step: "06", name: "AI ARCHITECTURE", description: "Selecting LLM, MCP tools, deterministic fallbacks, and multi-agent roles." },
  { step: "07", name: "BUILD", description: "Writing end-to-end full-stack services, APIs, databases, and responsive UI." },
  { step: "08", name: "TEST", description: "Running automated test suites, edge-case simulations, and multi-turn tests." },
  { step: "09", name: "DEMO", description: "Structuring a compelling narrative that proves user value and technical rigor." },
  { step: "10", name: "ITERATE", description: "Refining based on user interaction friction, feedback, and latency metrics." }
];

export const VERIFIED_METRICS: MetricItem[] = [
  {
    number: "10+",
    label: "Dhan Saarthi Modules",
    context: "Comprehensive financial inclusion ecosystem including Financial Twin, Kisan Saarthi, Sakhi & Market Pulse",
    tag: "Product Ecosystem"
  },
  {
    number: "50+",
    label: "UI/UX Screens",
    context: "Designed for multimodal financial literacy across diverse socio-economic user segments",
    tag: "Design & UX"
  },
  {
    number: "664",
    label: "Automated Tests",
    context: "Rigorous test suite across numerical solvers, practice modules, OCR, and fallback reasoning in MathEngineer",
    tag: "Reliability & Quality"
  },
  {
    number: "100",
    label: "Voice Benchmark Turns",
    context: "Automated conversational turns profiling P50, P90, P95 latency and failure rates between Agora & Pipecat",
    tag: "AI Telemetry"
  },
  {
    number: "6",
    label: "CrewAI Agents",
    context: "Autonomous agents orchestrated in Riya for property search, PDF retrieval, and CRM synchronization",
    tag: "Multi-Agent Systems"
  },
  {
    number: "6+",
    label: "Indian Cities Covered",
    context: "Normalized real estate datasets powering intelligent multi-agent location and valuation queries",
    tag: "Data Scope"
  },
  {
    number: "15,000+",
    label: "Speech Audio Samples",
    context: "Trained LSTM speech emotion recognition pipeline on RAVDESS and CREMA-D acoustic corpora",
    tag: "Speech ML"
  },
  {
    number: "3",
    label: "Raya Connected Merchants",
    context: "Cross-merchant catalog discovery via Model Context Protocol (MCP) in Razorpay Buildathon 2026",
    tag: "Agentic Commerce"
  },
  {
    number: "6",
    label: "Payment Policy Gates",
    context: "Cryptographic validation, price revalidation, and authorization safeguards in Raya's payment engine",
    tag: "Trust & Safety"
  },
  {
    number: "3",
    label: "Fraud Detection Models",
    context: "Integrated ML models for real-time call verification, transaction anomalies, and counterfeit currency",
    tag: "AI Safety"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "raya-commerce",
    title: "Raya by Razorpay",
    subtitle: "Making Commerce Agentic — MCP-Powered Autonomous Shopping & Checkout",
    badge: "RAZORPAY BUILDATHON 2026",
    category: "Agentic AI",
    timeline: "Sep 2026",
    problem: "Traditional ecommerce forces users to manually search dozens of storefronts, compare disparate specs, re-enter details, and navigate payment friction. As AI agents execute tasks on behalf of users, there is no standardized, secure protocol for agents to browse multiple merchant catalogs, assemble carts, and execute payments safely without exposing raw credentials.",
    productIdea: "An agentic commerce platform built atop the Model Context Protocol (MCP), enabling autonomous AI agents to discover products across 3 distinct merchant catalogs, compare items against user intent, orchestrate unified shopping carts, and invoke a 6-gate cryptographic payment policy engine backed by Razorpay.",
    myRole: "Product Architect & AI Engineer — defined the agentic commerce interaction protocol, designed the user-in-the-loop payment confirmation flow, and engineered the 6-gate transaction policy engine with PostgreSQL.",
    keyDecisions: [
      "User-in-the-Loop Safeguard: Agents can independently discover and populate carts, but final authorization mandates explicit cryptographic user confirmation.",
      "6-Gate Payment Engine: Built checks for intent alignment, price freshness, merchant signature, spend threshold, duplicate prevention, and balance validation.",
      "MCP-Native Standardization: Adopted Model Context Protocol so merchants expose structured tool interfaces rather than scraping brittle web pages.",
      "Real-time Price Revalidation: Eliminated stale-cache pricing attacks by enforcing an atomic price-check at the final checkout gate."
    ],
    solution: "Raya bridges natural language user requests to cross-merchant agentic transactions. The agent reads requirements (e.g., 'find the best ergonomic keyboard under ₹4,000 across partner stores'), discovers matching SKUs across 3 connected merchants, resolves product specifications, builds the cart, and initiates checkout governed by Razorpay's secure payment infrastructure.",
    technicalDepth: [
      "Model Context Protocol (MCP) server & client architecture",
      "Agent-to-Agent tool calling with structured JSON schemas",
      "PostgreSQL transactional logging with cryptographic authorization tokens",
      "6-gate policy validation engine preventing hallucinated order payloads"
    ],
    verifiedMetrics: [
      { label: "Connected Merchants", value: "3" },
      { label: "Payment Policy Gates", value: "6" },
      { label: "Merchants Ecosystem", value: "Razorpay 12M+ Merchant Ready" },
      { label: "Hackathon Track", value: "Razorpay Buildathon 2026" }
    ],
    accentColor: "#2D5BFF",
    tags: ["Agentic Commerce", "MCP", "Razorpay", "Fintech Policy", "PostgreSQL", "Autonomous Checkout"],
    productJourney: [
      "User Intent",
      "AI Agent Parsing",
      "Product Discovery (3 Merchants)",
      "Multi-Store Comparison",
      "Unified Cart Building",
      "Policy Gate Approval",
      "Secure Razorpay Checkout",
      "Order Confirmation"
    ],
    architectureSummary: "MCP Commerce Server orchestrating 3 merchant catalog tools, fed into an LLM intent extractor, verified by a 6-gate safety middleware, and finalized through Razorpay cryptographic payment sessions."
  },
  {
    id: "dhan-saarthi",
    title: "Dhan Saarthi",
    subtitle: "Making Financial Guidance Accessible — Multilingual Inclusive FinTech Ecosystem",
    badge: "NOMURA KAKUSHIN 10.0 FINALIST",
    category: "Fintech & Inclusion",
    timeline: "Jul 2026",
    problem: "Over 400 million citizens across tier-2 and rural regions lack access to trustworthy, personalized financial advice due to literacy barriers, jargon-heavy banking interfaces, and fear of exploitation. Traditional wealth apps cater only to high-net-worth English speakers with complex charts.",
    productIdea: "An AI-powered financial inclusion ecosystem spanning 10+ modular services and 50+ user screens, combining 24/7 multilingual voice-first interactions with personalized financial roadmaps tailored for farmers, women entrepreneurs, gig workers, and first-time savers.",
    myRole: "Lead Product Designer & System Architect — designed the end-to-end 50+ screen UX hierarchy, structured the consent-driven user onboarding flow, and architected the 3-layer fintech platform integrating AI intelligence, personalization engine, and offline-resilient companions.",
    keyDecisions: [
      "Voice-First Interface: Prioritized speech recognition in vernacular dialects over complex nested menu navigations.",
      "Modular Personas: Tailored specific sub-companions like 'Kisan Saarthi' (for agricultural credit/crop cycles) and 'Sakhi' (for micro-savings and SHGs).",
      "Consent-Driven Onboarding: Replaced ambiguous fine print with step-by-step transparent permission prompts for financial data access.",
      "Offline Companion Mode: Architected low-bandwidth and offline guidance caches for unstable rural network connectivity."
    ],
    solution: "Dhan Saarthi features a 3-layer fintech platform: an Experience Layer (50+ screens, voice/chat UX), an Intelligence Layer (Financial Twin, LLM financial advisor with vernacular synthesis), and an Infrastructure Layer (consent management, bank API connectors, offline sync). Recognized as a Finalist from 1,000+ participating teams in Nomura KakushIN 10.0.",
    technicalDepth: [
      "3-layer fintech architecture: Experience, Intelligence & Infrastructure",
      "Consent-driven financial data architecture with privacy safeguards",
      "Multilingual voice interface integration supporting vernacular dialects",
      "Deterministic budgeting logic paired with generative contextual guidance"
    ],
    verifiedMetrics: [
      { label: "Core Modules", value: "10+" },
      { label: "UI/UX Screens", value: "50+" },
      { label: "Hackathon Scale", value: "Finalist / 1,000+ Teams" },
      { label: "Availability", value: "24/7 Voice & Chat" }
    ],
    accentColor: "#E07A5F",
    tags: ["Financial Inclusion", "50+ UI Screens", "10+ Modules", "Nomura KakushIN", "Voice-First", "3-Layer Architecture"],
    productJourney: [
      "User Language Preference",
      "Consent-Driven Onboarding",
      "Financial Twin Profiling",
      "Contextual Need Identification",
      "Voice/Chat Guidance",
      "Personalized Action Plan",
      "Continuous Companion Monitoring"
    ],
    architectureSummary: "Three-tier architecture uniting an accessible 50+ screen client UI, an AI intelligence layer powering the Financial Twin and Kisan Saarthi modules, and an infrastructure backbone supporting secure consent & offline sync."
  },
  {
    id: "math-engineer",
    title: "MathEngineer",
    subtitle: "Turning Step-by-Step Learning into a Product — Deterministic Tutoring Platform",
    badge: "EDTECH INNOVATION",
    category: "EdTech & Systems",
    timeline: "May 2026",
    problem: "Existing math solvers either output a cold final numeric answer with zero rationale (calculators) or suffer from severe mathematical hallucinations when given differential equations (pure LLMs). Students in engineering need guaranteed numerical accuracy combined with pedagogical step-by-step reasoning.",
    productIdea: "A deterministic-first engineering mathematics learning platform with 7 structured learning modules, 20 practice problem banks, 3 verified numerical solvers, OCR handwriting capture, RAG curriculum retrieval, and a 4-tier tutoring fallback pipeline backed by 664 automated tests.",
    myRole: "Full-Stack Product Builder — conceptualized the deterministic-first tutoring model, authored 664 unit and integration tests, designed the hint-escalation pedagogic loop, and integrated OCR and RAG for syllabus-aligned hints.",
    keyDecisions: [
      "Deterministic-First over LLM Guesswork: Equations are computed using verified numerical algorithms (Runge-Kutta, Newton-Raphson, Euler) to guarantee mathematical truth.",
      "4-Tier Tutoring Architecture: Exact Algorithm -> Curriculum RAG -> Gemini Explanation -> Socratic Hint Fallback.",
      "Graduated Hint Escalation: Rather than spoiling the full solution immediately, students receive 3 levels of hints before revealing step-by-step derivations.",
      "Automated Quality Assurance: Implemented 664 automated unit tests covering mathematical boundaries, floating point tolerances, and OCR edge cases."
    ],
    solution: "MathEngineer turns complex numerical methods into an interactive masterclass. Students can upload handwritten equation notes via OCR or choose from 20 practice problems across 7 modules. The system solves deterministically, indexes relevant engineering textbook notes via RAG, and serves clear explanations.",
    technicalDepth: [
      "3 verified numerical computation methods with floating-point tolerance handling",
      "664 automated tests ensuring zero regression across edge conditions",
      "RAG pipeline indexing engineering mathematics textbooks and lecture notes",
      "Multimodal OCR pipeline for handwritten mathematical equation parsing",
      "Gemini fallback orchestration for conversational pedagogy"
    ],
    verifiedMetrics: [
      { label: "Automated Tests", value: "664" },
      { label: "Numerical Methods", value: "3" },
      { label: "Learning Modules", value: "7" },
      { label: "Practice Problems", value: "20" }
    ],
    accentColor: "#3D5A50",
    tags: ["Deterministic Math", "664 Tests", "RAG & OCR", "Pedagogical UX", "Gemini Fallback", "EdTech"],
    productJourney: [
      "Student Question / OCR Note",
      "Problem Assessment & Classification",
      "Deterministic Solver Execution",
      "RAG Knowledge Retrieval",
      "Gemini Explanatory Layer",
      "Step-by-Step Pedagogic Reveal"
    ],
    architectureSummary: "Deterministic numerical engine for zero-hallucination computation, paired with a RAG vector store for textbook definitions and a Gemini conversational layer for intuitive explanations."
  },
  {
    id: "citizen-fraud-shield",
    title: "Citizen Fraud Shield",
    subtitle: "Designing for Digital Safety — 3-Scenario AI Scam Defense Platform",
    badge: "AI SAFETY & TRUST",
    category: "AI Safety",
    timeline: "Apr 2026",
    problem: "Citizens are bombarded with deepfake voice extortion, phishing SMS transactions, and counterfeit paper currency. Existing cybersecurity tools are fragmented, overly technical, and inaccessible to ordinary non-technical users who need immediate verification during stressful moments.",
    productIdea: "A unified, citizen-centric fraud prevention product combining 3 specialized ML detection models, an intuitive Streamlit verification dashboard, a FastAPI microservice backend, and an empathetic Gemini safety assistant to verify suspicious calls, transaction SMS, and currency notes.",
    myRole: "Product Lead & ML Engineer — identified the 3 most frequent fraud vectors impacting everyday citizens, designed the high-urgency user verification workflow, and integrated 3 ML detection models with FastAPI.",
    keyDecisions: [
      "Three-Pillar Fraud Scenarios: Consolidated call audio verification, transaction text anomalies, and visual currency inspection into one single hub.",
      "Explainable Confidence Scores: Replaced raw probabilities with plain-English safety indicators ('Safe', 'Suspicious', 'Critical Scam Alert') with actionable steps.",
      "Emergency Action Checklist: When a scam is identified, immediately provide one-click emergency steps (e.g., freeze bank card, national cyber helpline 1930).",
      "Low Latency Endpoint Design: Optimized FastAPI inference pipelines so citizens receive feedback in seconds while on a suspicious call."
    ],
    solution: "Citizen Fraud Shield makes digital defense straightforward and calming. Users upload call audio, paste transaction SMS headers, or inspect bank note imagery. The 3 ML models process the data in parallel, returning clear risk verdicts and immediate safety guidance.",
    technicalDepth: [
      "FastAPI asynchronous backend with multipart payload processing",
      "3 specialized ML models for audio anomaly, NLP phishing, and CV feature verification",
      "Gemini chatbot integration for interactive crisis counseling and reporting guidance",
      "Streamlit high-visibility dashboard for rapid testing and public demo"
    ],
    verifiedMetrics: [
      { label: "Detection Models", value: "3" },
      { label: "Primary Scenarios", value: "3 (Calls, SMS, Currency)" },
      { label: "Backend Framework", value: "FastAPI" },
      { label: "Interactive Assistant", value: "Gemini Chatbot" }
    ],
    accentColor: "#8338EC",
    tags: ["Fraud Prevention", "3 ML Models", "FastAPI", "Gemini Chatbot", "Citizen UX", "Explainable AI"],
    productJourney: [
      "Citizen Uploads Suspicious Input",
      "Format Routing (Audio / Text / Image)",
      "ML Model Feature Inspection",
      "Confidence & Threat Scoring",
      "Plain-English Risk Verdict",
      "Emergency Action & Helpline Connect"
    ],
    architectureSummary: "FastAPI gateway routing requests across 3 targeted ML pipelines for audio, text, and computer vision, augmented with Gemini for contextual advice."
  },
  {
    id: "riya-real-estate",
    title: "Riya — Multi-Agent Real Estate Assistant",
    subtitle: "Orchestrating 6 CrewAI Agents for Property Discovery & CRM Workflows",
    badge: "MULTI-AGENT SYSTEMS",
    category: "Agentic AI",
    timeline: "Mar 2026",
    problem: "Real estate buyers struggle through fragmented broker portals with stale listings, dense legal PDF prospectuses, and disjointed inquiry follow-ups. Real estate agencies struggle to qualify leads and answer complex localized questions.",
    productIdea: "A multi-agent real estate assistant orchestrated via CrewAI, deploying 6 specialized autonomous agents that coordinate property search, PDF prospectus analysis, location intelligence, and automated Google Sheets CRM synchronization across 6+ Indian cities.",
    myRole: "AI Product Builder — designed the agent collaboration topology, defined role contracts and tool boundaries for each of the 6 agents, and implemented the CRM data pipeline.",
    keyDecisions: [
      "Specialized Agent Roles: Divided responsibilities between Search Agent, PDF Knowledge Agent, Valuation Agent, Location Profiler, Summarizer, and CRM Synchronizer.",
      "PDF Knowledge Base Retrieval: Allowed buyers to ask deep questions directly into builder brochures (e.g., 'What are the clubhouse maintenance terms?').",
      "Seamless CRM Pipeline: Directly updated real estate agency sales pipelines in Google Sheets without manual human data entry.",
      "Multi-City Normalization: Standardized listing attributes across 6+ major Indian metropolises (Mumbai, Pune, Bengaluru, Delhi NCR, Hyderabad, Chennai)."
    ],
    solution: "Riya transforms property search from manual browsing to intelligent dialogue. When a user queries property preferences, the Search Agent queries normalized city databases, the Knowledge Agent extracts specifics from brochures, and the CRM Agent creates actionable lead records.",
    technicalDepth: [
      "CrewAI 6-agent collaborative workflow choreography",
      "PDF document vector embeddings and chunk retrieval",
      "Google Sheets API live synchronization for lead management",
      "Multi-city Indian real estate database integration (6+ cities)"
    ],
    verifiedMetrics: [
      { label: "CrewAI Agents", value: "6 Orchestrated Agents" },
      { label: "Geographic Scope", value: "6+ Indian Cities" },
      { label: "Knowledge Source", value: "PDF Legal/Brochure RAG" },
      { label: "CRM System", value: "Google Sheets Live Sync" }
    ],
    accentColor: "#028090",
    tags: ["CrewAI", "6 AI Agents", "RAG & PDF", "Google Sheets CRM", "Indian Real Estate", "Multi-Agent"],
    productJourney: [
      "User Search Request",
      "Search Agent Discovers Matches",
      "Knowledge Agent Parses Brochure PDFs",
      "Valuation & Location Check",
      "CRM Agent Logs Lead & Summary",
      "Curated Response Delivered to User"
    ],
    architectureSummary: "Hierarchical CrewAI swarm with specialized agents accessing property databases, vector stores, and external Google Sheets CRM APIs."
  },
  {
    id: "voice-ai-benchmark",
    title: "Voice as a Product Interface & Benchmarking",
    subtitle: "Agora vs Pipecat Real-Time Latency Profiling & Multilingual VoiceBot",
    badge: "VOICE AI & SYSTEMS",
    category: "Voice AI",
    timeline: "Jul 2026 – Aug 2026",
    problem: "Voice interfaces fail user trust when response latency exceeds natural human conversational cadence (~500ms) or when audio pipelines choke on barge-in interruptions. Choosing between Agora and Pipecat requires rigorous quantitative benchmarking across streaming STT, LLM inference, and TTS pipelines.",
    productIdea: "A dedicated voice product investigation featuring: (1) An automated 100-turn latency benchmark between Agora and Pipecat evaluating P50, P90, P95, mean, and max latency; and (2) A multilingual Voice Assistant supporting Hindi, Telugu, and mixed-language modes.",
    myRole: "AI Prompt Engineer Intern at Edysor AI & Independent Voice Researcher — built and executed the 100-turn benchmarking suite, analyzed pipeline trade-offs, and implemented the 3-language VoiceBot.",
    keyDecisions: [
      "Quantitative Latency Profiling: Measured turn-by-turn latency across STT, LLM generation, and TTS synthesis rather than relying on subjective impressions.",
      "Evaluation of Barge-In & Interruption: Compared how Agora's WebRTC channels handled user interruption vs Pipecat's streaming pipeline.",
      "Multilingual Vernacular Modes: Engineered prompt structures and TTS voice mappings for Hindi, Telugu, and mixed code-switching speech.",
      "Audio Cleanup & Memory Management: Integrated gTTS, Web Speech API, and Flask with conversation turn logging and audio cleanup."
    ],
    solution: "Provides an actionable engineering guide for choosing real-time voice architectures. The benchmark provides concrete P50, P90, and P95 latency profiles for streaming pipelines (STT -> LLM -> TTS), while the VoiceBot proves vernacular voice interaction viability.",
    technicalDepth: [
      "Agora WebRTC vs Pipecat streaming architecture evaluation",
      "Automated 100-turn latency harness tracking P50, P90, P95, and failure rates",
      "Integration of Deepgram (STT), Groq (LLM inference), and Cartesia (TTS)",
      "Flask backend with Web Speech API and audio cleanup routines"
    ],
    verifiedMetrics: [
      { label: "Benchmark Turns", value: "100 Automated Turns" },
      { label: "Architectures Compared", value: "Agora vs Pipecat" },
      { label: "Language Modes", value: "3 (Hindi, Telugu, Mixed)" },
      { label: "Latency Metrics", value: "P50, P90, P95, Mean, Max" }
    ],
    accentColor: "#F77F00",
    tags: ["Voice AI", "100-Turn Benchmark", "Agora vs Pipecat", "STT-LLM-TTS", "Multilingual", "Edysor AI"],
    productJourney: [
      "Microphone Audio Stream",
      "Streaming STT (Speech-to-Text)",
      "Low-Latency LLM Generation",
      "Streaming TTS (Text-to-Speech)",
      "Barge-in / Interruption Handling",
      "Audio Playback"
    ],
    architectureSummary: "Streaming voice pipeline comparing Agora and Pipecat backends across Deepgram STT, Groq LPU inference, and Cartesia TTS with automated latency telemetry."
  },
  {
    id: "adas-and-speech-emotion",
    title: "5G ADAS & Speech Emotion Systems",
    subtitle: "Real-Time Telematics Collision Prediction & Acoustic Emotion Classification",
    badge: "AUTONOMOUS & ACOUSTIC ML",
    category: "Autonomous Systems",
    timeline: "2025 – 2026",
    problem: "Connected vehicular safety demands ultra-reliable real-time collision prediction under stringent latency budgets, while vocal acoustic analysis requires robust spectral feature modeling to decode human emotional states from voice signals.",
    productIdea: "Two foundational engineering implementations: (1) A 5G-based Internet of Vehicles (IoV) platform for real-time trajectory prediction and accident assessment achieving 98% accuracy; and (2) An LSTM speech emotion recognition pipeline trained on 15,000+ speech samples.",
    myRole: "ML Systems Engineer — designed the IoV trajectory prediction pipeline and engineered the MFCC & spectral contrast feature extraction pipeline for 5-class vocal emotion classification.",
    keyDecisions: [
      "High-Accuracy Collision Risk: Engineered trajectory algorithms achieving 98% collision risk accuracy.",
      "Robust Spectral Feature Engineering: Combined MFCCs and spectral contrast features to prevent acoustic overfitting across different recording conditions.",
      "Dual Acoustic Corpora: Trained on both RAVDESS and CREMA-D datasets spanning 15,000+ audio clips for generalizable 5-class emotion classification."
    ],
    solution: "Demonstrates deep foundational engineering in signal processing, telematics, and deep learning for safety-critical real-time environments.",
    technicalDepth: [
      "5G Internet of Vehicles (IoV) real-time telematics integration",
      "Trajectory prediction algorithms achieving 98% collision assessment accuracy",
      "LSTM recurrent neural network trained on RAVDESS & CREMA-D datasets",
      "15,000+ speech sample processing with MFCC & spectral contrast feature extraction"
    ],
    verifiedMetrics: [
      { label: "Collision Risk Accuracy", value: "98%" },
      { label: "Speech Audio Samples", value: "15,000+" },
      { label: "Acoustic Corpora", value: "RAVDESS & CREMA-D" },
      { label: "Emotion Classes", value: "5-Class Classification" }
    ],
    accentColor: "#10B981",
    tags: ["5G IoV", "98% Accuracy", "15,000+ Audio Samples", "LSTM", "MFCC Features", "RAVDESS"],
    productJourney: [
      "Raw Telematics / Audio Stream",
      "Signal Preprocessing & Normalization",
      "Feature Extraction (MFCC / Trajectory)",
      "Deep Learning Inference (LSTM / Risk Model)",
      "Real-Time Alert / Classification Output"
    ],
    architectureSummary: "Edge telematics telemetry pipeline combined with an LSTM recurrent neural network processing multi-feature acoustic vectors for high-precision safety classification."
  }
];

export const PRODUCT_TOOLKIT = {
  product: [
    { name: "Product Strategy", level: "Core", description: "Mapping product vision to user needs, unit economics, and roadmap prioritization." },
    { name: "Problem Framing", level: "Core", description: "Deconstructing ambiguous briefs into crisp problem statements and boundary conditions." },
    { name: "User-Centric Thinking", level: "Core", description: "Designing workflows around cognitive load, accessibility, and real human friction." },
    { name: "Product Prototyping", level: "Core", description: "Building high-fidelity interactive web and mobile prototypes for rapid feedback." },
    { name: "Feature Definition & PRDs", level: "Core", description: "Authoring PRDs with functional requirements, non-functional latency budgets, and safety gates." },
    { name: "Product Storytelling", level: "Core", description: "Communicating the 'why now' and technical feasibility compellingly to stakeholders." },
    { name: "Rapid Experimentation", level: "Core", description: "Setting up test harnesses, A/B logic, and deterministic fallback benchmarks." }
  ],
  ai: [
    { name: "LLMs & Prompt Engineering", level: "Deep", description: "System prompting, chain-of-thought, few-shot conditioning, and structured JSON output." },
    { name: "AI Agents & Autonomous Loops", level: "Deep", description: "Designing agentic feedback loops, reflection loops, and task decomposition." },
    { name: "Multi-Agent Systems", level: "Deep", description: "CrewAI agent choreography with role segregation, delegation, and state synchronization." },
    { name: "RAG (Retrieval-Augmented Gen)", level: "Deep", description: "Chunking, vector embeddings, semantic search, and syllabus/brochure knowledge retrieval." },
    { name: "Model Context Protocol (MCP)", level: "Deep", description: "Building and consuming MCP tool servers for secure agentic system interoperability." },
    { name: "Function Calling & Tools", level: "Deep", description: "Designing clean API schemas for deterministic tool execution by AI models." },
    { name: "Voice AI & Low Latency", level: "Deep", description: "Streaming STT, LLM inference, and TTS pipelines (Agora, Pipecat, Deepgram, Groq, Cartesia)." }
  ],
  technical: [
    { name: "Python", level: "Proficient", description: "FastAPI, Flask, PyTorch, LangChain, CrewAI, automated testing." },
    { name: "TypeScript & JavaScript", level: "Proficient", description: "React, Vite, Node.js, modern ES6+, typed interfaces." },
    { name: "React & Modern UI", level: "Proficient", description: "Component systems, Tailwind CSS, Framer Motion, accessible state." },
    { name: "FastAPI", level: "Proficient", description: "High-performance async REST APIs, pydantic validation, CORS, multipart payloads." },
    { name: "PostgreSQL & Databases", level: "Proficient", description: "Relational schema design, transactional integrity, cryptographic token tracking." },
    { name: "Flutter & Mobile", level: "Familiar", description: "Cross-platform mobile UI development for inclusive fintech applications." },
    { name: "Docker & Containerization", level: "Familiar", description: "Containerized deployment of microservices, model servers, and web backends." }
  ],
  collaboration: [
    { name: "Cross-Functional Coordination", level: "Proven", description: "Bridging communication between designers, software engineers, and faculty heads." },
    { name: "Leadership & Team Mentorship", level: "Proven", description: "Heading editorial and creative departments with end-to-end publishing ownership." },
    { name: "Technical Documentation", level: "Proven", description: "Writing comprehensive READMEs, architectural blueprints, PRDs, and API specs." },
    { name: "Presentations & Demos", level: "Proven", description: "Pitching complex technical solutions clearly under high-pressure hackathon jury rounds." },
    { name: "Event Management", level: "Proven", description: "Planning and executing large-scale cultural events across 5+ productions." }
  ]
};

export const LEADERSHIP_EXPERIENCE: LeadershipRole[] = [
  {
    role: "Department Magazine Head",
    period: "Aug 2025 – Jul 2026",
    tier: "Ownership",
    description: "Led the official department magazine team, taking 360° ownership over content curation, editorial voice, layout design, and final publication.",
    achievements: [
      "Directed cross-functional coordination between writers, graphic designers, and faculty advisors to deliver the annual publication.",
      "Established publication deadlines, review cadences, and content quality checklists ensuring zero factual or typographical errors.",
      "Supervised print and digital distribution strategies to maximize department readership."
    ]
  },
  {
    role: "Design Head",
    period: "Jul 2025 – Aug 2025",
    tier: "Leadership",
    description: "Directed magazine design, managing visual hierarchy, layouts, typography, and creative direction across the publication.",
    achievements: [
      "Created design systems and templates in Figma to accelerate article layout turnaround.",
      "Coordinated closely with the editorial team to maintain visual consistency and streamline the design review workflow.",
      "Mentored junior graphic designers on typesetting and editorial composition."
    ]
  },
  {
    role: "Cultural Head",
    period: "Aug 2021 – Mar 2022",
    tier: "Coordination",
    description: "Led the planning and execution of 5+ large-scale cultural events, coordinating student participants, faculty committees, and external vendors.",
    achievements: [
      "Managed logistics, stage scheduling, and emergency contingencies for 5+ major institute-level productions.",
      "Coordinated multi-team rehearsals, budget requisitions, and vendor deliverables on strict timelines."
    ]
  },
  {
    role: "Principal Representative",
    period: "Aug 2020 – Mar 2021",
    tier: "Design",
    description: "Represented the student body before senior school administration, actively addressing student welfare concerns and institutional dialogue.",
    achievements: [
      "Coordinated transparent two-way communication across 20+ faculty members and the broader student body.",
      "Facilitated administrative resolutions for academic schedules and student initiatives during remote schooling transitions."
    ]
  }
];

export const HACKATHONS: HackathonAchievement[] = [
  {
    name: "Razorpay Buildathon 2026",
    edition: "Agentic Commerce Challenge",
    date: "Sep 2026",
    project: "Raya — Agentic Commerce Platform",
    badge: "BUILDATHON",
    summary: "Built Raya, an MCP-powered agentic commerce platform connecting 3 merchants for autonomous product discovery, comparison, carting, and secure Razorpay payment execution.",
    details: [
      "Engineered an Agent-to-Agent commerce layer ready for Razorpay's 12M+ merchant ecosystem.",
      "Implemented a 6-gate cryptographic payment policy engine with transaction safeguards.",
      "Pioneered user-in-the-loop authorization to maintain user control in agentic transactions."
    ],
    accent: "#2D5BFF"
  },
  {
    name: "Nomura KakushIN 10.0",
    edition: "Information Technology Division Coding Contest",
    date: "Jul 2026",
    project: "Dhan Saarthi (Cortex)",
    badge: "FINALIST",
    summary: "Recognized as a Finalist from 1,000+ participating teams through rigorous multiple evaluation rounds at Nomura KakushIN 10.0.",
    details: [
      "Pitched Dhan Saarthi: an AI-powered financial life companion spanning 10+ modules and 50+ screens.",
      "Architected a 3-layer fintech platform integrating AI intelligence, personalization engine, and offline sync.",
      "Praised by jury for vernacular voice-first accessibility and deep understanding of user financial inclusion."
    ],
    accent: "#E07A5F"
  },
  {
    name: "LaserHacks 2025",
    edition: "Global Hackathon by SCRS & Lasell University, USA",
    date: "Nov 2025",
    project: "Emodio — Vocal Biomarker Teletherapy",
    badge: "GLOBAL FINALIST",
    summary: "Advanced to the Day-2 Finals after a highly competitive global evaluation among international developer teams.",
    details: [
      "Built Emodio: an AI-powered vocal biomarker teletherapy solution with an end-to-end ML audio pipeline.",
      "Extracted acoustic vocal markers to provide therapists with longitudinal patient sentiment trajectories.",
      "Recognized for innovative application of vocal telemetry to mental health support."
    ],
    accent: "#8338EC"
  }
];
