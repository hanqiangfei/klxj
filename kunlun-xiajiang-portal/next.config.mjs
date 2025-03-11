/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true, // 静态导出时需要禁用图像优化
  },
  // 如果您的网站不是部署在域名根目录，可以设置basePath
  // basePath: '/kunlun-xiajiang',
  
  // 如果您需要支持静态导出的同时使用trailingSlash
  trailingSlash: true,
};

export default nextConfig;

