/* eslint-disable @typescript-eslint/no-explicit-any -- This comment disables the ESLint rule that prohibits the use of the 'any' type, which is necessary in this case. */
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
  image?: string;
  npm?: string;
  tags: Tag[];
}
