import { CancelButton } from './CancelButton'
import { ConfirmButton } from './ConfirmButton'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { infos } from 'src/static/infos'

import { Vacancy } from 'types-vollab/dist/routes/demands/id'

export interface IOpenVacancyProps {
  id: Vacancy['id']
  name: Vacancy['name']
  city: Vacancy['city']
  state: Vacancy['state']
  status?: Vacancy['status']
  work_mode: Vacancy['work_mode']
  description: Vacancy['description']
}

export const OpenVacancy = ({
  id,
  name,
  city,
  state,
  status,
  work_mode,
  description
}: IOpenVacancyProps) => (
  <li>
    <article className='flex flex-col gap-1 rounded-2xl shadow-lg  overflow-hidden'>
      <header className='flex items-center justify-between p-4 pb-0'>
        <h4 className='text-h6 font-medium text-primary-500'>{name}</h4>

        <span
          className='font-medium'
          style={{
            color: infos.vacancyWorkMode[work_mode].color
          }}
        >
          {infos.vacancyWorkMode[work_mode].label}
        </span>
      </header>

      <span className='font-medium text-gray-500 px-4'>
        {state}, {city}
      </span>

      <p className='px-4 text-gray-500 mt-1'>{description}</p>

      {status ? (
        <footer>
          <div className='mt-2 py-3 px-4 flex flex-col gap-1'>
            <span className='font-medium text-lg'>Candidatado</span>

            <span
              style={{ color: infos.enrollmentStatus[status].color }}
              className='font-medium text-lg'
            >
              {infos.enrollmentStatus[status].label}
            </span>
          </div>

          <div className='w-full flex mt-2'>
            <ConfirmButton id={id} status={status} />

            <CancelButton id={id} status={status} />
          </div>
        </footer>
      ) : (
        <footer>
          <Button color='success' className='mt-2 py-3  rounded-none'>
            Candidatar-se
          </Button>
        </footer>
      )}
    </article>
  </li>
)
