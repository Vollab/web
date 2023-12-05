import { IStatusProps } from './types'

import { getEnrollmentStatus } from './functions/getEnrollmentStatus'

import { useCallback, useEffect, useState } from 'react'

import { IInfo } from 'src/components/shared/molecules/Toast'

import { useDemandContext } from 'src/contexts/Demand'
import { useToastContext } from 'src/contexts/Toast'

import { infos } from 'src/static/infos'

import { useEnroll } from 'src/hooks/api/candidates/useEnroll'
import { useCurrentUser } from 'src/hooks/api/currentUser/useCurrentUser'
import { useVacancies } from 'src/hooks/api/currentUser/useVacancies'

import { transformToArray } from 'src/utils/transformToArray'

import { EnrollmentStatus } from 'types-vollab/dist/src/shared/enrollment'

export const useStatus = ({ id, demandId }: IStatusProps) => {
  const { toastRef } = useToastContext()
  const { data: userData } = useCurrentUser()
  const { data: userVacanciesData } = useVacancies()
  const { demand, isOwner } = useDemandContext()
  const { mutate, data, isSuccess, error, isError } = useEnroll()

  const initialEnrollmentStatus = getEnrollmentStatus({
    demandId,
    vacancyId: id,
    userId: userData?.user.id,
    userVacancies: userVacanciesData.vacancies
  })

  const [enrollmentStatus, setEnrollmentStatus] = useState<
    EnrollmentStatus | undefined
  >(initialEnrollmentStatus)

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
