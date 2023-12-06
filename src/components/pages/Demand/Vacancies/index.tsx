import { FilledVacancy } from './FilledVacancy'
import { OpenVacancy } from './OpenVacancy'

import { TVacancy } from 'src/hooks/api/demands/useDemand/types'

export interface IVacanciesProps {
  vacancies?: TVacancy[]
}

export const Vacancies = ({ vacancies }: IVacanciesProps) => (
  <ul className='flex flex-col gap-4 py-4'>
    {vacancies?.map(
      ({ id, name, work_mode, open, city, state, description, status }) =>
        open ? (
          <OpenVacancy
            key={id}
            vacancy={{ id, name, city, state, work_mode, description, status }}
          />
        ) : (
          <FilledVacancy key={id} name={name} work_mode={work_mode} />
        )
    )}
  </ul>
)
