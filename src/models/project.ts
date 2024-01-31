export interface Tag {
  name: string;
  class: string;
  icon: (_props: Record<string, any>) => any;
}

export interface Project {
  title: string;
  description: string;
  github: string;
  link?: string;
  image: string;
  npm?: string;
  tags: Tag[];
}
