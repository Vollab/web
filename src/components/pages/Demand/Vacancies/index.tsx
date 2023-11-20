import { FilledVacancy } from './FilledVacancy'
import { OpenVacancy } from './OpenVacancy'

import { DemandResponse } from 'types-vollab/dist/routes/demands/id'

export interface IVacanciesProps {
  vacancies?: DemandResponse['vacancies']
}

export const Vacancies = ({ vacancies }: IVacanciesProps) => (
  <ul className='flex flex-col gap-4 py-4'>
    {vacancies?.map(
      ({ id, open, name, work_mode, city, description, state, status }) =>
        open ? (
          <OpenVacancy
            id={id}
            key={id}
            name={name}
            city={city}
            state={state}
            status={status}
            work_mode={work_mode}
            description={description}
          />
        ) : (
          <FilledVacancy key={id} name={name} work_mode={work_mode} />
        )
    )}
  </ul>
)
