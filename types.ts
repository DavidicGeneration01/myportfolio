export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string; // URL or icon name
  category: 'frontend' | 'backend' | 'tools';
}

export interface ToolkitItem {
  title: string;
  description: string;
  iconName: string;
}