import { writable } from 'svelte/store';

const crateCart = () => {
	const cart = writable([
		{ id: 'p1111', title: '제목', price: '가격' },
		{ id: 'p2222', title: '제목', price: '가격' }
	]);

	const customCart = {
		subscribe: cart.subscribe,
		addItem: (item) => {
			cart.update((updateItem) => {
				if (updateItem.find((i) => i.id === updateItem.id)) {
					return [...updateItem];
				}
				return [...updateItem, item];
			});
		},
		removeItem: (id) => {
			cart.update((items) => {
				return items.filter((i) => i.id !== id);
			});
		}
	};

	return customCart;
};

export default crateCart();
