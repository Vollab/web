import { baseUrl } from '.'
import { IApiParams } from './types'

export const post = async ({
  url,
  data,
  body,
  method,
  service = 'auth'
}: IApiParams) =>
  fetch(`${baseUrl(service)}${url}`, {
    method: method || 'POST',
    body: body || JSON.stringify(data) || undefined
  }).then(async res => {
    const response = await res.json()

    return response
  })
