export interface Project {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'Concluído' | 'Em andamento' | 'Conceito' | 'Projeto acadêmico';
  highlights?: string[];
  quote?: string;
}

export type SkillCategory = 'frontend' | 'mobile' | 'backend' | 'infra';

export interface Skill {
  name: string;
  category: SkillCategory;
  categoryLabel: string;
  description?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  label: string;
  url: string;
  usernameDisplay: string;
  isPlaceholder?: boolean;
}

export interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  organization: string;
  location: string;
  sector?: string;
  scope?: string;
  statusBadge: string;
  description: string;
  highlights?: string[];
}
