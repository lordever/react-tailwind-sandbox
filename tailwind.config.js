/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Space   Mono', 'sans-serif']
            },
            fontSize: {
                'preset-1': ['48px', {
                    lineHeight: '71px',
                    letterSpacing: '-1px',
                    fontWeight: '700'
                }],
                'preset-2': ['32px', {
                    lineHeight: "47px",
                    letterSpacing: '-0.67px',
                    fontWeight: '700'
                }],
                'preset-3': ['24px', {
                    lineHeight: '36px',
                    letterSpacing: '0px',
                    fontWeight: '700'
                }],
                'preset-4': ['20px', {
                    lineHeight: '30px',
                    letterSpacing: '0px',
                    fontWeight: '700'
                }],
                'preset-5': ['16px', {
                    lineHeight: '24px',
                    letterSpacing: '0px',
                    fontWeight: '700'
                }],
                'preset-6': ['13px', {
                    lineHeight: '19px',
                    letterSpacing: '0px',
                    fontWeight: '700'
                }],
            },
            colors: {
                'gray-600': '#3D6666',
                'gray-550': '#547878',
                'gray-500': '#5E7A7D',
                'gray-400': '#7F9D9F',
                'gray-300': '#9EBBBD',
                'gray-200': '#C5E4E7',
                'gray-50': '#F3F9FA',
                'green-900': '#00474B',
                'green-800': '#085C61',
                'green-400': '#26C2AE',
                'green-200': '#9FE8DF',
                'orange-400': '#E17052',
            }
        },
    },
    plugins: [],
}

