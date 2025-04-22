<script lang="ts">
	import MobileNavigation from './MobileNavigation.svelte';
	import Navigation from './Navigation.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<meta charSet="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="apple-touch-icon" href="/icon.png" />
	<meta name="theme-color" content="#fff" />
</svelte:head>

<div class="w-screen h-screen overflow-x-hidden">
	<main class="md:py-16 xl:py-24 flex flex-col items-center justify-center px-4 pt-12 pb-6">
		<Navigation />
		<!-- <MobileNavigation /> -->
		<div class="w-full max-w-[900px] bg-white bg-opacity-80 md:px-4">
			{@render children?.()}
		</div>
	</main>
</div>
