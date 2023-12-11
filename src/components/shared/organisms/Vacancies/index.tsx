import { IVacanciesProps } from './types'

import { FilledVacancy } from './FilledVacancy'
import { OpenVacancy } from './OpenVacancy'

import { VacancyProvider } from 'src/contexts/Vacancy'

export const Vacancies = ({
  vacancies,
  isOwner,
  demand_id,
  filledByMe
}: IVacanciesProps) => (
  <ul className='DefaultGrid lg:grid-cols-2'>
    {vacancies?.map(vacancy => (
      <VacancyProvider
        vacancy={vacancy}
        key={vacancy?.id}
        isOwner={isOwner}
        demand_id={demand_id}
      >
        {vacancy.open ? (
          <OpenVacancy />
        ) : (
          <FilledVacancy filledByMe={filledByMe} />
        )}
      </VacancyProvider>
    ))}
  </ul>
)
