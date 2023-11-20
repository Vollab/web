import { SignInRequest, SignInResponse } from 'types-vollab/dist/routes/sign-in'

export interface IUseSignInMutation {
  response: SignInResponse
  request: SignInRequest
}
