import { IGetApplicantsParams, getApplicants } from './getApplicants'

import { useQuery } from 'src/hooks/ReactQuery/useQuery'

interface IUseApplicantsQuery {
  response: { enrollments: any }
}

export const useApplicants = ({
  demand_id,
  vacancy_id
}: Partial<IGetApplicantsParams>) =>
  useQuery<IUseApplicantsQuery>(
    ['applicants', demand_id || '', vacancy_id || ''],
    () => {
      if (demand_id && vacancy_id)
        return getApplicants({ demand_id, vacancy_id })
    },
    {
      enabled: !!(demand_id && vacancy_id),
      refetchOnMount: true,
      refetchOnWindowFocus: true
    }
  )
