import { ActivityLabel } from './ActivityLabel'

import { useRouter } from 'next/navigation'

import { DemandsResponse } from 'common/types/routes/demands'

import { colors } from 'src/styles/custom/colors'

import { Image } from 'src/components/shared/atoms/Image'
import { Button } from 'src/components/shared/groups/Buttons/Button'

import { applicationStatusInfo, demandStatusInfo } from 'src/static/infos'

import { UseApplication } from 'src/hooks/api/useApplication'

import { Avatar, Close } from 'src/assets/icons'
import { CheckMark } from 'src/assets/icons/CheckMark'
import { WorkMode } from 'src/assets/icons/WorkMode'

type IDemand = DemandsResponse[number]

interface IDemandProps extends IDemand {}

export const Demand = ({
  id,
  title,
  resume,
  status,
  orderer,
  vacancies
}: IDemandProps) => {
  const { push } = useRouter()
  const applications = vacancies.filter(vacancy => vacancy.status)
  const { cancelApplication, confirmApplication } = UseApplication()

  const onSeeProfileClick = () => {
    push(`/users/${orderer.id}`)
  }

  const onDemandClick = () => {
    push(`/demands/${id}`)
  }

  return (
    <article className='rounded-2xl shadow-md'>
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
          style={{ color: demandStatusInfo[status].color }}
        >
          {demandStatusInfo[status].label}
        </span>

        <p>{resume}</p>
      </Button>

      <footer>
        <Button onClick={onDemandClick} className='text-left px-4'>
          {applications.length !== 0 && (
            <h4 className='text-md font-semibold mt-4'>Candidaturas:</h4>
          )}
        </Button>

        {applications.length !== 0 && (
          <ul className='flex flex-col gap-3 mt-2'>
            {applications.map(
              ({ id, name, work_mode, status }) =>
                status && (
                  <li key={id} className='flex items-center'>
                    <Button
                      onClick={onDemandClick}
                      className='flex gap-2 flex-1 px-4 xs:pr-2'
                    >
                      <div className='flex gap-2 items-center'>
                        <span>{name}</span>

                        <WorkMode work_mode={work_mode} />
                      </div>

                      <span
                        className='font-semibold ml-auto'
                        style={{ color: applicationStatusInfo[status].color }}
                      >
                        {applicationStatusInfo[status].label}
                      </span>
                    </Button>

                    {status === 'approved' && (
                      <Button
                        onClick={() => confirmApplication(id)}
                        className='hidden xs:block group p-1 bg-gray-50 border border-success-500 hover:bg-success-500 rounded-md mr-2'
                      >
                        <CheckMark className='h-3 w-3 fill-success-500 group-hover:fill-gray-50' />
                      </Button>
                    )}

                    <Button
                      onClick={() => cancelApplication(id)}
                      className='group p-1 hidden xs:block pr-4'
                    >
                      <Close className='h-3 w-3 fill-gray-500 group-hover:fill-red-500' />
                    </Button>
                  </li>
                )
            )}
          </ul>
        )}

        <Button onClick={onDemandClick} className='text-left px-4 pb-4'>
          {applications.length !== 0 && (
            <h4 className='text-md font-semibold mt-4'>Vagas:</h4>
          )}

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
