'use client'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { EnrollmentStatus } from 'types-vollab/dist/src/shared/enrollment'

export interface IConfirmButtonProps {
  status: EnrollmentStatus
}

export const ConfirmButton = ({ status }: IConfirmButtonProps) =>
  status === 'APPROVED' ? (
    <Button color='success' className='py-3  rounded-none flex-1'>
      Confirmar
    </Button>
  ) : (
    <></>
  )
