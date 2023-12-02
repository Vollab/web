import { TSignIn } from './types'

import { userResponse } from 'src/static/temp/user'

export const signIn: TSignIn = async data => {
  console.log('sign-in', userResponse)

  return userResponse

  const response = await fetch('/api/sign-in', {
    body: JSON.stringify(data),
    method: 'post'
  })

  const avatar = await fetch('/api/current-user/avatar')

  return {
    ...(await response.json()),
    avatar: URL.createObjectURL(await avatar.blob())
  }
}
