import { userResponse } from 'src/static/temp/user'

import {
  Request,
  Response
} from 'types-vollab/dist/v2/auth/api/candidates/sign-up/(all)/POST'

type TSignUpCandidate = (request: Request) => Promise<Response>

export const signupCandidate: TSignUpCandidate = async () => {
  return userResponse

  // const activityAreasIds = request.activityAreas.map(({ value }) => value)
  // const signInData = {
  //   email: request.signup.email,
  //   password: request.signup.password
  // }

  // await signUp(request.signup)
  // await signIn(signInData)
  // await links(request.links)
  // await avatar(request.avatar)
  // await activityAreas(activityAreasIds)
}
