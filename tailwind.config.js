/** @type {import('tailwindcss').Config} */


export default {
    theme: {
        extend: {
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '200% center' },
                    '100%': { backgroundPosition: '-200% center' },
                },
            },
            animation: {
                shimmer: 'shimmer 1.6s ease-in-out infinite',
            },
        },
    },
}