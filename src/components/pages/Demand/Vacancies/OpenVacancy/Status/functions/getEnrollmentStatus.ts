import type { Response as UserVacancies } from 'types-vollab/dist/src/modules/vacancy/api/current-user/vacancies/GET'
import { EnrollmentStatus } from 'types-vollab/dist/src/shared/enrollment'

export type TGetEnrollmentStatus = (params: {
  userId?: string
  demandId?: string
  vacancyId?: string
  userVacancies?: UserVacancies['vacancies']
}) => EnrollmentStatus | undefined

export const getEnrollmentStatus: TGetEnrollmentStatus = ({
  demandId,
  userId,
  userVacancies,
  vacancyId
}) => {
  const noEnrollment =
    !demandId ||
    !userId ||
    !userVacancies ||
    userVacancies.length === 0 ||
    vacancyId

  if (noEnrollment) return undefined

  return 'ACCEPTED'
}
