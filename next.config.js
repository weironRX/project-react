/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL: process.env.SERVER_URL,
        APP_URL: process.env.APP_URL
    },
    output: "export",
    distDir: "dist",
    basePath: "/project-react",
}

module.exports = nextConfig
