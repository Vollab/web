import { FilledVacancy } from './FilledVacancy'
import { OpenVacancy } from './OpenVacancy'

import { Response } from 'types-vollab/dist/v2/auth/api/demands/[id]/GET'

export interface IVacanciesProps {
  vacancies?: Response['demand']['vacancies']
}

export const Vacancies = ({ vacancies }: IVacanciesProps) => (
  <ul className='flex flex-col gap-4 py-4'>
    {vacancies?.map(
      ({ id, open, name, work_mode, city, state, description, enrollment }) =>
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
