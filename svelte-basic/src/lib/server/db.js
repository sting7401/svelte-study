export const createPost = async ({ title, body, userId }) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({ title, body, userId }),
		headers: { 'Content-Type': 'application/json' },
	});
	console.log(res);
	return await res.json();
};

export const getPost = async id => {
	const post = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`,
	);

	return await post.json();
};
