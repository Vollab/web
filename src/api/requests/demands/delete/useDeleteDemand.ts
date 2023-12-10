import { IDeleteDemandParams, deleteDemand } from './deleteDemand'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

interface IUseDeleteDemandMutation {
  request: IDeleteDemandParams
  response: { demand: any }
}

export const useDeleteDemand = () =>
  useMutation<IUseDeleteDemandMutation>(deleteDemand)
