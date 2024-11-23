tailwind.config = {
	theme: {
		extend: {
			keyframes: {
				blob: {
					"0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
					"50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
					"100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
				},
				gradientText: {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
			},
			animation: {
				blob: "blob 8s ease-in-out infinite",
				gradientText: "gradientText 3s linear infinite",
			},
		},
	},
};
