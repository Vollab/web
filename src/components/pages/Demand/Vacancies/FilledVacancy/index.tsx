import { infos } from 'src/static/infos'

import { TVacancy } from 'src/hooks/api/demands/useDemand/types'

export interface IFilledVacancyProps {
  name: TVacancy['name']
  work_mode: TVacancy['work_mode']
}

export const FilledVacancy = ({ name, work_mode }: IFilledVacancyProps) => (
  <li>
    <article className='flex flex-col rounded-2xl shadow-lg p-4 border border-dashed border-gray-200 bg-gray-100'>
      <header className='flex items-center justify-between'>
        <h4 className='text-h6 font-medium text-gray-500'>{name}</h4>

        <span className='font-medium text-gray-500'>
          {infos.vacancyWorkMode[work_mode].label}
        </span>
      </header>

      <span className='text-gray-500 mt-2 font-bold'>PREENCHIDA</span>
    </article>
  </li>
)
