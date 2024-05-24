/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL: process.env.SERVER_URL,
        APP_URL: process.env.APP_URL
    },
    /* Needs to bee uncommented to be rendered on gh pages*/
    /* output: "export", */
    distDir: "dist",
}

module.exports = nextConfig
