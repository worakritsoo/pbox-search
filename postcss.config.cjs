const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
	plugins: [
		tailwindcss,

		autoprefixer,

		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};
