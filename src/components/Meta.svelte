<script lang="ts">
  import { page } from '$app/stores';
  import { SiteData } from "../site";

  interface Props {
    title?: string|null;
    description?: string|null;
    keywords?: Array<string>;
    type?: "article";
  }

  let {
    title = null,
    description = null,
    keywords = [],
    type = "article"
  }: Props = $props();
</script>

<svelte:head>
  <!-- Basic Metadata -->
  {#if title}
    <title>{SiteData.title_functor(title)}</title>
    <meta name="og:title" content={SiteData.title_functor(title)} />
  {/if}
  {#if description}
    <meta name="description" content={description} />
    <meta name="og:description" content={description} />
  {/if}
  {#if keywords && keywords.length > 0}
    <meta name="keywords" content={keywords.join(",")} />
  {/if}
  <meta name="author" content={SiteData.author} />
  <link rel="canonical" href={$page.url.toString()} />
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:type" content={type} />
  <!-- As JsonLD -->
  <!-- <script>
        {...jsonLdScriptProps<BlogPosting>({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: config.base_url + url,
          headline: title,
          keywords: keywords ? undefined : keywords.join(","),
          datePublished: formatISO(date),
          author: author,
          image: image,
          description: description,
        })}
  </script> -->
</svelte:head>