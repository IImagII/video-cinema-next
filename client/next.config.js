/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,//чтобы не было видно что наш сайт сделан на NEXT
  env: {
    APP_URL: process.env.NEXT_PUBLIC_URL,
    APP_ENV: process.env.NEXT_PUBLIC_ENV,
  },
  //перезаписываем пути для бекенда
  // async rewrites() {
  //   return [
  //     // {
  //     //   source: '/api/:path*',
  //     //   destination: `http://localhost:4200/api/:path*`,
  //     // },
  //     {
  //       source: '/uploads/:path*',
  //       destination: `http://localhost:4200/uploads/:path*`,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
