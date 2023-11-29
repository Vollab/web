import { Demand } from 'types-vollab/dist/shared/demand'
import { User } from 'types-vollab/dist/shared/user'
import { Vacancy } from 'types-vollab/dist/shared/vacancy'

export type TDemand = Demand & {
  vacancies: Vacancy[]
  orderer: User & {
    avatar: string
  }
}

interface IUseDemandsResponse {
  demands: TDemand[]
}

export interface IUseDemandsQuery {
  response: IUseDemandsResponse
}
