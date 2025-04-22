<script>
  import { SiteData } from "../site";
</script>

<div class="flex items-center justify-end">
  <div class="bg-primary-200 flex px-4 py-2 space-x-4 shadow-md">
    {#each SiteData.socials as social}
      <a 
        title={social.title}
        target="_blank"
        rel="noreferrer"
        href={social.url}
      >
      {#if social.icon}
        <div class="hover:bg-primary-400 w-10 px-2 py-2 duration-500 rounded">
          <social.icon />
        </div>
      {:else}
        {social.title}
      {/if}
      </a>
    {/each}
  </div>
</div>
