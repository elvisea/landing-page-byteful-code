import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://bytefulcode.tech/sitemap.xml',
    host: 'https://bytefulcode.tech'
  }
}