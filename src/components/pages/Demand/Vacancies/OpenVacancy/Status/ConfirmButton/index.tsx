'use client'

import { IVacancy } from '../../..'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { UseApplication } from 'src/hooks/api/useApplication'

import { EnrollmentStatus } from 'types-vollab/dist/src/shared/enrollment'

export interface IConfirmButtonProps {
  id: IVacancy['id']
  status: EnrollmentStatus
}

export const ConfirmButton = ({ id, status }: IConfirmButtonProps) => {
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
