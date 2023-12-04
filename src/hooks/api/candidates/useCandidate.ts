import { useQuery } from 'src/hooks/useQuery'

import { getCandidate } from 'src/requests/candidates/candidate'

import type {
  Params,
  Response
} from 'types-vollab/dist/modules/auth/api/users/[id]/GET'

export interface IUseCandidateQuery {
  response: Response
}

export const useCandidate = ({ id }: Params) =>
  useQuery<IUseCandidateQuery>(['users', id], () => getCandidate({ id }))
