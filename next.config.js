/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/media/:path*",
        destination: `https://reflect.flak-media.workers.dev/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
