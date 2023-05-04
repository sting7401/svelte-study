// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};

declare class Product {
	id: string;
	name: string;
	price: number;
}

declare class CartItem {
	id: string;
	quantity: number;
}
