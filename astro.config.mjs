import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import starlight from '@astrojs/starlight';
import { satteriGithubPlugin } from './src/plugins/satteri-github';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Support Docs',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://astro.build/chat' },
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/withastro/support-docs',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/withastro/support-docs/edit/main/'
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'About Support', link: '/' },
					],
				},
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }]
				},
				{
					label: 'Resources',
					items: [{ autogenerate: { directory: 'resources' } }]
				}
			],
		}),
	],
	markdown: {
		processor: satteri({
			mdastPlugins: [satteriGithubPlugin()],
		}),
	},
});
