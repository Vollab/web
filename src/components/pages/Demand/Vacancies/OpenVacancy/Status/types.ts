import { TVacancy } from 'src/hooks/api/demands/useDemand/types'

export interface IStatusProps {
  id: TVacancy['id']
  status?: TVacancy['status']
}
