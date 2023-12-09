'use client'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { EnrollmentStatus } from 'types-vollab/dist/src/shared/enrollment'

export interface ICancelButtonProps {
  status: EnrollmentStatus
}

export const CancelButton = ({ status }: ICancelButtonProps) =>
  status === 'APPROVED' ? (
    <Button color='error' className='py-3 rounded-none flex-1'>
      Cancelar
    </Button>
  ) : (
    <></>
  )
