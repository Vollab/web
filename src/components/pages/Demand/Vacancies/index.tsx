import { FilledVacancy } from './FilledVacancy'
import { OpenVacancy } from './OpenVacancy'

import { TDemand } from 'src/requests/demands/getDemand/types'

export interface IVacanciesProps {
  vacancies?: TDemand['vacancies']
}

export const Vacancies = ({ vacancies }: IVacanciesProps) => (
  <ul className='flex flex-col gap-4 py-4'>
    {vacancies?.map(
      ({ id, name, work_mode, open, city, state, description, enrollment }) =>
        open ? (
          <OpenVacancy
            id={id}
            key={id}
            name={name}
            city={city}
            state={state}
            work_mode={work_mode}
            description={description}
            status={enrollment?.status}
          />
        ) : (
          <FilledVacancy key={id} name={name} work_mode={work_mode} />
        )
    )}
  </ul>
)
