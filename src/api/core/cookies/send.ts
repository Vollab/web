import { ICookiesParams } from './types'

import { cookies } from 'next/headers'

import { services } from 'src/static/services'

export async function sendCookies({
  route,
  request,
  method = 'GET',
  multipart = false,
  contentType = 'application/json',
  service = 'auth'
}: ICookiesParams) {
  const cookiesStore = cookies().toString()

  const postHeaders = {
    Cookie: cookiesStore,
    Accept: contentType,
    'Content-Type': contentType
  }

  const response = await fetch(`${services[service]}${route}`, {
    method,
    headers:
      method === 'POST' || method === 'PATCH'
        ? postHeaders
        : { Cookie: cookiesStore },
    body:
      method === 'POST' || method === 'PATCH'
        ? multipart
          ? (request as any)
          : JSON.stringify(await request?.json())
        : undefined
  })

  return new Response(response.body, { status: 200 })
}
