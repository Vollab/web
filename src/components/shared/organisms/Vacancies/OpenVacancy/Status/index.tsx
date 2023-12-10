'use client'

import { IStatusProps } from './types'

import { CancelButton } from './CancelButton'
import { ConfirmButton } from './ConfirmButton'
import { useStatus } from './useStatus'

import { Button } from 'src/components/shared/groups/Buttons/Button'

export const Status = ({
  id,
  demand_id,
  vacancy_id,
  status: statusProp
}: IStatusProps) => {
  const {
    isOwner,
    status,
    statusColor,
    statusLabel,
    isCandidate,
    onEnrollClick
  } = useStatus({ status: statusProp, id })

  return status ? (
    <footer>
      <div className='mt-2 py-3 px-4 flex flex-col gap-1'>
        <span className='font-medium text-lg'>Candidatado</span>

        <span style={{ color: statusColor }} className='font-medium text-lg'>
          {statusLabel}
        </span>
      </div>

      <div className='w-full flex mt-2'>
        <ConfirmButton
          status={status}
          vacancy_id={vacancy_id}
          demand_id={demand_id}
        />
        <CancelButton
          status={status}
          vacancy_id={vacancy_id}
          demand_id={demand_id}
        />
      </div>
    </footer>
  ) : (
    <footer style={{ paddingBottom: isCandidate ? 0 : 8 }}>
      {(isCandidate || isOwner) && (
        <Button
          color='success'
          onClick={onEnrollClick}
          className='mt-3 w-full rounded-t-none'
        >
          Candidatar-se
        </Button>
      )}
    </footer>
  )
}
