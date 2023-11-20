import { ActivityLabel } from './ActivityLabel'

import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Image } from 'src/components/shared/atoms/Image'
import { Button } from 'src/components/shared/groups/Buttons/Button'

import { infos } from 'src/static/infos'

import { Avatar } from 'src/assets/icons'

import { Demand as IDemand } from 'types-vollab/dist/routes/demands'

interface IDemandProps {
  id: IDemand['id']
  title: IDemand['title']
  resume: IDemand['resume']
  status: IDemand['status']
  showApplications?: boolean
  orderer: IDemand['orderer']
  vacancies: IDemand['vacancies']
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
