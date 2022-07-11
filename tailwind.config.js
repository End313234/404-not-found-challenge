/* eslint-disable */

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				gray: {
					400: "#4F4F4F",
					800: "#333333",
				},
			},
			fontFamily: {
				"sans": "Space Mono, sans-serif",
				"inconsolata": "Inconsolata, sans-serif"
			}
		},
	},
	plugins: [],
};
