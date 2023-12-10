'use client'

import { useEnrollment } from 'src/api/requests/enrollment/useEnrollment'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { useToastContext } from 'src/contexts/Toast'

import { EnrollmentStatus } from 'types-vollab/dist/src/shared/enrollment'

export interface ICancelButtonProps {
  status: EnrollmentStatus
  vacancy_id?: string
  demand_id?: string
}

export const CancelButton = ({
  status,
  demand_id,
  vacancy_id
}: ICancelButtonProps) => {
  const { toastRef } = useToastContext()
  const { mutateUnenroll } = useEnrollment()

  const onCancelClick = async () => {
    console.log({ demand_id, vacancy_id })

    if (!demand_id || !vacancy_id) {
      toastRef?.current?.triggerToast([{}])
      return
    }

    const { enrollment } = await mutateUnenroll({ demand_id, vacancy_id })

    if (!enrollment) {
      toastRef?.current?.triggerToast([{}])
      return
    }

    toastRef?.current?.triggerToast([
      { content: 'Candidatura confirmada!', variant: 'success' }
    ])
  }

  return status === 'APPROVED' ? (
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
