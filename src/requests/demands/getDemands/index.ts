import { TGetDemands } from './types'

import { IUseDemandsResponse } from 'src/hooks/api/demands/useDemands/types'

import { DemandsResponse } from 'types-vollab/dist/routes/demands'
import { UserResponse } from 'types-vollab/dist/routes/users/[id]'

export const getDemands: TGetDemands = async () => {
  const formattedDemands: IUseDemandsResponse['demands'] = []

  const demands: DemandsResponse['demands'] = (
    await (await fetch('/api/demands')).json()
  ).demands

  demands.forEach(async demand => {
    const orderer: UserResponse = await (
      await fetch(`/api/users/${demand.orderer_id}`)
    ).json()

    const avatar = await (
      await fetch(`/api/users/${orderer.user}/avatar`)
    ).json()

    const vacancies = (
      await (await fetch(`api/demands/${demand.id}/vacancies/`)).json()
    ).vacancies

    formattedDemands.push({
      vacancies: [],
      orderer: { ...orderer.user, avatar },
      ...demand
    })
  })

  return
}
