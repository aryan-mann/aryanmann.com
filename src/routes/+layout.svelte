<script lang="ts">
	import Meta from '../components/Meta.svelte';
	import '../app.postcss';
	import Layout from '../components/Layout.svelte';
	import { type Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-VF1HF1DGB8"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-VF1HF1DGB8');
	</script>
</svelte:head>

<Meta />
<Layout>
	{@render children?.()}
</Layout>
