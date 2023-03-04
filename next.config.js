/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'kr'],
    defaultLocale: 'en',
    localeDetection: false,
  },
}

module.exports = nextConfig
