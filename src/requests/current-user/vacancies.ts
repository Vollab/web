import { interceptor } from 'src/services/api/interceptor'

import type { Response } from 'types-vollab/dist/src/modules/vacancy/api/current-user/vacancies/GET'

type TGetVacancies = () => Promise<Response>

export const getVacancies: TGetVacancies = () =>
  interceptor({
    method: 'GET',
    service: 'vacancy',
    route: '/current-user/vacancies'
  })
