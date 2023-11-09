'use client'

import { ActivityLabel } from '../ActivityLabel'

import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/atoms/Button'
import { Image } from 'src/components/shared/atoms/Image'

import { demandStatusInfo } from 'src/static/infos'

import { Avatar } from 'src/assets/icons'

import { TDemandStatus, TVacancyWorkMode } from 'src/types/shared.types'

interface IDemandProps {
  id: string
  title: string
  resume: string
  status: TDemandStatus
  orderer: { id: string; name: string; avatar?: string }
  vacancies: { id: string; name: string; workMode: TVacancyWorkMode }[]
}

export const Demand = ({
  id,
  title,
  resume,
  status,
  orderer,
  vacancies
}: IDemandProps) => {
  const { push } = useRouter()

  const onSeeProfileClick = () => {
    push(`/users/${orderer.id}`)
  }

  const onDemandClick = () => {
    push(`/demands/${id}`)
  }

  return (
    <article className='rounded-2xl shadow-md p-4'>
      <header className='flex gap-2 items-center'>
        {orderer.avatar ? (
          <Image
            alt='avatar'
            src={orderer.avatar}
            className='h-11 w-11 rounded-full'
          />
        ) : (
          <Avatar className='h-11 w-11' fill={colors.primary[500]} />
        )}

        <div className='flex flex-col gap-1'>
          <h3 className='text-md font-medium'>{orderer.name}</h3>

          <Button
            onClick={onSeeProfileClick}
            className='text-left text-primary-500 text-sm font-medium'
          >
            Ver perfil
          </Button>
        </div>
      </header>

      <Button onClick={onDemandClick} className='text-left'>
        <h2 className='text-lg font-semibold mt-3'>{title}</h2>

        <span
          className='block mt-1 mb-3 font-medium'
          style={{ color: demandStatusInfo[status].color }}
        >
          {demandStatusInfo[status].label}
        </span>

        <p>{resume}</p>

        <footer>
          <ul className='flex mt-3 flex-wrap gap-2'>
            {vacancies.map(({ id, name, workMode }) => (
              <li key={id}>
                <ActivityLabel name={name} workMode={workMode} />
              </li>
            ))}
          </ul>
        </footer>
      </Button>
    </article>
  )
}
