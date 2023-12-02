'use client'

import { Title } from './Title'

import { AvatarButton } from 'src/components/shared/groups/Buttons/AvatarButton'
import { BackButton } from 'src/components/shared/groups/Buttons/BackButton'

import { infos } from 'src/static/infos'

import { TDemand } from 'src/requests/demands/getDemand/types'

interface IHeaderProps {
  avatar?: string
  id?: TDemand['id']
  title?: TDemand['title']
  status?: TDemand['status']
}

export const Header = ({ id, status, avatar }: IHeaderProps) => {
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

      <AvatarButton route={`/users/${id}`} avatar={avatar} />
    </header>
  )
}
