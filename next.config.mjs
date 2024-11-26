/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false, // getting an error during build, so turned off this feature
  },
};

export default nextConfig;
