import { Response } from 'types-vollab/dist/src/modules/demands/api/demands/GET'

export interface IDemandProps {
  demand: Response['demands'][number]
}
