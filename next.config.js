/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    optimizeCss: false,
  },
  // Otimiza imagens
  images: {
    unoptimized: true, // Para build mais rápido
  },
  // Compressão
  compress: true,
}

module.exports = nextConfig 