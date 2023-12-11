'use client'

import { CancelButton } from './CancelButton'
import { ConfirmButton } from './ConfirmButton'
import { useStatus } from './useStatus'

import { Button } from 'src/components/shared/groups/Buttons/Button'

export const Status = () => {
  const {
    showStatus,
    statusColor,
    statusLabel,
    onEnrollClick,
    showEnrollButton
  } = useStatus()

  return showStatus ? (
    <footer>
      <div className='mt-2 py-3 px-4 flex flex-col gap-1'>
        <span className='font-medium text-lg'>Candidatado</span>

        <span style={{ color: statusColor }} className='font-medium text-lg'>
          {statusLabel}
        </span>
      </div>

      <div className='w-full flex'>
        <ConfirmButton />
        <CancelButton />
      </div>
    </footer>
  ) : (
    <footer>
      {showEnrollButton && (
        <Button
          color='success'
          onClick={onEnrollClick}
          className='mt-3 w-full rounded-t-none rounded-b-none'
        >
          Candidatar-se
        </Button>
      )}
    </footer>
  )
}
