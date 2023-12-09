import { api } from 'src/api/core'

export type TUpdateAvatar = (data?: FormData) => Promise<void>

export const updateAvatar: TUpdateAvatar = async data => {
  if (data)
    api.put({
      data,
      url: '/avatar',
      customHeader: { 'Content-Type': 'multipart/form-data' }
    })
}
