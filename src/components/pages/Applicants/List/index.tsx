'use client'

import { Applicant } from './Applicant'

import { useRouter } from 'next/navigation'

import { useEffect } from 'react'

import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'
import { useDemand } from 'src/api/requests/demands/get/useDemand'
import { useApplicants } from 'src/api/requests/demands/vacancies/getApplicants/useApplicants'

import { colors } from 'src/styles/custom/colors'

import { Loading } from 'src/components/shared/atoms/Loading'

import { IApplicantsProps } from '..'

export const List = ({ demand_id, vacancy_id }: IApplicantsProps) => {
  const { push } = useRouter()
  const { data, isLoading } = useApplicants({ demand_id, vacancy_id })
  const { data: userData, isFetched: isUserFetched } = useCurrentUser()
  const { data: demandsData, isFetched: isDemandFetched } = useDemand({
    id: demand_id
  })

  useEffect(() => {
    if (isUserFetched && isDemandFetched) {
      if (demandsData?.demand.orderer.id !== userData?.user.id) push('/demands')
    }
  }, [demandsData, isDemandFetched, isUserFetched, push, userData])

  return (
    <ul className='flex flex-col gap-4 pb-6 relative'>
      {isLoading ? (
        <Loading
          fill={colors.primary[500]}
          className='left-1/2 -translate-x-1/2'
        />
      ) : (
        data?.enrollments.map(({ candidate_id, status }: any, index: any) => (
          <li key={index}>
            <Applicant
              candidate_id={candidate_id}
              vacancy_id={vacancy_id}
              demand_id={demand_id}
              status={status}
            />
          </li>
        ))
      )}
    </ul>
  )
}
