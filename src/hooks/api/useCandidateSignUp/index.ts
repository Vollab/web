import { IUseCandidateSignUpMutation } from './types'

import { useMutation } from 'src/hooks/useMutation'

import { api } from 'src/services/api'

export const useCandidateSignUp = () =>
  useMutation<IUseCandidateSignUpMutation>(async request => {
    await api.post({
      data: request.signup,
      url: `/candidates/sign-up`
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

    const activityAreas = request.activityAreas.map(({ value }) => value)

    for (let i = 0; i < activityAreas.length; i++)
      await api.post({
        url: `/candidates/activity-area/${activityAreas[i]}`
      })

    if (request.links)
      for (let i = 0; i < request.links.length; i++)
        await api.post({
          url: `/api/users/links`,
          data: { url: request.links[i].href, text: request.links[i].label }
        })
  })
