import { svelte } from '@sveltejs/vite-plugin-svelte';
import { imagetools } from 'vite-imagetools'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		imagetools({
			defaultDirectives: (url: URL): URLSearchParams => {
				if (url.pathname.endsWith("gif")) {
					return new URLSearchParams()
				}
				return new URLSearchParams({ format: 'webp' })
			}
		}),
		svelte({}),
	]
};

export default config;
