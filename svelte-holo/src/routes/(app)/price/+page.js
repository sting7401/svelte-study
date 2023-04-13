// export const load = async () => {
// 	const response = await fetch('http://localhost:3000/products');
// 	const products = await response.json();

// 	return { products };
// };

export async function load(loadEvent) {
	const { fetch } = loadEvent;
	const response = await fetch('http://localhost:3000/products');
	const products = await response.json();

	return { products };
}
