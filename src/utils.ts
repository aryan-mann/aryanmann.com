import type { PostItem } from './types/global';

export function convertToDate(dateLike: string | number | Date, today?: Date): string {
	const date = dateLike instanceof Date ? dateLike : new Date(dateLike)
	const dateString = date.toLocaleDateString('en-US', {
		month: 'short',
		day: '2-digit',
		year: 'numeric'
	});

	// calculate days since today
	if (today) {
		const diff = today.getTime() - date.getTime();
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));

		if (days === 0) {
			return 'Today';
		} else if (days === 1) {
			return 'Yesterday';
		} else if (days < 0) {
			return `In the future?`;
		}

		return `${days} day${days === 1 ? '' : 's'} ago`;
	}

	return dateString;
}

export function romanize(num: number): string {
	if (isNaN(num)) return '';
	var digits = String(+num).split(''),
		key = [
			'',
			'C',
			'CC',
			'CCC',
			'CD',
			'D',
			'DC',
			'DCC',
			'DCCC',
			'CM',
			'',
			'X',
			'XX',
			'XXX',
			'XL',
			'L',
			'LX',
			'LXX',
			'LXXX',
			'XC',
			'',
			'I',
			'II',
			'III',
			'IV',
			'V',
			'VI',
			'VII',
			'VIII',
			'IX'
		],
		roman = '',
		i = 3;
	while (i--) roman = (key[+digits.pop() + i * 10] || '') + roman;
	return Array(+digits.join('') + 1).join('M') + roman;
}

export function alphabetize(text: string): string {
	text = text
		.split('-')
		.map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
		.join(' ');
	return text;
}

export type FilterFunctionT = (p: PostItem) => boolean;
export type GetFilteredPostsT = {
	params: any;
	filterFunction?: FilterFunctionT;
	additiveFilter?: boolean;
};

export async function getFilteredPosts({
	params,
	filterFunction,
	additiveFilter
}: GetFilteredPostsT): Promise<Array<PostItem>> {
	const mdxSearchLocation = './routes/posts/';
	const svelteSearchLocation = './routes/posts/';
	const mdxModules = import.meta.glob('./routes/posts/**/*.mdx');
	const svelteModules = import.meta.glob('./routes/posts/*/**/+page.svelte');

	const searchParams: URLSearchParams = params.url.searchParams;
	const routeId: string = `/posts`;

	let posts: Array<PostItem> = [];
	const filterer = (post: PostItem) => {
		let keepPost = true;

		// 1. Do not keep drafts
		if (post.draft === true) {
			keepPost = keepPost && false;
		}

		// 2. Do not keep posts not in the series
		if (searchParams.has('series')) {
			const series = searchParams.get('series');
			if (post.series !== series) {
				keepPost = keepPost && false;
			}
		}

		// n. Do not keep posts that do not match the custom filter
		if (filterFunction !== undefined && additiveFilter) {
			keepPost = keepPost && filterFunction(post);
		}

		return keepPost;
	};

	// moduleKey: relative path (from this file) to module eg: './routes/posts/erpnext-letencrypt.mdx'
	for (let [postPath, postData] of Object.entries(mdxModules)) {
		const urlPath = `${routeId}/${postPath
			.substring(mdxSearchLocation.length)
			.split('.')[0]
			.replace(/\+page$/, '')}`;
		const resolvedModule: any = await postData();
		const postMeta = resolvedModule.metadata;
		const post: PostItem = {
			url: urlPath,
			...postMeta,
			date: new Date(postMeta.date)
		};

		if (filterFunction === undefined || additiveFilter) {
			if (filterer(post)) {
				posts.push(post);
			}
		} else if (filterFunction(post)) {
			posts.push(post);
		}
	}

	for (let [postPath, postData] of Object.entries(svelteModules)) {
		const comp = await postData() as object;
		if (!('PostData' in comp) || typeof comp.PostData !== 'object') {
			console.warn(`PostData not found in ${postPath}. Post will be skipped.`)
			continue;
		}

		const post: PostItem = {
			url: `${routeId}/${postPath
				.substring(svelteSearchLocation.length)
				.split('.')[0]
				.replace(/\+page$/, '')}`,
			...comp.PostData,
		}

		if (filterFunction === undefined || additiveFilter) {
			if (filterer(post)) {
				posts.push(post);
			}
		} else if (filterFunction(post)) {
			posts.push(post);
		}
	}

	// Sort by date
	posts.sort((p1, p2) => p2.date.getTime() - p1.date.getTime());

	return posts;
}
