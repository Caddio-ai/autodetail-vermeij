import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/bedankt'],
    },
    sitemap: 'https://autodetail-vermeij.nl/sitemap.xml',
  }
}
