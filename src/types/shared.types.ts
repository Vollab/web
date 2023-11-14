export type TRole = 'candidate' | 'orderer'
export type TVacancyWorkMode = 'hybrid' | 'remote' | 'in_person'
export type TDemandStatus = 'opened' | 'in_progress' | 'completed' | 'canceled'
export type TApplicationStatus = 'refused' | 'pending' | 'approved'
export interface ILink {
  href: string
  label: string
}
