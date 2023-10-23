import {
  CandidateRequest,
  CandidateResponse
} from 'common/types/signup/candidate'

export interface IUseRegisterResponse {}

export interface IUseCandidateSignUpMutation {
  request: CandidateRequest
  response: CandidateResponse
}
