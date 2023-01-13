/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['cdn.riderize.com'],
  },
  compiler: {
    styledComponents: true
  },
  nextConfig
}
