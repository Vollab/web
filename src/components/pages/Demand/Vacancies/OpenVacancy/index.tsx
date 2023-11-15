import { CancelButton } from './CancelButton'
import { ConfirmButton } from './ConfirmButton'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { applicationStatusInfo, vacancyWorkModeInfo } from 'src/static/infos'

import { IVacancy } from 'src/requests/demands/getDemand/types'

export interface IOpenVacancyProps extends Omit<IVacancy, 'open'> {}

export const OpenVacancy = ({
  id,
  name,
  status,
  location,
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
            color: vacancyWorkModeInfo[work_mode].color
          }}
        >
          {vacancyWorkModeInfo[work_mode].label}
        </span>
      </header>

      <span className='font-medium text-gray-500 px-4'>{location}</span>

      <p className='px-4 text-gray-500 mt-1'>{description}</p>

      {status ? (
        <footer>
          <div className='mt-2 py-3 px-4 flex flex-col gap-1'>
            <span className='font-medium text-lg'>Candidatado</span>

            <span
              style={{ color: applicationStatusInfo[status].color }}
              className='font-medium text-lg'
            >
              {applicationStatusInfo[status].label}
            </span>
          </div>

          <div className='w-full flex'>
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
