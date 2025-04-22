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

<Meta />
<Layout>
	{@render children?.()}
</Layout>