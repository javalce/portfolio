import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Geist Variable',
      subsets: ['latin'],
      cssVariable: '--font-geist',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Geist Mono',
      subsets: ['latin'],
      cssVariable: '--font-geist-mono',
    },
  ],
});
