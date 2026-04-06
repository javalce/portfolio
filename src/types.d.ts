export interface Profile {
  name: string;
  summary: string;
}

export interface Link {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  title: string;
  tags: string[];
}

export interface Project {
  name: string;
  description: string;
  image: string;
  github: string;
  npm?: string;
  link?: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string | null;
}
