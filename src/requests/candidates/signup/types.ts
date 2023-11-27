import {
  CandidateSignUpRequest,
  CandidateSignUpResponse
} from 'types-vollab/dist/routes/candidates/sign-up'

export type TSignUp = (
  request: CandidateSignUpRequest
) => Promise<CandidateSignUpResponse>
