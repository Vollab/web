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

  console.log(vacancies)

  return (
    <article className='rounded-2xl shadow-md flex flex-col relative p-4'>
      <Button
        onClick={onDemandClick}
        className='absolute left-0 w-full top-0 h-full z-0 cursor-pointer'
      />

      <header className='flex gap-2 items-center text-left relative z-10'>
        <Button onClick={onSeeProfileClick} className='text-left relative z-10'>
          <Avatar
            src={orderer.avatar}
            fill={colors.primary[500]}
            className='h-11 w-11'
          />
        </Button>

        <Button
          onClick={onDemandClick}
          className='absolute left-0 w-full top-0 h-full z-0'
        />

        <div className='flex flex-col gap-1 relative'>
          <h3 className='text-md font-medium relative z-10'>{orderer.name}</h3>

          <Button
            onClick={onSeeProfileClick}
            className='text-left relative z-10 w-auto inline flex-1'
          >
            <span className='text-left text-primary-500 text-sm font-medium'>
              Ver perfil
            </span>
          </Button>
        </div>
      </header>

      <div className='text-left relative z-10'>
        <Button onClick={onDemandClick} className='text-left'>
          <h2 className='text-lg font-semibold mt-3 break-words'>{title}</h2>

          <span
            className='block mt-1 mb-3 font-medium'
            style={{ color: statusColor }}
          >
            {statusLabel}
          </span>

          <p className='break-words'>{resume}</p>
        </Button>
      </div>

      <footer>
        <ul className='flex mt-3 flex-wrap gap-2 text-left'>
          {vacancies?.map(({ id, activity_area, work_mode }) => (
            <li key={id}>
              <ActivityLabel work_mode={work_mode} name={activity_area} />
            </li>
          ))}
        </ul>
      </footer>
    </article>
  )
}
