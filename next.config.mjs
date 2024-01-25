/** @type {import('next').NextConfig} */

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
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
  async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: `${API_URL}/:path*`,
          },
        ];
      },
};

export default nextConfig;
