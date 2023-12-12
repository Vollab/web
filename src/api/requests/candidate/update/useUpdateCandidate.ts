import { updateCandidate } from './updateCandidate'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

export interface IUpdateCandidateMutation {
  response: { candidate: any }
}

export const useUpdateCandidate = () =>
  useMutation<IUpdateCandidateMutation>(updateCandidate)
