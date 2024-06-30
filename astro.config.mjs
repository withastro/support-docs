import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkGithub from 'remark-github';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Support Docs',
      customCss: ['./src/utils/custom.css'],
			social: {
				github: 'https://github.com/withastro/support-docs',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'About Support', link: '/' },
					],
				},
        {
          label: 'Resources',
          autogenerate: { directory: 'resources' }
        }
			],
		}),
	],
  markdown: {
    remarkPlugins: [
      [remarkGithub, { repository: 'withastro/astro' }]
    ]
  }
});
