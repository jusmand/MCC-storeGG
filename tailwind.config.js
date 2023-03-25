/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "button-100": "#00BCBC",
            },
            margin: {
                30: "119px",
            },
            height: {
                85: "337px",
                100: "400px",
            },
            width: {
                125: "483px",
            },
        },
    },
    plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
}
