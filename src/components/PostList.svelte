<script lang="ts">
	import { alphabetize, convertToDate, romanize } from '../utils';
	import type { PostItem } from '../types/global';
	import { goto } from '$app/navigation';

	interface Props {
		posts?: Array<PostItem>;
	}

	let { posts = [] }: Props = $props();

	const today = new Date();
</script>

{#if posts.length <= 0}
	<p>no posts found</p>
{/if}
{#each posts as post}
	<button
		class="group hover:bg-primary-100 bg-primary-100 hover:not-italic justify-between px-8 py-4 no-underline hover:shadow-lg border-primary-300 border-[1px] hover:border-primary-700"
		onclick={() => {
			goto(post.url);
		}}
	>
		<div class="flex justify-between">
			<p class="text-xl">
				<span class="transform-gpu inline-block -rotate-90 duration-150 group-hover:rotate-0"
					>☞</span
				>
				{post.title}
			</p>
			<p class="ml-2">{convertToDate(post.date, today)}</p>
		</div>
		{#if post.description}
			<p class="text-sm text-left mt-2 px-1">{post.description}</p>
		{/if}
		<div class="max-w-24 max-h-28 flex mt-2 space-x-3">
			{#each post.tags as tag}
				<a class="text-sm no-underline hover:bg-secondary-50 px-1" href={`/tags/${tag}`}>#{tag}</a>
			{/each}
		</div>
		{#if post.part && post.series}
			<div class="flex w-full justify-start mt-4">
				<p class="px-2 py-1 text-sm no-underline rounded">Part {romanize(post.part)} in {' '}</p>
				<a
					class="px-2 text-sm py-1 hover:bg-secondary-100 bg-primary-200 no-underline rounded"
					href={`?series=${post.series}`}>Series: {alphabetize(post.series)}</a
				>
			</div>
		{/if}
	</button>
{/each}
