'use client'

import { Title } from './Title'

import { AvatarButton } from 'src/components/shared/groups/Buttons/AvatarButton'
import { BackButton } from 'src/components/shared/groups/Buttons/BackButton'

import { infos } from 'src/static/infos'

import { useAvatar } from 'src/hooks/api/users/useAvatar'

import { IDemandResponse } from 'src/requests/demands/demand'

interface IHeaderProps {
  id?: IDemandResponse['demand']['id']
  title?: IDemandResponse['demand']['title']
  status?: IDemandResponse['demand']['status']
  ordererId?: IDemandResponse['demand']['orderer']['id']
}

export const Header = ({ id, status, ordererId }: IHeaderProps) => {
  const { data } = useAvatar({ id: ordererId })

  const statusColor = status ? infos.demandStatus[status].color : ''
  const statusLabel = status ? infos.demandStatus[status].label : ''

  return (
    <header className='grid grid-cols-[24px_1fr_1fr] py-4 items-center gap-2 px-4 shadow-md'>
      <BackButton />

      <div className='flex flex-col gap-1'>
        <Title />

        <span className='font-medium text-lg' style={{ color: statusColor }}>
          {statusLabel}
        </span>
      </div>

      <AvatarButton route={`/users/${id}`} avatar={data?.avatar} />
    </header>
  )
}
