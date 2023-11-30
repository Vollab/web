import { TSignIn } from './types'

export const signIn: TSignIn = async data => {
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
