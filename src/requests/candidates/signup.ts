import { api } from 'src/services/api'

import {
  CandidateSignUpRequest,
  CandidateSignUpResponse
} from 'types-vollab/dist/routes/candidates/sign-up'

export type TSignUp = (
  request: CandidateSignUpRequest
) => Promise<CandidateSignUpResponse>

export const signUp: TSignUp = request =>
  api.post({ data: request, url: `/candidates/sign-up` })
