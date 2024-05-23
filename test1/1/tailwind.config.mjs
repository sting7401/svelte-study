/** @type {import('tailwindcss').Config} */
import tailwindVectorEffect from 'tailwind-vector-effect';

// const px0_60 = { ...Array.from(Array(61)).map((_, i) => `${i/16}rem`) };
const pxRem = (props) => {
	const rem = Array(props)
		.fill()
		.map((_, i) => `${i / 16}rem`);

	return { ...rem };
};
const BASE = 16; // your base size
const rem = (px, key = px) => ({ [key]: `${px / BASE}rem` });

export default {
	content: [
		'./*.{html,js}',
		'./public/static/**/*.{html,js}',
		'./src/**/*.{svelte,html,js,ts}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		screens: {
			sm: { max: '640px' },
			'sm-md': { min: '0', max: '1366px' },
			'md-min': { min: '641px' },
			'md-max': { max: '1366px' },
			md: { min: '641px', max: '1366px' },
			lg: { min: '1367px' },
			'sm-h-min': { raw: '(min-height: 641px)' },
		},
		extend: {
			spacing: pxRem(1200),
			maxWidth: pxRem(1200),
			maxHeight: pxRem(1200),
			minWidth: pxRem(1200),
			minHeight: pxRem(1200),
		},
		borderRadius: pxRem(200),
		fontSize: pxRem(200),
		// fontWeight: {
		// 	w3: '300',
		// 	w4: '400',
		// 	w5: '500',
		// 	w6: '600',
		// 	w7: '700',
		// 	w8: '800',
		// 	w9: '900',
		// },
	},
	variants: {},
	styles: {},
	plugins: [tailwindVectorEffect],
};
