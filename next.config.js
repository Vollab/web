/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next-pwa').PWAConfig} */
const withPWA = require('next-pwa')({ dest: 'public' })

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: false, images: { domains: [] } }

module.exports = nextConfig
