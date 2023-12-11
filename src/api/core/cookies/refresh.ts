import { cookies } from 'next/headers'

import { services } from 'src/static/services'

export async function refresh() {
  const cookiesStore = cookies().toString()

  const response = await fetch(`${services.auth}/refresh`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cookie: cookiesStore
    }
  })

  return new Response(response.body, {
    status: 200,
    headers: { 'Set-Cookie': response.headers.getSetCookie().toString() }
  })
}
