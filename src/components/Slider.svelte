<script lang="ts">
	import { CircleChevronLeft as ArrowLeft, CircleChevronRight as ArrowRight } from '@lucide/svelte';

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
		currentItem = items[(currentItemIndex % items.length) + items.length] % items.length;
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
		<div class="w-full flex justify-evenly">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<div onclick={previousSlide}>
				{#if prev}{@render prev()}{:else}
					<div
						class="max-w-[4em] active:text-primary-500 transform-gpu duration-150 cursor-pointer text-secondary-700 hover:text-secondary-400"
					>
						<ArrowLeft /> 
					</div>
				{/if}
			</div>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<div onclick={nextSlide}>
				{#if next}{@render next()}{:else}
					<div
						class="max-w-[4em] active:text-primary-500 transform-gpu duration-150 cursor-pointer text-secondary-700 hover:text-secondary-400"
					>
						<ArrowRight />
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
