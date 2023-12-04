import { TService } from 'src/static/services'

export interface ICookiesParams {
  data?: any
  route: string
  service?: TService
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH'
}
