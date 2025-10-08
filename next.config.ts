import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:'http',
        hostname:'localhost',
        port: '8000',
        pathname: '/**',
      },
       {
      protocol: 'http',
      hostname: 'res.cloudinary.com',
      pathname: '/**',
    },
    ]
  }
};

export default nextConfig;
