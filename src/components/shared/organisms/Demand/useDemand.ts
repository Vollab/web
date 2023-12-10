import { IDemandProps } from './types'

import { useRouter } from 'next/navigation'

import { useAvatar } from 'src/api/requests/avatar/useAvatar'
import { useDemandVacancies } from 'src/api/requests/demands/vacancies/get/useDemandVacancies'

import { infos } from 'src/static/infos'

export const useDemand = ({ demand }: IDemandProps) => {
  const { push } = useRouter()
  const orderer = demand.orderer
  const { data: avatarData } = useAvatar({ id: orderer.id })
  const { data: vacanciesData } = useDemandVacancies({ demand_id: demand.id })

  const statusLabel = infos.demandStatus[demand.status].label
  const statusColor = infos.demandStatus[demand.status].color

  const onSeeProfileClick = () => {
    push(`/users/${orderer.id}`)
  }

  const onDemandClick = () => {
    push(`/demands/${demand.id}`)
  }

  return {
    statusColor,
    statusLabel,
    onDemandClick,
    onSeeProfileClick,
    title: demand.title,
    resume: demand.resume,
    vacancies: vacanciesData?.vacancies,
    orderer: { ...orderer, avatar: avatarData?.avatar }
  }
}
