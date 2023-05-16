// export const loadData<fetchData> = async (url: fetchData) => {
// 	const link = url;
// 	const res = await fetch(link);
// };

// async function loadData(url: string) {
// 	const URL = url;
// 	const response = await fetch(URL);
// 	const fetchData = await response.json();

// 	if (response.ok) {
// 		console.log(todoWrap);
// 		return fetchData;
// 	} else {
// 		throw new Error('Error loading');
// 	}
// }

const loadData = async (url: string) => {
	const URL = url;
	const response = await fetch(URL);
	const fetchData = await response.json();

	if (response.ok) {
		return fetchData;
	} else {
		throw new Error('Error loading');
	}
};

export { loadData };
