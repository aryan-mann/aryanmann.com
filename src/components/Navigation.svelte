<script>
	import { SiteData } from '../site.ts';
	import LogoBlack from "@assets/images/am_logo_black.png"

	import { page } from '$app/state';
</script>

<div class="flex flex-col items-center justify-center pb-12">
	<img
		alt="logo with the words Aryan Mann"
		src={LogoBlack}
		width={170}
		height={72}
	/>
	<div class="flex flex-wrap pt-8 md:pt-12 gap-4 justify-center">
		{#each SiteData.menuLinks as menuLink}
			{@const isActive = page.route.id === menuLink.url}
			<a class:selected={isActive} class:external-link={!!menuLink.external} class="thick-link" href={menuLink.url}>{menuLink.label}</a>
		{/each}
	</div>
</div>

<style>
	a.selected {
		@apply bg-secondary-100;
	}
	a.external-link {
		cursor: context-menu;
	}
</style>

