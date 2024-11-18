<script lang="ts">
	import Meta from '../components/Meta.svelte';
	import '../app.postcss';
	import Layout from '../components/Layout.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Meta title />
<Layout>
	{@render children?.()}
</Layout>

