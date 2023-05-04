import type { RequestHandler } from './$types';
import Stripe from 'stripe';

const SECRET_STRIPE_KEY = '';
const stripe = new Stripe(SECRET_STRIPE_KEY, {
	apiVersion: '2022-11-15'
});

// post data : items

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const items = data.items;

	const lineItems: any = [];
	items.forEach((item: any) => {
		lineItems.push({ price: item.id, quantity: item.quantity });
	});

	const session = await stripe.checkout.sessions.create({
		line_items: lineItems,
		mode: 'payment',
		success_url: 'http://localhost:3000/success',
		cancel_url: 'http://localhost:3000/cancel'
	});

	return new Response(JSON.stringify({ url: session.url }), {
		status: 200,
		headers: { 'content-types': 'application/json' }
	});
};
