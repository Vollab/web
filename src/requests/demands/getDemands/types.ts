import { IUseDemandsQuery } from 'src/hooks/api/demands/useDemands/types'

export type TGetDemands = () => Promise<IUseDemandsQuery['response']>
