
export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  metrics: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  logo?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
