/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        formats: ['image/webp'],
        domains: ['soul-full.keep-calm.ru', 'soul.forma.ru'],
    },
    env: {
        DEV_DB_HOST: 'https://soul-full.keep-calm.ru',
        PROD_DB_HOST: 'https://soul.forma.ru',
        DB_USER: 'soul',
        DB_PASS: 'forma',
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://soul-full.keep-calm.ru/api/:path*',
            },
            {
                source: '/public/slider/:slug/:path*',
                destination: 'https://soul-full.keep-calm.ru/public/slider/:slug/:path*',
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/fonts/TTTravels-DemiBold.woff2',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/fonts/TTTravels-Regular.woff2',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
    webpack(config, { dev, isServer }) {
        if (dev && isServer) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
            config.plugins.push(new ForkTsCheckerWebpackPlugin());
        }
        return config;
    },
};

module.exports = nextConfig;
