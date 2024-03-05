/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/w500/**'
      }
    ] 
  },
};

export default nextConfig;
