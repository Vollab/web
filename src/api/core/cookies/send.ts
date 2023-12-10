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

  console.log(`SEND - ${method} - ${services[service]}${route}`)

  const response = await fetch(`${services[service]}${route}`, {
    method,
    headers: method !== 'GET' ? postHeaders : { Cookie: cookiesStore },
    body: method !== 'GET' ? JSON.stringify(await request?.json()) : undefined
  })

  return new Response(response.body, { status: 200 })
}
