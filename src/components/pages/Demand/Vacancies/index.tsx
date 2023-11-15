import { FilledVacancy } from './FilledVacancy'
import { OpenVacancy } from './OpenVacancy'

import { IDemandResponse } from 'src/requests/demands/getDemand/types'

export interface IVacanciesProps {
  vacancies?: IDemandResponse['vacancies']
}

export const Vacancies = ({ vacancies }: IVacanciesProps) => (
  <ul className='flex flex-col gap-4 py-4'>
    {vacancies?.map(({ id, open, name, work_mode, ...vacancy }) =>
      open ? (
        <OpenVacancy
          id={id}
          key={id}
          name={name}
          work_mode={work_mode}
          {...vacancy}
        />
      ) : (
        <FilledVacancy key={id} name={name} work_mode={work_mode} />
      )
    )}
  </ul>
)
