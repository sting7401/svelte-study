export const load = async ({ fetch }) => {
	console.log('Loading');
	const res = await fetch('/api/current-time');
	const currentTime = await res.text();

	return { currentTime };
};

export const prerender = true;
export const csr = false;