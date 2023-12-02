import {
  Params,
  Response
} from 'types-vollab/dist/v2/demands/api/demands/[id]/GET'

export type TDemand = Response['demand']
export type TVacancy = NonNullable<TDemand['vacancies']>[number]
export type TEnrollmentStatus = NonNullable<TVacancy['enrollment']>['status']

export type TGetDemand = (params: Params) => Promise<Response>
