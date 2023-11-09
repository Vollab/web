/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next-pwa').PWAConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  ignoreBuildErrors: true,
  images: { domains: [] }
}

module.exports = withPWA(nextConfig)
