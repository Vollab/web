import { MetadataRoute } from 'next'

const URL = process.env.NEXT_PUBLIC_APP_BASE_URL

const robots = (): MetadataRoute.Robots => ({
  sitemap: `${URL}/sitemap.xml`,
  rules: {
    allow: '/',
    userAgent: '*',
    disallow: []
  }
})

export default robots
