import { ICookiesParams } from './types'

import { cookies } from 'next/headers'

import { services } from 'src/static/services'

export async function sendCookies({
  route,
  request,
  method = 'GET',
  service = 'auth'
}: ICookiesParams) {
  const cookiesStore = cookies().toString()

  const postHeaders = {
    Cookie: cookiesStore,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const response = await fetch(`${services[service]}${route}`, {
    method,
    headers: method === 'POST' ? postHeaders : { Cookie: cookiesStore },
    body: method === 'POST' ? JSON.stringify(await request?.json()) : undefined
  })

  return new Response(response.body, {
    status: 200
  })
}
