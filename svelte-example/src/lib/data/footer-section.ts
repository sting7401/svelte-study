import type { FooterSection } from '$lib/types/Footer';

export const footerSections: FooterSection[] = [
	{
		title: 'Products',
		links: [
			{ name: 'Computers', link: '/computers' },
			{ name: 'Audio', link: '/audio' },
			{ name: 'TV', link: '/tv' },
			{ name: 'Home App', link: '/home-app' },
			{ name: 'Sports', link: '/sports' }
		]
	},
	{
		title: 'Discount',
		links: [
			{ name: 'Autumn', link: '/autumn' },
			{ name: '15% off', link: '/off' }
		]
	},
	{
		title: 'About',
		links: [
			{ name: 'FAQ', link: '/faq' },
			{ name: 'Shipment', link: '/shipment' },
			{ name: 'Terms', link: '/terms' },
			{ name: 'Privacy', link: '/privacy' }
		]
	}
];
