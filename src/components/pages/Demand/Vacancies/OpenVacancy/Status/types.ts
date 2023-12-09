import { TVacancy } from 'src/utils/addStatusInVacancies'

export interface IStatusProps {
  id: TVacancy['id']
  status?: TVacancy['status']
}
