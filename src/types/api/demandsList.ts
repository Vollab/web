import {
  TApplicationStatus,
  TDemandStatus,
  TVacancyWorkMode
} from '../shared.types'

export interface IDemandList {
  id: string
  title: string
  resume: string
  status: TDemandStatus
  orderer: { id: string; name: string; avatar?: string }
  vacancies: {
    id: string
    name: string
    workMode: TVacancyWorkMode
    status?: TApplicationStatus
  }[]
}

export type TDemandsListResponse = IDemandList[]
