'use client'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { UseApplication } from 'src/hooks/api/useApplication'

import { IVacancy } from 'src/requests/demands/getDemand/types'

export interface ICancelButtonProps {
  id: IVacancy['id']
  status: IVacancy['status']
}

export const ConfirmButton = ({ id, status }: ICancelButtonProps) => {
  const { confirmApplication } = UseApplication()

  return status === 'approved' ? (
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
