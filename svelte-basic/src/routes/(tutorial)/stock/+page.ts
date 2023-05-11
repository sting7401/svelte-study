import type { PageLoad } from './$types';

interface Stock {
	[key: string]: { symbol: string; price: number };
}

export const load = (async ({ fetch, depends }) => {
	const url = 'http://localhost:5000/stocks';
	const res = await fetch(url);
	const stocks: Stock[] = await res.json();
	depends('stocks:active');

	return {
		stocks,
	};
}) satisfies PageLoad;
