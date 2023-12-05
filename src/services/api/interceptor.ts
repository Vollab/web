interface IInterceptorParams {
  request?: any
  SSR?: boolean
  route: string
  method?: 'POST' | 'PATCH' | 'GET' | 'PUT'
}

export const interceptor = ({
  route,
  request,
  SSR = false,
  method = 'GET'
}: IInterceptorParams) =>
  fetch(`${SSR ? 'http://localhost:3000' : ''}/api${route}`, {
    method,
    body: request ? JSON.stringify(request) : undefined
  }).then(value => value.json())
