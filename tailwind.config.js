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
				'primary': {
					DEFAULT: "#2e3f5b",
					90: "#43526b",
					80: "#58657c",
					70: "#6d798c",
					60: "#828c9d",
					50: "#979fad",
					40: "#abb2bd",
					30: "#c0c5ce",
					20: "#d5d9de",
					10: "#eaecef",

				},
				"secondary": {
					DEFAULT: "#ef8354",
					90: "#f18f65",
					80: "#f29c76",
					70: "#f4a887",
					60: "#f5b598",
					50: "#f7c1aa",
					40: "#f9cdbb",
					30: "#fadacc",
					20: "#fce6dd",
					10: "#fdf3ee",
				},
				"tertiary": {
					DEFAULT: "#2d3142",
					90: "#424655",
					80: "#575a68",
					70: "#6c6f7b",
					60: "#81838e",
					50: "#9698a1",
					40: "#abadb3",
					30: "#c0c1c6",
					20: "#d5d6d9",
					10: "#eaeaec",
				},
				"background": "#202020"
			},
			listStyleType: {
				line: "'--'",
			}
		},
	},
	plugins: [require("daisyui")],
}
