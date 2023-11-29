import { services } from 'src/static/services'

export type TService = 'auth' | 'demand' | 'vacancy'

interface IGetCookiesParams {
  data?: any
  route: string
  service?: TService
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH'
}

export async function getCookies({
  data,
  route,
  method = 'GET',
  service = 'auth'
}: IGetCookiesParams) {
  const response = await fetch(`${services[service]}${route}`, {
    method,
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  return new Response(response.body, {
    status: 200,
    headers: { 'Set-Cookie': response.headers.getSetCookie().toString() }
  })
}
