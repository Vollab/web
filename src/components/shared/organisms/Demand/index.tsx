'use client'

import { IDemandProps } from './types'

import { ActivityLabel } from './ActivityLabel'
import { useDemand } from './useDemand'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { Avatar } from 'src/assets/icons'

export const Demand = ({ demand }: IDemandProps) => {
  const {
    title,
    resume,
    orderer,
    vacancies,
    statusColor,
    statusLabel,
    onDemandClick,
    onSeeProfileClick
  } = useDemand({ demand })

  return (
    <article className='rounded-2xl shadow-md flex flex-col'>
      <Button onClick={onSeeProfileClick} className='text-left px-4 pt-4'>
        <header className='flex gap-2 items-center'>
          <Avatar
            src={orderer.avatar}
            fill={colors.primary[500]}
            className='h-11 w-11'
          />

          <div className='flex flex-col gap-1'>
            <h3 className='text-md font-medium'>{orderer.name}</h3>

            <span className='text-left text-primary-500 text-sm font-medium'>
              Ver perfil
            </span>
          </div>
        </header>
      </Button>

      <Button onClick={onDemandClick} className='text-left px-4'>
        <h2 className='text-lg font-semibold mt-3'>{title}</h2>

        <span
          className='block mt-1 mb-3 font-medium'
          style={{ color: statusColor }}
        >
          {statusLabel}
        </span>

        <p>{resume}</p>
      </Button>

      <footer>
        <Button onClick={onDemandClick} className='text-left px-4 pb-4'>
          <ul className='flex mt-3 flex-wrap gap-2'>
            {vacancies?.map(({ id, activity_area, work_mode }) => (
              <li key={id}>
                <ActivityLabel work_mode={work_mode} name={activity_area} />
              </li>
            ))}
          </ul>
        </Button>
      </footer>
    </article>
  )
}
