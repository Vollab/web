import { IDemandResponse } from 'src/requests/demands/demand'

import type { Response as UserVacancies } from 'types-vollab/dist/src/modules/vacancy/api/current-user/vacancies/GET'
import { EnrollmentStatus } from 'types-vollab/dist/src/shared/enrollment'

type TVacancyResponse = NonNullable<IDemandResponse['vacancies']>[number]
export type TUserVacancy = UserVacancies['vacancies'][number]

export type TVacancy = TVacancyResponse & {
  status?: EnrollmentStatus
}

export interface IUseDemandQuery {
  response: {
    vacancies?: TVacancy[]
    demand: IDemandResponse['demand']
  }
}

export type TGetEnrollmentStatus = (params: {
  vacancies: TVacancyResponse[]
  userVacancies?: TUserVacancy[]
}) => TVacancy[] | TVacancyResponse[]
