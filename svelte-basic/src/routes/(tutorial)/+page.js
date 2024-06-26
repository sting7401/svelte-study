export const load = async ({ fetch }) => {
	console.log('Loading');
	const res = await fetch('/api/current-time');
	const currentTime = await res.text();

	return { currentTime };
};

export const prerender = 'auto';
export const csr = false;
export const ssr = true;
