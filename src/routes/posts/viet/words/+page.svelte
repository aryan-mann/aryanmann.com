<script lang="ts" module>
	import { type PostMeta } from '@types';
	import vietWords from './viet-words.json';
    import { ArrowLeft, ArrowRight } from '@lucide/svelte'

	export const PostData: PostMeta = {
		title: 'Vietnamese Word of the Day',
		description: 'A daily Vietnamese word and its meaning',
		date: new Date(2025, 3, 22),
		tags: ['vietnamese', 'words'],
		draft: false,
	};

    const today = new Date();
	let selectedDate = $state(today);

    function moveDay(amount: number) {
        selectedDate = new Date(selectedDate.getTime() + amount * 86400000);
    }

	const todayEpoch = $derived(Math.floor(selectedDate.getTime() / 1000000));
	const selectedIndex = $derived(todayEpoch % vietWords.length);

	const word = $derived(vietWords[selectedIndex]);
	const phraseToMeaning = $derived.by(() => {
		let map: Record<string, string> = {};

		for (const sentence of word.sentences) {
			for (const [key, value] of Object.entries(sentence.meanings)) {
				map[key] = value;
			}
		}

		return map;
	});

	let selectedPart = $state<string | null>(null);

	function splitBasedOnWordMeaning(text: string) {
		const result: string[] = [];
		const phrases = Object.keys(phraseToMeaning).sort((a, b) => b.length - a.length);
		let remaining = text.trim();
		while (remaining) {
			let matched = false;
			for (const phrase of phrases) {
				if (remaining.startsWith(phrase)) {
					result.push(phrase);
					remaining = remaining.slice(phrase.length).trimStart();
					matched = true;
					break;
				}
			}
			if (!matched) {
				const index = remaining.indexOf(' ');
				if (index === -1) {
					result.push(remaining);
					break;
				} else {
					const word = remaining.slice(0, index);
					result.push(word);
					remaining = remaining.slice(index + 1);
				}
			}
		}
		return result;
	}
</script>

<div
	class="flex flex-col gap-4 py-12 px-8 justify-center items-center mt-8 bg-primary-100 shadow rounded"
>
	<div class="w-full flex flex-col gap-4 items-center justify-center">
        <h2 class="text-4xl text-center">Vietnamese <br />Word of the Day</h2>
		<div class="flex gap-4 justify-between items-center">
			<button
				class="text-primary-800"
				onclick={() => moveDay(-1)}>
                <ArrowLeft />
            </button>
            <h3 class="text-xl">
                {selectedDate.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </h3>
			<button
                disabled={selectedDate.toISOString() === today.toISOString()}
				class="text-primary-800 disabled:opacity-50"
				onclick={() => moveDay(1)}>
                <ArrowRight />
            </button>
		</div>
	</div>

	<div
		class="flex flex-col items-center gap-8 justify-center border-[1px] w-full rounded border-dashed border-primary-800 my-3 w-[70%]"
	>
		<p class="text-7xl md:text-8xl mt-8 text-primary-800 animate-pulse font-viet text-center">{word.word}</p>
		<p class="text-3xl mb-8 text-primary-600 text-center">{word.meanings.join(', ')}</p>
	</div>
	<div class="flex flex-col md:flex-row gap-8 w-full md:max-w-[90%] mt-4">
		<div class="flex flex-col gap-4 md:w-4/6">
			{#each word.sentences as sentence}
				<div class="flex flex-col gap-1">
					<p class="text-xl font-viet">
						VN:
						{#each splitBasedOnWordMeaning(sentence.vn) as part}
							{#if part in phraseToMeaning}
								<button
									data-selected={selectedPart === part}
									class="mr-1 text-primary-600 cursor-pointer hover:text-primary-700"
									onclick={() => (selectedPart = part)}
									role="button">{part}</button
								>
							{:else}
								<span class="mr-1">{part}</span>
							{/if}
						{/each}
					</p>
					<p class="text-xl">EN: {sentence.en}</p>
				</div>
			{/each}
		</div>
		<div class="flex flex-col gap-4 items-center justify-center md:w-2/6">
			{#if selectedPart}
				<p class="text-xl bg-primary-200 text-primary-800 px-2 rounded py-1">{selectedPart}</p>
				<p class="text-xl">{phraseToMeaning[selectedPart]}</p>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	button[data-selected='true'] {
		@apply bg-primary-200 text-primary-800;
	}
</style>
