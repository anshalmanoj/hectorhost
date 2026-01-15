/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/billing/:path*',
        headers: [
          { key: 'Host', value: 'billing.hector.host' },
          { key: 'X-Forwarded-Host', value: 'hector.host' },
          { key: 'X-Forwarded-Proto', value: 'https' }
        ],
      },
    ];
  },
};

module.exports = nextConfig;
