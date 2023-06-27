/** @type {import('tailwindcss').Config} */

// const px0_60 = { ...Array.from(Array(61)).map((_, i) => `${i/16}rem`) };
const px0_300 = { ...Array.from(Array(301)).map((_, i) => `${i/16}rem`) };
const remLog = (props) => {
  const rem = Array(props)
    .fill()
    .map((_, i) => `${i / 16}rem`);

  return { ...rem };
};

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: { 
      spacing: remLog(300)
    },
    fontSize: remLog(100),
    fontWeight: {
      'w3' : '300',
      'w4' : '400',
      'w5' : '500',
      'w6' : '600',
      'w7' : '700',
      'w8' : '800',
      'w9' : '900'
    }
  },
  plugins: []
};