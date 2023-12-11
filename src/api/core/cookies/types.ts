import { TService } from 'src/static/services'

export interface ICookiesParams {
  request?: Request
  route: string
  service?: TService
  contentType?: string
  multipart?: boolean
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'
}
