import { IStatusProps } from './types'

import { useCallback, useEffect, useState } from 'react'

import { IInfo } from 'src/components/shared/molecules/Toast'

import { useDemandContext } from 'src/contexts/Demand'
import { useToastContext } from 'src/contexts/Toast'

import { infos } from 'src/static/infos'

import { useEnroll } from 'src/hooks/api/candidates/useEnroll'
import { TVacancy } from 'src/hooks/api/demands/useDemand/types'

import { transformToArray } from 'src/utils/transformToArray'

export const useStatus = ({ id, status }: IStatusProps) => {
  const { toastRef } = useToastContext()
  const { demand, isOwner } = useDemandContext()
  const { mutate, data, isSuccess, error, isError } = useEnroll()

  const [enrollmentStatus, setEnrollmentStatus] =
    useState<TVacancy['status']>(status)

  const statusColor = enrollmentStatus
    ? infos.enrollmentStatus[enrollmentStatus].color
    : ''

  const statusLabel = enrollmentStatus
    ? infos.enrollmentStatus[enrollmentStatus].label
    : ''

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

  return { status: enrollmentStatus, onEnrollClick, statusColor, statusLabel }
}
