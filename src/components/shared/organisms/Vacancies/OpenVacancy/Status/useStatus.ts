import { IStatusProps } from './types'

import { useCallback, useEffect, useState } from 'react'

import { useEnroll } from 'src/api/requests/candidate/enroll/useEnroll'
import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

import { IInfo } from 'src/components/shared/molecules/Toast'

import { useDemandContext } from 'src/contexts/Demand'
import { useToastContext } from 'src/contexts/Toast'

import { infos } from 'src/static/infos'

import { TVacancy } from 'src/utils/addStatusInVacancies'
import { transformToArray } from 'src/utils/transformToArray'

export const useStatus = ({ id, status }: IStatusProps) => {
  const { toastRef } = useToastContext()
  const { data: userData } = useCurrentUser()
  const { isOwner, demand } = useDemandContext()
  const { mutateAsync, data, isSuccess, error, isError } = useEnroll()

  const [enrollmentStatus, setEnrollmentStatus] =
    useState<TVacancy['status']>(status)

  const statusColor = enrollmentStatus
    ? infos.enrollmentStatus[enrollmentStatus].color
    : ''

  const statusLabel = enrollmentStatus
    ? infos.enrollmentStatus[enrollmentStatus].label
    : ''

  const onEnrollClick = async () => {
    if (!demand?.id) {
      toastRef?.current?.triggerToast([{}])
      return
    }

    if (isOwner)
      toastRef?.current?.triggerToast([
        {
          variant: 'info',
          content:
            'Você não pode se candidatar a uma vaga da sua própria demanda!'
        }
      ])
    else {
      const { enrollment } = await mutateAsync({
        demand_id: demand.id,
        vacancy_id: id
      })

      if (!enrollment) toastRef?.current?.triggerToast([{}])
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

  return {
    isOwner,
    statusColor,
    statusLabel,
    onEnrollClick,
    status: enrollmentStatus,
    isCandidate: userData?.user.role === 'candidate'
  }
}