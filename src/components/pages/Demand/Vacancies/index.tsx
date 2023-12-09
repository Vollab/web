'use client'

import { FilledVacancy } from './FilledVacancy'
import { OpenVacancy } from './OpenVacancy'

import { useDemandContext } from 'src/contexts/Demand'

export const Vacancies = () => {
  const { vacancies } = useDemandContext()

  return (
    <ul className='flex flex-col gap-4 py-4'>
      {vacancies?.map(({ id, open, name, work_mode, ...vacancy }) =>
        open ? (
          <OpenVacancy
            key={id}
            vacancy={{ id, open, name, work_mode, ...vacancy }}
          />
        ) : (
          <FilledVacancy key={id} name={name} work_mode={work_mode} />
        )
      )}
    </ul>
  )
}
