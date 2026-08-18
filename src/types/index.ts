export interface AppProject {
  id: string;
  name: string;
  tech: string;
  description: string;
  status: 'published' | 'in-development';
  playStoreUrl?: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'mobile';
  level?: string;
}