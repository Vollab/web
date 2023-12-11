import { TService } from 'src/static/services'

interface IInterceptorParams {
  request?: any
  SSR?: boolean

  route: string
  service?: TService
  method?: 'POST' | 'PATCH' | 'GET' | 'PUT' | 'DELETE'
  customHeader?: any
}

export const interceptor = async ({
  SSR,
  route,
  request,

  customHeader,
  method = 'GET'
}: IInterceptorParams) => {
  const apiRoute = SSR ? `http://localhost:3000/api` : '/api'

  return fetch(`${apiRoute}${route}`, {
    method,
    headers: customHeader || undefined,
    body: request ? JSON.stringify(request) : undefined
  }).then(value => value.json())
}
