import { Status } from './Status'

import { infos } from 'src/static/infos'

import { IDemandResponse } from 'src/requests/demands/demand'

import { IVacancy } from '..'

interface IOpenVacancyProps {
  demandId: IDemandResponse['demand']['id']
  vacancy: {
    id: IVacancy['id']
    name: IVacancy['name']
    city: IVacancy['city']
    state: IVacancy['state']
    work_mode: IVacancy['work_mode']
    description: IVacancy['description']
  }
}

export const OpenVacancy = ({
  demandId,
  vacancy: { id, name, city, state, work_mode, description }
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

      <Status id={id} demandId={demandId} />
    </article>
  </li>
)
