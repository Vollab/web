import { useRouter } from 'next/navigation'

import { useEffect } from 'react'

import { useApplicants } from 'src/api/requests/demands/vacancies/getApplicants/useApplicants'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { useVacancyContext } from 'src/contexts/Vacancy'

export const Applications = () => {
  const { push } = useRouter()
  const { vacancy, isOwner, demand } = useVacancyContext()
  const { data, refetch } = useApplicants({
    vacancy_id: vacancy?.id,
    demand_id: demand?.id
  })

  const applicantsQuantity = data?.enrollments ? data.enrollments.length : 0

  const onApplicantsClick = () => {
    push(`/demands/${demand?.id}/applicants/${vacancy?.id}`)
  }

  useEffect(() => {
    refetch()
  }, [refetch])

  return isOwner ? (
    <Button
      onClick={onApplicantsClick}
      className='pl-4 pt-2 text-warning-600 hover:text-warning-500 text-left'
    >
      Candidaturas ({applicantsQuantity})
    </Button>
  ) : (
    <></>
  )
}
