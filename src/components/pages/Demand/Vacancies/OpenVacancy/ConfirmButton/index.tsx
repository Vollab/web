'use client'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { UseApplication } from 'src/hooks/api/useApplication'

import { Vacancy } from 'types-vollab/dist/shared/vacancy'

export interface ICancelButtonProps {
  id: Vacancy['id']
  status: Vacancy['status']
}

export const ConfirmButton = ({ id, status }: ICancelButtonProps) => {
  const { confirmApplication } = UseApplication()

  return status === 'APPROVED' ? (
    <Button
      color='success'
      onClick={() => confirmApplication(id)}
      className='py-3  rounded-none flex-1'
    >
      Confirmar
    </Button>
  ) : (
    <></>
  )
}
