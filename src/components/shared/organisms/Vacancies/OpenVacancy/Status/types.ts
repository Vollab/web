import { TVacancy } from 'src/utils/addStatusInVacancies'

export interface IStatusProps {
  vacancy_id?: string
  demand_id?: string
  id: TVacancy['id']
  status?: TVacancy['status']
}
