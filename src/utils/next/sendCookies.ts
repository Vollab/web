import { TService } from './getCookies'

import { cookies } from 'next/headers'

import { services } from 'src/static/services'

interface ISendCookiesParams {
  data?: any
  route: string
  service?: TService
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH'
}

export async function sendCookies({
  data,
  route,
  method = 'GET',
  service = 'auth'
}: ISendCookiesParams) {
  const cookiesStore = cookies().toString()

  const contentTypeHeader = data
    ? {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    : undefined

  return fetch(`${services[service]}${route}`, {
    method,
    headers: { Cookie: cookiesStore, ...contentTypeHeader },
    body: data ? JSON.stringify(data) : undefined
  })
}
