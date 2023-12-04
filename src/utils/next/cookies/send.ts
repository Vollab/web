import { ICookiesParams } from './types'

import { cookies } from 'next/headers'

import { services } from 'src/static/services'

export async function sendCookies({
  data,
  route,
  method = 'GET',
  service = 'auth'
}: ICookiesParams) {
  const cookiesStore = cookies().toString()

  const contentTypeHeader = data
    ? { Accept: 'application/json', 'Content-Type': 'application/json' }
    : undefined

  return fetch(`${services[service]}${route}`, {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers: { Cookie: cookiesStore, ...contentTypeHeader }
  })
}
