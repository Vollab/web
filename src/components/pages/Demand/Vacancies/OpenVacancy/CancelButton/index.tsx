'use client'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { UseApplication } from 'src/hooks/api/useApplication'

import { Enrollment } from 'types-vollab/dist/shared/enrollment'
import { Vacancy } from 'types-vollab/dist/shared/vacancy'

export interface ICancelButtonProps {
  id: Vacancy['id']
  status: Enrollment['status']
}

export const CancelButton = ({ id, status }: ICancelButtonProps) => {
  const { cancelApplication } = UseApplication()

  return status === 'APPROVED' ? (
    <Button
      color='error'
      onClick={() => cancelApplication(id)}
      className='py-3  rounded-none flex-1'
    >
      Cancelar
    </Button>
  ) : (
    <></>
  )
}
