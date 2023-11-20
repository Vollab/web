import {
  CandidateSignUpRequest,
  CandidateSignUpResponse
} from 'types-vollab/dist/routes/candidates/sign-up'
import { Role } from 'types-vollab/dist/shared/role'

export interface IUseSignUpParams {
  role: Role
}

export interface IUseCandidateSignUpMutation {
  request: CandidateSignUpRequest
  response: CandidateSignUpResponse
}
