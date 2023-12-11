import { TVacancy } from 'src/utils/addStatusInVacancies'

export interface IVacanciesProps {
  isOwner?: boolean
  demand_id?: string
  filledByMe?: boolean
  vacancies?: TVacancy[]
}
