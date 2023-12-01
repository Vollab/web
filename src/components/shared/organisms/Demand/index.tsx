import { ActivityLabel } from './ActivityLabel'

import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { infos } from 'src/static/infos'

import { TDemand } from 'src/hooks/api/demands/useDemands/types'

import { Avatar } from 'src/assets/icons'

interface IDemandProps {
  id: TDemand['id']
  title: TDemand['title']
  resume: TDemand['resume']
  status: TDemand['status']
  showApplications?: boolean
  orderer: TDemand['orderer']
  vacancies: TDemand['vacancies']
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
          style={{ color: infos.demandStatus[status].color }}
        >
          {infos.demandStatus[status].label}
        </span>

        <p>{resume}</p>
      </Button>

      <footer>
        <Button onClick={onDemandClick} className='text-left px-4 pb-4'>
          <ul className='flex mt-3 flex-wrap gap-2'>
            {vacancies.map(({ id, name, work_mode }) => (
              <li key={id}>
                <ActivityLabel name={name} work_mode={work_mode} />
              </li>
            ))}
          </ul>
        </Button>
      </footer>
    </article>
  )
}
