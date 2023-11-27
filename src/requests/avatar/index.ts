import { TAvatar } from './types'

import { api } from 'src/services/api'

export const avatar: TAvatar = async data => {
  if (data)
    api.put({
      data,
      url: '/avatar',
      customHeader: { 'Content-Type': 'multipart/form-data' }
    })
}
