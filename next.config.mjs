/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tamseelFatima',
  assetPrefix: '/tamseelFatima/', // <-- Added a trailing slash to fix the CSS paths!
  images: {
    unoptimized: true,
  },
  experimental: {
    missingSuspenseWithCSRBypass: true,
  }
}

export default nextConfig