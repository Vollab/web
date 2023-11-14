import {
  TApplicationStatus,
  TDemandStatus,
  TVacancyWorkMode
} from '../shared.types'

export interface IDemandResponse {
  id: string
  title: string
  resume: string
  description: string
  status: TDemandStatus
  orderer: { id: string; name: string; avatar?: string }
  vacancies: {
    id: string
    name: string
    open: boolean
    location?: string
    description: string
    workMode: TVacancyWorkMode
    status?: TApplicationStatus
  }[]
}
