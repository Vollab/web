import { getUserCandidate } from './getUser'

import { useQuery } from 'src/hooks/ReactQuery/useQuery'

export interface IUseUserCandidateQuery {
  response: { candidate: any }
}

export const useUserCandidate = ({ id }: { id?: string }) =>
  useQuery<IUseUserCandidateQuery>(
    ['candidates', id || ''],
    () => getUserCandidate({ id: id || '' }),
    { enabled: !!id }
  )
