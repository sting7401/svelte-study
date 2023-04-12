/** @type {import('./$types').PageServerLoad} */
export const load = async (fetch) => {
	const result = await fetch('https://svelte-max-658a0-default-rtdb.firebaseio.com/meetup.json');

	result
		.then((res) => {
			if (!res.ok) {
				throw new Error('error');
			}

			return res.json();
		})
		.then((data) => {
			let loadData = [];
			for (const key in data) {
				loadData.push({
					...data[key],
					id: key
				});
			}
			return { fetchData: loadData };
		})
		.catch((err) => {
			console.log(err);
		});

	// const data = await result.json();

	console.log(result);
	return result;
};
