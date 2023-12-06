interface IInterceptorParams {
  request?: any
  SSR?: boolean
  route: string
  method?: 'POST' | 'PATCH' | 'GET' | 'PUT'
}

export const interceptor = ({
  route,
  request,
  method = 'GET'
}: IInterceptorParams) =>
  fetch(`/api${route}`, {
    method,
    body: request ? JSON.stringify(request) : undefined
  }).then(value => value.json())
