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
  }).then(async res => {
    const response = await res.json()

    if (response.errors) {
      const errorMessage = response.errors.message

      switch (errorMessage) {
        case 'Something went wrong':
          throw new Error('Algo deu errado!')

        default:
          throw new Error(response.errors.message)
      }
    }

    return response
  })
