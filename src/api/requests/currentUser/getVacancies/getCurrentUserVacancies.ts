import { interceptor } from 'src/api/core/interceptor'

import { Response } from 'types-vollab/dist/src/modules/vacancy/api/current-user/vacancies/GET'

type TGetCurrentUserVacancies = () => Promise<Response>

export const getCurrentUserVacancies: TGetCurrentUserVacancies = () =>
  interceptor({
    method: 'GET',
    service: 'vacancy',
    route: '/current-user/vacancies'
  })
