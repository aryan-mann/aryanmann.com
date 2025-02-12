<script lang="ts">
	import IconArrowLeft from 'lucide-svelte/icons/arrow-left-to-line';
	import IconArrowRight from 'lucide-svelte/icons/arrow-right-to-line';

	interface Props {
		items?: any[];
		currentItem?: any;
		children?: import('svelte').Snippet;
		prev?: import('svelte').Snippet;
		next?: import('svelte').Snippet;
	}

	let {
		items = [],
		currentItem = $bindable(null),
		children,
		prev,
		next
	}: Props = $props();

	let currentItemIndex = $state(0);
	$effect(() => {
		currentItem = items[((currentItemIndex % items.length) + items.length) % items.length];
	});

	function previousSlide() {
		currentItemIndex--;
	}
	function nextSlide() {
		currentItemIndex++;
	}
</script>

{#if currentItem}
	<div class="flex flex-col items-center justify-center">
		{@render children?.()}
		<div class="w-full flex justify-evenly mt-4">
			<button onclick={previousSlide}>
				{#if prev}{@render prev()}{:else}
					<div
						class="max-w-[4em] active:text-primary-500 transform-gpu duration-150 cursor-pointer text-secondary-700 hover:text-secondary-400"
					>
						<IconArrowLeft /> 
					</div>
				{/if}
			</button>
			<button onclick={nextSlide}>
				{#if next}{@render next()}{:else}
					<div
						class="max-w-[4em] active:text-primary-500 transform-gpu duration-150 cursor-pointer text-secondary-700 hover:text-secondary-400"
					>
						<IconArrowRight />
					</div>
				{/if}
			</button>
		</div>
	</div>
{/if}
