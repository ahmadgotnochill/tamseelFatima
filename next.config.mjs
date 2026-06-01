/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    missingSuspenseWithCSRBypass: true,
  }
}
 
export default nextConfig
