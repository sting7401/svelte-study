class UserResponse {
	user = $state();
	error = $state();
	isLoading = $state(false);
}

export default function useFetchUsers() {
	const res = new UserResponse();

	async function fetchData() {
		res.isLoading = true;

		return new Promise((resolve, reject) => {
			fetch('https://randomuser.me/api/?results=3')
				.then((response) => {
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					return response.json();
				})
				.then((data) => {
					res.users = data.results;
					res.error = undefined;
					resolve(data.results);
				})
				.catch((error) => {
					res.error = error;
					res.users = undefined;
					reject(error);
				})
				.finally(() => {
					res.isLoading = false;
				});
		});
	}

	fetchData();
	return res;
}
