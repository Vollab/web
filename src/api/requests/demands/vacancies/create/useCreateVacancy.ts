import { ICreateVacancyParams, createVacancy } from './createVacancy'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

interface IUseCreateVacancyMutation {
  response: any
  request: ICreateVacancyParams
}

export const useCreateVacancy = () =>
  useMutation<IUseCreateVacancyMutation>(createVacancy)
