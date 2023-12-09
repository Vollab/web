import { baseUrl, generateResponse, getCache, getHeaders } from '.'
import { IApiParams } from './types'

export const get = async ({
  url,
  token,
  options,
  revalidate,
  customHeader,
  render = 'SSG',
  service = 'auth'
}: IApiParams) =>
  fetch(`${baseUrl(service)}${url}`, {
    cache: getCache(render, revalidate),
    headers: customHeader || getHeaders({ options, token }),
    next: { revalidate: revalidate || undefined },
    ...options
  }).then(generateResponse)
