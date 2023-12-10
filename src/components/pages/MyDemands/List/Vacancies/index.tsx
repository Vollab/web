import { useCurrentUserVacancies } from 'src/api/requests/currentUser/getVacancies/useCurrentUserVacancies'

import { Vacancies as VacanciesList } from 'src/components/shared/organisms/Vacancies'

export const Vacancies = () => {
  const { data } = useCurrentUserVacancies()

  return (
    <VacanciesList
      vacancies={data?.vacancies.map((vacancy: any) => ({
        demand_id: vacancy.demand_id,
        status: vacancy.enrollment_status,
        activity_area: {
          id: vacancy.activity_area_id,
          name: vacancy.activity_area
        },
        ...vacancy
      }))}
    />
  )
}
