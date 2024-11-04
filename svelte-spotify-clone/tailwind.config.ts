import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			spacing: remLog(400)
		},
		fontSize: remLog(100),
		fontWeight: {
			w3: '300',
			w4: '400',
			w5: '500',
			w6: '600',
			w7: '700',
			w8: '800',
			w9: '900'
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
