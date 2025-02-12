import { sveltekit } from '@sveltejs/kit/vite';
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
		sveltekit({}),
	]
};

export default config;
