/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_PREFIX: process.env.NEXT_PUBLIC_API_PREFIX,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  }
}

module.exports = nextConfig
