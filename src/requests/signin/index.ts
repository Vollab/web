import { TSignIn } from './types'

export const signIn: TSignIn = async data => {
  const response = await fetch('/api/sign-in', {body: JSON.stringify(data),
    method: 'post'
  })

  return await response.json()
}
