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
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Authorization', value: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}` }
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      }
    ]
  },
};

export default nextConfig;
