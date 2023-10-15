import { MetadataRoute } from 'next'

const URL = process.env.NEXT_PUBLIC_APP_BASE_URL

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const languageCodes = ['', '/en', '/es', '/pt']

  const routes = ['']

  const routesSitemap: MetadataRoute.Sitemap = languageCodes.flatMap(code =>
    routes.map(route => ({
      url: `${URL}${code}/${route}`,
      lastModified: new Date().toISOString()
    }))
  )

  return [...routesSitemap]
}

export default sitemap
