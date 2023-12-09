import { IDemandProps } from './types'

import { useRouter } from 'next/navigation'

import { infos } from 'src/static/infos'

import { useAvatar } from 'src/api/requests/avatar/useAvatar'

export const useDemand = ({ demand }: IDemandProps) => {
  const orderer = demand.orderer
  const { push } = useRouter()
  const { data: avatarData } = useAvatar({ id: orderer.id })

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
    vacancies: demand.vacancies,
    orderer: { ...orderer, avatar: avatarData?.avatar }
  }
}
