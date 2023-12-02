'use client'

import { CancelButton } from '../CancelButton'
import { ConfirmButton } from '../ConfirmButton'

import { useCallback, useEffect, useState } from 'react'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { IInfo } from 'src/components/shared/molecules/Toast'

import { useDemandContext } from 'src/contexts/Demand'
import { useToastContext } from 'src/contexts/Toast'

import { infos } from 'src/static/infos'

import { useEnroll } from 'src/hooks/api/useEnroll'

import { transformToArray } from 'src/utils/transformToArray'

import {
  TEnrollmentStatus,
  TVacancy
} from 'src/requests/demands/getDemand/types'

interface IStatusProps {
  id: TVacancy['id']
  status?: TEnrollmentStatus
}

export const Status = ({ status, id }: IStatusProps) => {
  const { demand, isOwner } = useDemandContext()
  const { toastRef } = useToastContext()
  const [enrollmentStatus, setEnrollmentStatus] = useState(status)
  const { mutate, data, isSuccess, error, isError } = useEnroll()

  const onEnrollClick = () => {
    if (isOwner)
      toastRef?.current?.triggerToast([
        {
          variant: 'info',
          content:
            'Você não pode candidatar-se a uma vaga de sua própria demanda!'
        }
      ])
    else {
      demand?.id && mutate({ demand_id: demand.id, vacancy_id: id })
    }
  }

  const onError = useCallback(() => {
    const errors: { message: string }[] = transformToArray(error)
    const infos: IInfo[] = []

    errors.forEach(error => {
      infos.push({ content: error.message, variant: 'error' })
    })

    toastRef?.current?.triggerToast(infos)
  }, [error, toastRef])

  useEffect(() => {
    isError && onError()
  }, [isError, onError])

  useEffect(() => {
    if (isSuccess) {
      setEnrollmentStatus(data?.enrollment.status)

      toastRef?.current?.triggerToast([
        { content: 'Candidatado com sucesso!', variant: 'success' }
      ])
    }
  }, [data?.enrollment.status, isSuccess, toastRef])

  return enrollmentStatus ? (
    <footer>
      <div className='mt-2 py-3 px-4 flex flex-col gap-1'>
        <span className='font-medium text-lg'>Candidatado</span>

        <span
          style={{ color: infos.enrollmentStatus[enrollmentStatus].color }}
          className='font-medium text-lg'
        >
          {infos.enrollmentStatus[enrollmentStatus].label}
        </span>
      </div>

      <div className='w-full flex mt-2'>
        <ConfirmButton id={id} status={enrollmentStatus} />
        <CancelButton id={id} status={enrollmentStatus} />
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
