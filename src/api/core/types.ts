export interface IApiParams {
  data?: any
  body?: any
  url: string
  token?: string
  method?: string
  customHeader?: any
  revalidate?: number
  options?: RequestInit
  render?: 'SSR' | 'SSG'
  service?: 'auth' | 'demand' | 'vacancy'
}

export interface IGetHeadersParams {
  token: IApiParams['token']
  options: IApiParams['options']
}
