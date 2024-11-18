<script lang="ts">
	import pixelDog from "../assets/images/pixel-dog.gif";

	interface Props {
		title: string;
		hasDog?: boolean;
		children?: import('svelte').Snippet;
	}

	let { title, hasDog = false, children }: Props = $props();
</script>

<div class="bg-secondary-50 relative px-4 pt-6 pb-4 mt-10 mb-2 text-xl">
	{#if hasDog}
	<div class="absolute top-[-43px] move-around">
		<img alt="" src={pixelDog} class="h-8 w-auto" />
	</div>
	{/if}
	<p class="absolute left-4 top-[-20px] rounded-sm bg-primary-800 px-2 py-1 text-white">
		{title}
	</p>
    {@render children?.()}
</div>

<style>
	@keyframes spin {
		from {
			transform: translateX(0) rotateY(0deg);
		}
		49% {
			transform: translateX(100px) rotateY(0deg);
		}
		51% {
			transform: translateX(100px) rotateY(180deg)
		}
		100% {
			transform: translateX(0) rotateY(180deg);
		}
	}
	.move-around {
		animation: spin infinite 4s linear;
	}
</style>