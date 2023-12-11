'use client'

import { useEnrollment } from 'src/api/requests/enrollment/useEnrollment'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { useToastContext } from 'src/contexts/Toast'
import { useVacancyContext } from 'src/contexts/Vacancy'

export const CancelButton = () => {
  const { toastRef } = useToastContext()
  const { mutateUnenroll } = useEnrollment()
  const { vacancy, demand } = useVacancyContext()

  const onCancelClick = async () => {
    if (!demand?.id || !vacancy?.id) {
      toastRef?.current?.triggerToast([{}])
      return
    }

    const { enrollment } = await mutateUnenroll({
      demand_id: demand.id,
      vacancy_id: vacancy.id
    })

    if (!enrollment) {
      toastRef?.current?.triggerToast([{}])
      return
    }

    toastRef?.current?.triggerToast([
      { content: 'Candidatura confirmada!', variant: 'success' }
    ])
  }

  return vacancy?.status === 'APPROVED' ? (
    <Button
      color='error'
      onClick={onCancelClick}
      className='py-3  rounded-none flex-1'
    >
      Cancelar
    </Button>
  ) : (
    <></>
  )
}
