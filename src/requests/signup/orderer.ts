import { userResponse } from 'src/static/temp/user'

import {
  Request,
  Response
} from 'types-vollab/dist/v2/auth/api/orderers/sign-up/(all)/POST'

type TSignUpOrderer = (request: Request) => Promise<Response>

export const signupOrderer: TSignUpOrderer = async () => {
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
