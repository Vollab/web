import { interceptor } from 'src/api/core/interceptor'

type TUpdateAvatar = (request: any) => Promise<{ avatar: any }>

export const updateAvatar: TUpdateAvatar = request =>
  interceptor({ request, method: 'PUT', route: '/current-user/avatar' })
