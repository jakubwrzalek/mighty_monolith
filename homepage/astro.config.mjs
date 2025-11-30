// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'WRZALEK.DEV',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jacobzy2137' }],
		}),
	],
});
