import { ICookiesParams } from './types'

import { services } from 'src/static/services'

export async function getSetCookies({
  route,
  request,
  service = 'auth'
}: ICookiesParams) {
  const reqBody = JSON.stringify(await request?.json())

  const response = await fetch(`${services[service]}${route}`, {
    method: 'POST',
    body: reqBody,
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
