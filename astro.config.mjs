// @ts-check
import { defineConfig } from 'astro/config';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: 'https://ferx-technologies.github.io',
  base: isGitHubActions ? '/Ferx-Technologies' : '/',
  output: 'static',
});
