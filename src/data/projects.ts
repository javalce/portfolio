import type { Project } from '@/types';

export const projects: Project[] = [
  {
    name: 'create-javalce-app',
    description:
      'CLI para crear proyectos basados en templates de React y Next.js. Con Tailwind CSS, ESLint y Prettier.',
    image: '/projects/create-javalce-app.webp',
    npm: 'https://www.npmjs.com/package/create-javalce-app',
    github: 'https://github.com/javalce/create-javalce-app',
  },
  {
    name: '@javalce/prettier-config',
    description:
      'Configuración de Prettier para proyectos de JavaScript/TypeScript con mis reglas de estilo predeterminadas.',
    image: '/projects/prettier-config.webp',
    npm: 'https://www.npmjs.com/package/@javalce/prettier-config',
    github: 'https://github.com/javalce/prettier-config',
  },
  {
    name: '@javalce/eslint-config',
    description:
      'Configuración de ESLint para proyectos de JavaScript, TypeScript, React, Next.js, etc. con mis criterios de desarrollo predeterminados.',
    image: '/projects/eslint-config.webp',
    npm: 'https://www.npmjs.com/package/@javalce/eslint-config',
    github: 'https://github.com/javalce/eslint-config',
  },
];
