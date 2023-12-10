import { IDeleteVacancyParams, deleteVacancy } from './deleteVacancy'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

interface IUseDemandVacancyMutation {
  response: { vacancy: any }
  request: IDeleteVacancyParams
}

export const useDeleteVacancy = () =>
  useMutation<IUseDemandVacancyMutation>(deleteVacancy)
