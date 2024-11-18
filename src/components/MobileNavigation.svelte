<script>
  import { SiteData } from '../site';
  import LogoBlack from "@assets/images/am_logo_black.png"

  let isMenuOpen = $state(true);
</script>

{#if isMenuOpen}
<div class="bg-primary-200 md:hidden fixed top-0 left-0 z-40 flex items-center justify-center w-full h-full">
  <div class="static flex flex-col p-0 m-0 space-y-4 list-none">
    <div class="mb-4">
      <img alt="logo with the words Aryan Mann" src={LogoBlack} width={170} height={72} />
    </div>
    {#each SiteData.menuLinks as menuLink}
    <div class="flex w-full">
      <a class="bg-secondary-200 hover:bg-secondary-400 w-full px-4 py-2 no-underline rounded shadow" href={menuLink.url}>{menuLink.label}</a>
    </div>
    {/each}
  </div>
</div>
{/if}
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
  class="bg-primary-800 hover:bg-primary-500 top-6 right-10 md:hidden fixed z-50 flex items-center justify-center w-12 h-12 px-3 text-white transition-all duration-200 rounded-md cursor-pointer"
  class:open={isMenuOpen}
  onclick={() => { isMenuOpen = !isMenuOpen; }}
>
  <!-- onClick={() => setMenuHidden(!isMenuHidden)} -->
  <GiHamburgerMenu />
  <!-- <FaHamburger /> -->
</div>