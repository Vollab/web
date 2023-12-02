import { TSignIn } from './types'

import { userResponse, userResponse2 } from 'src/static/temp/user'

export const signIn: TSignIn = async data => {
  if (data.email === 'miguelandradebarreto2@gmail.com') {
    console.log('sign-in', userResponse)
    return userResponse
  } else return userResponse2

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
