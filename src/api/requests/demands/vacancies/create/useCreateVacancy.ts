import { createVacancy } from './createVacancy'

import { useMutation } from 'src/hooks/ReactQuery/useMutation'

export const useCreateVacancy = () => useMutation(createVacancy)
