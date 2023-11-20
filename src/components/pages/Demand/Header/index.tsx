import { AvatarButton } from 'src/components/shared/groups/Buttons/AvatarButton'
import { BackButton } from 'src/components/shared/groups/Buttons/BackButton'

import { infos } from 'src/static/infos'

import { DemandResponse, Orderer } from 'types-vollab/dist/routes/demands/id'

interface IHeaderProps {
  id?: DemandResponse['id']
  avatar?: Orderer['avatar']
  title?: DemandResponse['title']
  status?: DemandResponse['status']
}

export const Header = ({ status, title, id, avatar }: IHeaderProps) => {
  const statusColor = status ? infos.demandStatus[status].color : ''
  const statusLabel = status ? infos.demandStatus[status].label : ''

  return (
    <header className='grid grid-cols-[24px_1fr_1fr] py-4 items-center gap-2 px-4 shadow-md'>
      <BackButton />

      <div className='flex flex-col gap-1'>
        <h1 className='font-semibold text-h5 text-tertiary-500 font-primary'>
          {title}
        </h1>

        <span className='font-medium text-lg' style={{ color: statusColor }}>
          {statusLabel}
        </span>
      </div>

      <AvatarButton route={`/users/${id}`} avatar={avatar} />
    </header>
  )
}
