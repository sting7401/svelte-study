export async function load(serverLoadEvent) {
	const { fetch } = serverLoadEvent;
	const response = await fetch('http://localhost:3000/products');
	const products = await response.json();

	return { products };
}
