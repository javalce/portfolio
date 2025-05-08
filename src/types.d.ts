export interface Profile {
  name: string;
  label: string;
  summary: string;
  location: {
    city: string;
    country: string;
  };
  about: string[];
  image: string;
  links: Link[];
  resumee: string;
}

export interface Link {
  name: string;
  url: string;
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

export interface CV {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  work: WorkExperience[];
}

declare module '@/cv.json' {
  const value: CV;

  // eslint-disable-next-line import-x/no-default-export -- Default export is used for JSON module compatibility
  export default value;
}
