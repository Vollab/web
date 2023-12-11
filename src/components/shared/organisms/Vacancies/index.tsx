import { FilledVacancy } from './FilledVacancy'
import { OpenVacancy } from './OpenVacancy'

import { TVacancy } from 'src/utils/addStatusInVacancies'

export const Vacancies = ({ vacancies }: { vacancies?: TVacancy[] }) => (
  <ul
    className='
      flex flex-col gap-6 pt-4
      md:grid grid-cols-2
    '
  >
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
