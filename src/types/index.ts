export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: 'Agentic AI' | 'Fintech & Inclusion' | 'EdTech & Systems' | 'AI Safety' | 'Voice AI' | 'Autonomous Systems';
  timeline: string;
  problem: string;
  productIdea: string;
  myRole: string;
  keyDecisions: string[];
  solution: string;
  technicalDepth: string[];
  verifiedMetrics: { label: string; value: string }[];
  accentColor: string;
  tags: string[];
  productJourney?: string[];
  architectureSummary: string;
  liveLink?: string;
  githubLink?: string;
}

export interface MetricItem {
  number: string;
  label: string;
  context: string;
  tag: string;
}

export interface LeadershipRole {
  role: string;
  period: string;
  tier: 'Design' | 'Coordination' | 'Leadership' | 'Ownership';
  description: string;
  achievements: string[];
}

export interface HackathonAchievement {
  name: string;
  edition: string;
  date: string;
  project: string;
  badge: 'FINALIST' | 'GLOBAL FINALIST' | 'BUILDATHON';
  summary: string;
  details: string[];
  accent: string;
}

export interface ProductStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  pmMindset: string;
  deliverables: string[];
  iconName: string;
}
