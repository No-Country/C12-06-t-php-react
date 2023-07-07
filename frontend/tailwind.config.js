/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '1024px',
            // => @media (min-width: 1024px) { ... }

            lg: '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                OrangeRed: '#EA580C',
                DarkSlateGray: '#1F2937',
                LightGray: '#D1D5DB',
                DarkGray: '#9CA3AF',
                SlateGray: '#6B7280',
                GhostWhite: '#F9FAFB',
                White: '#FFFFFF',
                Black: '#000000',
                RoyalBlue: '#6366F1',
                DarkSlateBlue: '#3730A3',
                LimeGreen: '#1FAF38',
                Gainsboro: '#E8E8E8',
                Coral: '#FB923C',
                DimGray: '#4B5563',
            },

            boxShadow: {
                sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
            },
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
            },
        },
        colors: {},
    },
    plugins: [],
};
