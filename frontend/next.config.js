/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_URL: 'https://backend-auto-app.vercel.app/api/api',
    },
};

module.exports = nextConfig;
