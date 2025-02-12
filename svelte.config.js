import { defineMDSveXConfig } from 'mdsvex';
import vercel from '@sveltejs/adapter-vercel';
import { sveltePreprocess } from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mdx'],
	kit: {
		adapter: vercel({
			runtime: 'nodejs18.x',
			isr: true,
			split: false
		}),
		alias: {
			'@components': path.resolve('./src/components'),
			'@types': path.resolve('./src/types/global.ts'),
			'@src': path.resolve('./src'),
			'@routes': path.resolve('./src/routes'),
			'@utils': path.resolve('./src/utils.ts'),
			'@assets': path.resolve('./src/assets')
		}
	},
	preprocess: [
		sveltePreprocess({
			postcss: {},
			sourceMap: true,
			typescript: true,
			scss: true,
		}),
		mdsvex(defineMDSveXConfig({
			extensions: ['.mdx'],
			layout: {
				_: './src/routes/posts/post-layout.svelte'
			},
			smartypants: {
				dashes: 'oldschool'
			},
			remarkPlugins: [],
			rehypePlugins: []
		}))
	]
};

export default config;
