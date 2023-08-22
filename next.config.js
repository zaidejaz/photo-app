/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com', 'localhost'],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
