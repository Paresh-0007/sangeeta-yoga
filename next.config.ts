import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://localhost:3000",
    "https://transformational-sociably-lochlan.ngrok-free.dev",
    "https://stayfitwithsangeeta.com",
  ],
};

export default nextConfig;
