import { TGetDemand } from './types'

import { demandResponse } from 'src/static/temp/demand'

export const getDemand: TGetDemand = async ({ id }) => {
  return demandResponse({ id })

  // const demand = (await (await fetch(`/api/demands/${id}`)).json()).demand
  // const orderer: UserResponse['user'] = (
  //   await (await fetch(`/api/users/${demand.orderer_id}`)).json()
  // ).user
  // const ordererAvatar: string = (
  //   await (await fetch(`/api/users/${demand.orderer_id}/avatar`)).json()
  // ).avatar
  // const vacancies: VacanciesResponse['vacancies'] = (
  //   await (await fetch(`api/demands/${demand.id}/vacancies`)).json()
  // ).vacancies
  // const formattedDemand: Omit<Response['demand'], 'vacancies' | 'orderer'> = {
  //   id,
  //   title: demand.title,
  //   resume: demand.resume,
  //   status: demand.status,
  //   description: demand.description
  // }
  // const formattedOrderer: Response['demand']['orderer'] = {
  //   id: orderer.id,
  //   name: orderer.name,
  //   avatar: ordererAvatar
  // }
  // const formattedVacancies: Response['demand']['vacancies'] = []
  // vacancies.forEach(async vacancy => {
  //   let enrollmentStatus
  //   if (candidateId) {
  //     const enrollment = (
  //       await (
  //         await fetch(
  //           `/api/demands/${id}/vacancies/${vacancy.id}/candidates/${candidateId}`
  //         )
  //       ).json()
  //     ).enrollment
  //     if (enrollment) enrollmentStatus = enrollment.status
  //   }
  //   const activityAreas = (await (await fetch(`/api/activity_areas`)).json())
  //     .activity_areas
  //   const activityArea = activityAreas.find(
  //     ({ id }: any) => id === vacancy.activity_area_id
  //   )
  //   formattedVacancies.push({
  //     id: vacancy.id,
  //     city: vacancy.city,
  //     name: vacancy.name,
  //     open: vacancy.open,
  //     state: vacancy.state,
  //     activity_area: activityArea,
  //     work_mode: vacancy.work_mode,
  //     description: vacancy.description,
  //     enrollment: { status: enrollmentStatus }
  //   })
  // })
  // const formattedResponse: Response = {
  //   demand: {
  //     ...formattedDemand,
  //     orderer: formattedOrderer,
  //     vacancies: formattedVacancies
  //   }
  // }
  // return formattedResponse
}
