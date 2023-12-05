import { IVacancy } from '../..'

import { IDemandResponse } from 'src/requests/demands/demand'

export interface IStatusProps {
  id: IVacancy['id']
  demandId?: IDemandResponse['demand']['id']
}
