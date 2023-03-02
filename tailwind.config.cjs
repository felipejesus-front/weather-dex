/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Inter", "system-ui"],
		},
		screens: {
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1024px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }

			xs: { max: "419px" },
			// => @media (max-width: 419px)
		},
		extend: {
			keyframes: {
				showUp: {
					"0%": { transform: "scale(0)" },
					"100%": { transform: "scale(1)" },
				},
			},
			backgroundImage: {
				"poke-weather": "url('/pokeweatherbg.svg')",
			},
			colors: {
				ice: "#74CEC0",
				"dark-ice": "#2B7B6F",
				water: "#4D90D5",
				"dark-water": "#074483",
				grass: "#63BB5B",
				"dark-grass": "#286C21",
				ground: "#D97746",
				"dark-ground": "#8F3A0F",
				bug: "#90C12C",
				"dark-bug": "#3D5905",
				rock: "#C7B78B",
				"dark-rock": "#847039",
				fire: "#FF9C54",
				"dark-fire": "#A94D0B",
				normal: "#9099A1",
				"dark-normal": "#505457",
				electric: "#F3D23B",
				"dark-electric": "#988012",
			},
			dropShadow: {
				ice: "0 0 8px #74CEC0",
				water: "0 0 8px #4D90D5",
				grass: "0 0 8px #63BB5B",
				ground: "0 0 8px #D97746",
				bug: "0 0 8px #90C12C",
				rock: "0 0 8px #C7B78B",
				fire: "0 0 8px #FF9C54",
				normal: "0 0 8px #9099A1",
				electric: "0 0 8px #F3D23B",
			},
		},
	},
	plugins: [],
};
