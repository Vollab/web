import { TGetDemands } from './types'

import { demandsResponse } from 'src/static/temp/demands'

export const getDemands: TGetDemands = async () => {
  return demandsResponse

  // const formattedDemands: IUseDemandsQuery['response']['demands'] = []

  // const demands: DemandsResponse['demands'] = (
  //   await (await fetch('/api/demands')).json()
  // ).demands

  // demands.forEach(async demand => {
  //   const orderer: UserResponse = await (
  //     await fetch(`/api/users/${demand.orderer_id}`)
  //   ).json()

  //   const avatar = await fetch(`/api/users/${demand.orderer_id}/avatar`)

  //   const vacancies: VacanciesResponse['vacancies'] = (
  //     await (await fetch(`api/demands/${demand.id}/vacancies`)).json()
  //   ).vacancies

  //   formattedDemands.push({
  //     ...demand,
  //     vacancies,
  //     orderer: {
  //       ...orderer.user,
  //       avatar: URL.createObjectURL(await avatar.blob())
  //     }
  //   })
  // })

  // return { demands: formattedDemands }
}
