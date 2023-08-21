/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary': "#394460",
				"secondary": "#EF8354",
				"tertiary": "#2D3142"
			},
			listStyleType: {
				line: "'--'",
			}
		},
	},
	plugins: [require("daisyui")],
}
