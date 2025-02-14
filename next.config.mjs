import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "old.pvcogranby.com",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};
 
export default withNextIntl(nextConfig);