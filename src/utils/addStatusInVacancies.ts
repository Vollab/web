import { ArrayValue } from 'src/types/typescript.types'

import { Response as UserVacanciesResponse } from 'types-vollab/dist/src/modules/vacancy/api/current-user/vacancies/GET'
import { Response as DemandVacanciesResponse } from 'types-vollab/dist/src/modules/vacancy/api/demands/[demand_id]/vacancies/GET'
import { EnrollmentStatus } from 'types-vollab/dist/src/shared/enrollment'

type TUserVacancy = ArrayValue<UserVacanciesResponse['vacancies']>
type TDemandVacancy = ArrayValue<DemandVacanciesResponse['vacancies']>
export type TVacancy = TDemandVacancy & { status?: EnrollmentStatus }

interface IAddStatusInVacanciesParams {
  demandVacancies?: TDemandVacancy[]
  userVacancies?: TUserVacancy[]
}

type TAddStatusInVacancies = (
  params: IAddStatusInVacanciesParams
) => TVacancy[] | undefined

export const addStatusInVacancies: TAddStatusInVacancies = ({
  userVacancies,
  demandVacancies
}) => {
  const noUserVacancies = !userVacancies || userVacancies.length === 0
  const noVacancies = !demandVacancies || demandVacancies.length === 0

  if (noUserVacancies || noVacancies) return demandVacancies

  const userVacanciesMap = new Map<string, TUserVacancy>()

  userVacancies.forEach(
    userVacancy =>
      userVacancy.id && userVacanciesMap.set(userVacancy.id, userVacancy)
  )

  return demandVacancies.map(vacancy => {
    const userVacancy = userVacanciesMap.get(vacancy.id)

    return userVacancy
      ? { ...vacancy, status: userVacancy.enrollment_status }
      : vacancy
  })
}
