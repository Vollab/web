import { TGetEnrollmentStatus, TUserVacancy } from './types'

export const getVacanciesWithStatus: TGetEnrollmentStatus = ({
  userVacancies,
  vacancies
}) => {
  const noUserVacancies = !userVacancies || userVacancies.length === 0
  const noVacancies = !vacancies || vacancies.length === 0

  if (noUserVacancies || noVacancies) return vacancies

  const userVacanciesMap = new Map<string, TUserVacancy>()

  userVacancies.forEach(
    userVacancy =>
      userVacancy.id && userVacanciesMap.set(userVacancy.id, userVacancy)
  )

  return vacancies.map(vacancy => {
    const userVacancy = userVacanciesMap.get(vacancy.id)

    return userVacancy
      ? { ...vacancy, status: userVacancy.enrollment_status }
      : vacancy
  })
}
