/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.jsのpages/apiを使う場合は、ホストマシンへの転送をやめておく必要がある
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // destination: 'http://host.docker.internal:8000/api/:path*/',
        destination: 'http://localhost:8000/api/:path*/',
      },
    ]
  },
};

export default nextConfig;
