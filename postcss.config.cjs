const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwind = require('tailwindcss');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
	plugins: [
		tailwind,

		autoprefixer,

		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};
