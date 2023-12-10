'use client'

import { useEnrollment } from 'src/api/requests/enrollment/useEnrollment'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { useToastContext } from 'src/contexts/Toast'

import { EnrollmentStatus } from 'types-vollab/dist/src/shared/enrollment'

export interface IConfirmButtonProps {
  status: EnrollmentStatus
  vacancy_id?: string
  demand_id?: string
}

export const ConfirmButton = ({
  status,
  demand_id,
  vacancy_id
}: IConfirmButtonProps) => {
  const { mutateAccept } = useEnrollment()
  const { toastRef } = useToastContext()

  const onConfirmClick = async () => {
    console.log({ demand_id, vacancy_id })

    if (!demand_id || !vacancy_id) {
      toastRef?.current?.triggerToast([{}])
      return
    }

    const { enrollment } = await mutateAccept({ demand_id, vacancy_id })

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
      color='success'
      onClick={onConfirmClick}
      className='py-3  rounded-none flex-1'
    >
      Confirmar
    </Button>
  ) : (
    <></>
  )
}
