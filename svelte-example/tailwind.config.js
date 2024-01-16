/** @type {import('tailwindcss').Config} */

// import plugin from 'flowbite/plugin.js';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Bebas Neue'],
				body: ['Outfit']
			},
			colors: {
				fw: {
					blue: '#11283D',
					darkblue: '#192630',
					grey: '#F8F8F8',
					darkgrey: '#C1C1C1',
					gold: '#FFC804',
					red: '#DD0202'
				}
			},
			fontSize: {
				xsm: '0.75rem'
			},
			boxShadow: {
				sm: '0 1px 10px rgba(0, 0, 0, 0.10)'
			},
			screens: {
				xsm: '380px'
			},
			backgroundImage: {
				'tech-rocket': "url('$lib/images/tech-rocket.jpg')",
				'game-rocket': "url('$lib/images/game-rocket.jpg')"
			}
		}
	}
};
