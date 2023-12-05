import { ICookiesParams } from './types'

import { cookies } from 'next/headers'

import { services } from 'src/static/services'

export async function sendCookies({ route, service = 'auth' }: ICookiesParams) {
  const cookiesStore = cookies().toString()

  return fetch(`${services[service]}${route}`, {
    method: 'GET',
    headers: { Cookie: cookiesStore }
  })
}
