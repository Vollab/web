import { FilledVacancy } from './FilledVacancy'
import { OpenVacancy } from './OpenVacancy'

import { IDemandResponse } from 'src/requests/demands/demand'

export type IVacancy = NonNullable<IDemandResponse['vacancies']>[number]

export interface IVacanciesProps {
  vacancies?: IDemandResponse['vacancies']
  demandId: IDemandResponse['demand']['id']
}

export const Vacancies = ({ vacancies, demandId }: IVacanciesProps) => (
  <ul className='flex flex-col gap-4 py-4'>
    {vacancies?.map(
      ({ id, name, work_mode, open, city, state, description }) =>
        open ? (
          <OpenVacancy
            key={id}
            demandId={demandId}
            vacancy={{ id, name, city, state, work_mode, description }}
          />
        ) : (
          <FilledVacancy key={id} name={name} work_mode={work_mode} />
        )
    )}
  </ul>
)
