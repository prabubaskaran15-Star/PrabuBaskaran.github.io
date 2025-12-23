
import React from 'react';
import { 
  Bot, 
  Cloud, 
  Database, 
  Layers, 
  Settings, 
  Cpu, 
  Network, 
  LineChart,
  ShieldCheck,
  Zap,
  Globe,
  Award,
  Users
} from 'lucide-react';
import { SkillCategory, Experience, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Prabu Baskaran",
  title: "RPA & HyperAutomation Program Manager",
  tagline: "Driving Enterprise Digital Transformation",
  valueProp: "12+ years of leadership in enterprise automation across Telecom, BFSI, Retail, and Oil & Gas. Specialist in program governance and Agile delivery.",
  email: "prabubaskaran15@gmail.com",
  linkedin: "linkedin.com/in/prabu-baskaran",
  github: "github.com/PrabuBaskaran",
  location: "Chennai, India",
  phone: "+91-7358311515",
  about: `RPA & HyperAutomation Program Manager with 12+ years of experience leading enterprise automation initiatives across global sectors. Proven track record in program governance, Agile delivery leadership, automation pipeline strategy, and stakeholder management. I specialize in building CoE frameworks and driving digital transformation through scalable AI-driven workflows.\n\nMy global exposure includes project delivery and leadership across Poland, Romania, and Portugal, ensuring high-impact automation outcomes and optimized ROI for complex business processes.`
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Automation Platforms",
    skills: ["Automation Anywhere A360", "UiPath", "IDP / OCR", "NICE RPA"],
    icon: "Bot"
  },
  {
    title: "Leadership & Governance",
    skills: ["Program Governance", "Agile Leadership (Scrum)", "Squad Performance", "CoE Enablement"],
    icon: "Users"
  },
  {
    title: "Strategy & Pre-sales",
    skills: ["Pipeline Strategy", "SOW / RFP Responses", "ROI Evaluation", "Stakeholder Management"],
    icon: "LineChart"
  },
  {
    title: "Technical Foundations",
    skills: ["ASP.NET & SQL Server", "Generative AI for PMs", "PDD / SDD Creation", "Business Requirements"],
    icon: "Settings"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Expleo Solutions",
    role: "Associate Project Manager – RPA",
    period: "2021 – Present",
    description: "Leading enterprise automation delivery and designing pipeline strategies from intake to deployment.",
    metrics: [
      "Enabled automation governance by standardizing KPIs and reporting.",
      "Improved delivery velocity and predictability through Agile management.",
      "Managed client-facing solution demos and governance protocols."
    ]
  },
  {
    company: "Olam Information Services",
    role: "RPA Lead / Specialist",
    period: "2018 – 2021",
    description: "Built RPA CoE frameworks and delivered high-impact automations across Finance and Supply Chain.",
    metrics: [
      "Enabled secure and scalable AA360 infrastructure with IT teams.",
      "Developed reusable automation components for enterprise scale.",
      "Led opportunity assessments and ROI evaluation for new projects."
    ]
  },
  {
    company: "Shell India",
    role: "RPA Specialist",
    period: "2017 – 2018",
    description: "Developed automation workflows using NICE for operational efficiency.",
    metrics: [
      "Streamlined workflows for significant operational time savings.",
      "Integrated automation into legacy Oil & Gas business processes."
    ]
  },
  {
    company: "Wipro",
    role: "Software Engineer",
    period: "2015 – 2017",
    description: "Supported RPA delivery through documentation and requirement gathering.",
    metrics: [
      "Created comprehensive PDD/SDD for enterprise automation.",
      "Bridged communication between business stakeholders and technical teams."
    ]
  },
  {
    company: "Bitberries Infotech",
    role: "Software Developer",
    period: "2013 – 2015",
    description: "Built secure ASP.NET and SQL Server applications for banking and enterprise clients.",
    metrics: [
      "Developed robust banking applications with high security standards.",
      "Managed full-stack lifecycle for enterprise software solutions."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Master of Computer Applications", issuer: "Anna University", year: "Graduated" },
  { name: "AA: Solution Architect & Advanced Developer", issuer: "Automation Anywhere", year: "Certified" },
  { name: "Certified Scrum Master (CSM)", issuer: "Scrum Alliance", year: "Certified" },
  { name: "Generative AI for Project Managers", issuer: "Professional Training", year: "2024" }
];

export const getIcon = (name: string) => {
  const icons: Record<string, any> = {
    Bot, Cloud, Database, Settings, Layers, Cpu, Network, LineChart, ShieldCheck, Zap, Globe, Award, Users
  };
  const IconComponent = icons[name] || Zap;
  return <IconComponent size={24} className="text-cyan-400" />;
};
