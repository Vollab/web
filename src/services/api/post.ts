import { baseUrl, getCache, getHeaders } from '.'
import { IApiParams } from './types'

export const post = async ({
  url,
  data,
  body,
  token,
  method,
  options,
  revalidate,
  customHeader,
  render = 'SSG'
}: IApiParams) =>
  fetch(`${baseUrl}${url}`, {
    ...options,
    mode: 'cors',
    method: method || 'POST',
    cache: getCache(render, revalidate),
    next: { revalidate: revalidate || undefined },
    body: body || JSON.stringify(data) || undefined,
    headers: customHeader || getHeaders({ options, token })
  }).then(res => {
    if (!res.ok) throw new Error('POST ERROR')
    if (res) return res.json()
    return res
  })
