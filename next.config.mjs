const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      '5.imimg.com',
      '4.imimg.com',
      'via.placeholder.com',
      'img.freepik.com',
      'endura-steel.com',
      'encrypted-tbn1.gstatic.com',
      'viraatindustries.com',
      'encrypted-tbn2.gstatic.com',
    ],
  },

  typescript: {
    ignoreBuildErrors: !isDev,
  },

  eslint: {
    ignoreDuringBuilds: !isDev,
  },
};

export default nextConfig;

