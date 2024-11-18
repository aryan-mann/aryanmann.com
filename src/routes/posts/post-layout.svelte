<script lang="ts">
	import Disqus from '@components/Disqus.svelte';
	import Meta from '@components/Meta.svelte';
	import { alphabetize, convertToDate } from '@utils';

	let {
		title,
		date,
		tags,
		lastUpdated,
		series,
		part,
		children
	} = $props();
</script>

<Meta {title} {date} />

<div class="flex flex-col mt-2 md:mt-8">
	<div class="flex flex-col items-start">
		<h1 class="text-3xl md:text-4xl">{title}</h1>
	</div>
	<hr class="mt-2 mb-5" />
	<div class="flex flex-col gap-2">
		{#if series && part}
			<p class="bg-primary-200 px-4 py-2 shadow rounded mb-1">
				This is <b>Part {part}</b> of the Series
				<a href={`/posts?series=${series}`}>'{alphabetize(series)}'</a>
			</p>
		{/if}
		<p class="mb-2">
			Posted on {'   '}<span class="underline">{convertToDate(date)}</span>
			{#if lastUpdated}
				but last updated on <span class="underline">{convertToDate(lastUpdated)}</span>
			{/if}
		</p>
		<div class="flex gap-2 flex-wrap items-center">
			{#if tags}
				<span>Tags: </span>
				{#each tags as tag}
					<a
						class="bg-secondary-100 hover:bg-secondary-300 px-2 py-1 no-underline rounded shadow"
						href={`/tags/${tag}`}>{tag}</a
					>
				{/each}
			{/if}
		</div>
	</div>
	<hr class="mt-4 mb-4" />
</div>
<div class="typo flex flex-col">
	{@render children?.()}
</div>
<Disqus />
<div class="mt-8 text-center text-gray-600">
	For any criticism, kudos, or thoughts, shoot me a messsage at <a
		href="mailto:aryan.21.mann@gmail.com">aryan.21.mann@gmail.com</a
	>
</div>
<div class="flex justify-center mt-8 space-x-4 text-gray-600 mb-4">
	<a class="thick-link" href="/">home</a>
	<a class="thick-link" href="/posts">all posts</a>
</div>
