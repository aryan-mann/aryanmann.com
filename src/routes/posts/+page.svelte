<script lang="ts">
	import { page } from '$app/stores';
	import Meta from '../../components/Meta.svelte';
	import PostList from '../../components/PostList.svelte';
	import { alphabetize } from '../../utils';
	import type { PageData } from './$types';

	
	interface Props {
		/** @type {import('./$types').PageData} */
		data: PageData;
	}

	let { data }: Props = $props();

	let filterBySeries = $derived($page.url.searchParams.has('series'));
	let suffix = $derived(filterBySeries ? $page.url.searchParams.get('series') : 'all');
</script>

<Meta title={suffix === 'all' ? 'Blog' : `Series: ${alphabetize(suffix)}`} />
<div class="flex justify-between">
	<h2 class="mb-6 text-2xl">
		posts / <span class="text-secondary-700">{suffix === 'all' ? 'all' : alphabetize(suffix)}</span>
	</h2>
	{#if suffix !== 'all'}<a href="/posts/">clear filter</a>{/if}
</div>
<div class="flex flex-col space-y-4">
	<PostList posts={data.posts} />
</div>
