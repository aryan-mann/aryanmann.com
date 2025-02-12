<script lang="ts">
    import { page } from '$app/stores';
	import { onMount } from 'svelte';
    /* https://disqus.com/admin/universalcode/#configuration-variables */
    var disqus_config = function () {
        this.page.url = $page.route.id;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = $page.route.id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    onMount(() => {
        (function() { // DON'T EDIT BELOW THIS LINE
            let d = document, s = d.createElement('script');
            s.src = 'https://aryanmann.disqus.com/embed.js';
            // @ts-ignore
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    });
</script>

<details class="mt-4">
    <summary class="text-xl cursor-pointer mb-2 underline animate-pulse">💬 Open Comments 💬</summary>
    <div class="border-[1px] p-4 rounded shadow bg-slate-100" id="disqus_thread"></div>
    <noscript>Comments require JavaScript to function.</noscript>
</details>
