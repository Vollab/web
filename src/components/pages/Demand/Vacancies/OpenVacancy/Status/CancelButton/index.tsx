'use client'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { TVacancy } from 'src/hooks/api/demands/useDemand/types'
import { UseApplication } from 'src/hooks/api/useApplication'

import { EnrollmentStatus } from 'types-vollab/dist/src/shared/enrollment'

export interface ICancelButtonProps {
  id: TVacancy['id']
  status: EnrollmentStatus
}
export const CancelButton = ({ id, status }: ICancelButtonProps) => {
  const { cancelApplication } = UseApplication()

  return status === 'APPROVED' ? (
    <Button
      color='error'
      onClick={() => cancelApplication(id)}
      className='py-3 rounded-none flex-1'
    >
      Cancelar
    </Button>
  ) : (
    <></>
  )
}
