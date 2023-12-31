import { IApiParams, IGetHeadersParams } from './types'

import { get } from './get'
import { post } from './post'
import { put } from './put'

export const baseUrl = (service: 'auth' | 'demand' | 'vacancy') => {
  switch (service) {
    case 'demand':
      return process.env.NEXT_PUBLIC_API_DEMAND_URL

    case 'vacancy':
      return process.env.NEXT_PUBLIC_API_VACANCY_URL

    default:
      return process.env.NEXT_PUBLIC_API_AUTH_URL
  }
}

export const getHeaders = ({ options, token }: IGetHeadersParams) => {
  const headersWithToken = {
    'Content-Type': 'application/json',
    ...options?.headers,
    Authorization: `Bearer ${token}`
  }

  const headersWithoutToken = {
    'Content-Type': 'application/json',
    ...options?.headers
  }

  return token ? headersWithToken : headersWithoutToken
}

export const getCache = (
  render: IApiParams['render'],
  revalidate: IApiParams['revalidate']
) =>
  revalidate === undefined
    ? render === 'SSG'
      ? 'force-cache'
      : 'no-store'
    : undefined

export const generateResponse = (res: Response) => {
  if (!res.ok) throw new Error('GET ERROR')
  if (res) return res.json()
  return res
}

export const api = { get, post, put }
