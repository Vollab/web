import { IUseCandidateSignUpMutation } from './types'

import { useMutation } from 'src/hooks/useMutation'

import { avatar } from 'src/requests/avatar'
import { activityAreas } from 'src/requests/candidates/activityAreas'
import { signUp } from 'src/requests/candidates/signup'
import { links } from 'src/requests/links'
import { signIn } from 'src/requests/signin'

export const useCandidateSignUp = () =>
  useMutation<IUseCandidateSignUpMutation>(async request => {
    const activityAreasIds = request.activityAreas.map(({ value }) => value)
    const signInData = {
      email: request.signup.email,
      password: request.signup.password
    }

    await signUp(request.signup)
    await signIn(signInData)
    await links(request.links)
    await avatar(request.avatar)
    await activityAreas(activityAreasIds)
  })
