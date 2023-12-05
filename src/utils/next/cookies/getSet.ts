import { ICookiesParams } from './types'

import { services } from 'src/static/services'

export async function getSetCookies({
  route,
  request,
  method = 'GET',
  service = 'auth'
}: ICookiesParams) {
  const response = await fetch(`${services[service]}${route}`, {
    method
  })

  return new Response(response.body, {
    status: 200,
    headers: { 'Set-Cookie': response.headers.getSetCookie().toString() }
  })
}
