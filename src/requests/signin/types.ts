import { SignInRequest, SignInResponse } from 'types-vollab/dist/routes/sign-in'

export type TSignIn = (params: SignInRequest) => Promise<SignInResponse>
