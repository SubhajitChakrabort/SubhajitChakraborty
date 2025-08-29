/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static exports
    domains: ['images.unsplash.com'],
  },
  // Add this if your app is not in the root URL (e.g., /portfolio/)
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
  trailingSlash: true, // Helps with static exports
}

export default nextConfig