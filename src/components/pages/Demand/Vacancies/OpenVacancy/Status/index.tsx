'use client'

import { IStatusProps } from './types'

import { CancelButton } from './CancelButton'
import { ConfirmButton } from './ConfirmButton'
import { useStatus } from './useStatus'

import { Button } from 'src/components/shared/groups/Buttons/Button'

export const Status = ({ status: statusProp, id }: IStatusProps) => {
  const { onEnrollClick, status, statusColor, statusLabel } = useStatus({
    status: statusProp,
    id
  })

  return status ? (
    <footer>
      <div className='mt-2 py-3 px-4 flex flex-col gap-1'>
        <span className='font-medium text-lg'>Candidatado</span>

        <span style={{ color: statusColor }} className='font-medium text-lg'>
          {statusLabel}
        </span>
      </div>

      <div className='w-full flex mt-2'>
        <ConfirmButton status={status} />
        <CancelButton status={status} />
      </div>
    </footer>
  ) : (
    <footer>
      <Button
        color='success'
        onClick={onEnrollClick}
        className='mt-3 w-full rounded-t-none'
      >
        Candidatar-se
      </Button>
    </footer>
  )
}
