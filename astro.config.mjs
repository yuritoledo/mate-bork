// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://yuritoledo.github.io',
	base: '/mate-bork',
	integrations: [
		starlight({
			title: 'Mate Borg',
			description: 'RPG sombrio nos pampas, hack de Mörk Borg.',
			defaultLocale: 'root',
			locales: { root: { label: 'Português', lang: 'pt-BR' } },
			customCss: ['./src/styles/custom.css'],
			head: [
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#0a0f0b' } },
				{ tag: 'script', content: "localStorage.setItem('starlight-theme','dark');document.documentElement.dataset.theme='dark'" },
				{ tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
				{ tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: 'Mate Borg' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/mate-bork/apple-touch-icon.png' } },
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/yuritoledo/mate-bork' }],
			sidebar: [
				{ label: 'Ferramentas', items: [{ slug: 'ferramentas' }] },
				{ label: 'Regras', items: [{ slug: 'viagem-solo' }] },
			],
		}),
	],
});
