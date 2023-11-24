import {
  CandidateSignUpRequest,
  CandidateSignUpResponse
} from 'types-vollab/dist/routes/candidates/sign-up'
import { Link } from 'types-vollab/dist/shared/link'
import { Role } from 'types-vollab/dist/shared/role'

export interface IUseSignUpParams {
  role: Role
}

export interface IUseCandidateSignUpMutation {
  response: CandidateSignUpResponse
  request: {
    links: Link[]
    avatar?: FormData
    signup: CandidateSignUpRequest
    activityAreas: { value: string; label: string }[]
  }
}
