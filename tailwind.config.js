/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                krona: '"Krona One", sans-serif',
            },
            colors: {
                darkooo: "#0C080B",
                green: "#1E3329",
                yellow: "#FFC94B",
                "dark-grey": "#B8B8B8",
                "light-grey": "#F8F8F8",
                light: "#FAFAFA",
                "dark-yellow": "#deb350"
            },
        },
        container: {
            padding: "1rem",
        },
    },
    plugins: [],
};
