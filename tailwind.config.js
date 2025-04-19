/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', 'sans-serif']
            },
            fontSize: {
                'preset-1': ['20px', {
                    lineHeight: '130%',
                    letterSpacing: '0.25px',
                    fontWeight: '700'
                }],
                'preset-2-medium': ['13px', {
                    lineHeight: '140%',
                    letterSpacing: '0.0012em',
                    fontWeight: '500'
                }],
                'preset-2-bold': ['13px', {
                    lineHeight: '140%',
                    letterSpacing: '0.0012em',
                    fontWeight: '700'
                }],
                'preset-3': ['13px', {lineHeight: '140%', letterSpacing: '0.25em'}],
            },
            colors: {
                'gray-900': '#48556A',
                'gray-500': '#6E8098',
                'gray-400': '#9DAEC2',
                'gray-200': '#ECF2F8',
            }
        },
    },
    plugins: [],
}

