module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				viet: ['National Park', 'sans-serif']
			},
			colors: {
				primary: {
					DEFAULT: '#CDAC6A',
					50: '#FFFFFF',
					100: '#FBFAF4',
					200: '#F0E9D1',
					300: '#E4D7AF',
					400: '#D9C28C',
					500: '#CDAC6A',
					600: '#BB8D3E',
					700: '#8E672F',
					800: '#604320',
					900: '#322111'
				},
				secondary: {
					DEFAULT: '#6FC133',
					50: '#DBEEBF',
					100: '#D1EAAE',
					200: '#BBE18E',
					300: '#A3D86E',
					400: '#89D04E',
					500: '#6FC133',
					600: '#57A12B',
					700: '#428122',
					800: '#2F611A',
					900: '#1D4011'
				}
			}
		}
	},
	plugins: []
};
