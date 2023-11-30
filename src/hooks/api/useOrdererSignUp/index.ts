import { IUseOrdererSignUpMutation } from './types'

import { useMutation } from 'src/hooks/useMutation'

import { api } from 'src/services/api'

export const useOrdererSignUp = () =>
  useMutation<IUseOrdererSignUpMutation>(async request => {
    await api.post({
      data: request.signup,
      url: `/orderer/sign-up`
    })

    await api.post({
      data: { email: request.signup.email, password: request.signup.password },
      url: `/sign-in`
    })

    if (request.avatar)
      await api.put({
        url: '/avatar',
        data: request.avatar,
        customHeader: { 'Content-Type': 'multipart/form-data' }
      })

    if (request.links)
      for (let i = 0; i < request.links.length; i++)
        await api.post({
          url: `/api/users/links`,
          data: { url: request.links[i].url, text: request.links[i].text }
        })
  })
