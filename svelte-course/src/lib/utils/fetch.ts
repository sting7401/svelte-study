const loadData = async <T>(url: string): Promise<T> => {
	const URL: string = url;
	const response = await fetch(URL);
	const fetchData: T = await response.json();

	if (response.ok) {
		return fetchData;
	} else {
		throw new Error('Error loading');
	}
};

export { loadData };
