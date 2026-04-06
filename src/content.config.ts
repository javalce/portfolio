import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

const homePage = defineCollection({
  loader: glob({ base: 'src/content/home', pattern: '**/*.{md,mdx}' }),
});

export const collections = { homePage };
