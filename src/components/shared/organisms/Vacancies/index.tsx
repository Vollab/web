import { FilledVacancy } from './FilledVacancy'
import { OpenVacancy } from './OpenVacancy'

import { TVacancy } from 'src/utils/addStatusInVacancies'

export const Vacancies = ({ vacancies }: { vacancies?: TVacancy[] }) => (
  <>
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
  </>
)
