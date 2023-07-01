/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  dynamicStartUrlRedirect: true,
})
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
}

module.exports = withPWA(nextConfig)
