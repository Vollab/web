import { useCallback, useEffect } from 'react'

import { useEnroll } from 'src/api/requests/candidate/enroll/useEnroll'
import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

import { IInfo } from 'src/components/shared/molecules/Toast'

import { useToastContext } from 'src/contexts/Toast'
import { useVacancyContext } from 'src/contexts/Vacancy'

import { infos } from 'src/static/infos'

import { transformToArray } from 'src/utils/transformToArray'

export const useStatus = () => {
  const { toastRef } = useToastContext()
  const { data: userData } = useCurrentUser()
  const { vacancy, isOwner, demand } = useVacancyContext()
  const { mutateAsync, data, isSuccess, error, isError } = useEnroll()

  const status = vacancy?.status
  const statusColor = status ? infos.enrollmentStatus[status].color : ''
  const statusLabel = status ? infos.enrollmentStatus[status].label : ''
  const showEnrollButton = userData?.user.role === 'candidate' || isOwner
  const showStatus = status

  const onEnrollClick = async () => {
    if (!demand?.id || !vacancy?.id) {
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
        vacancy_id: vacancy.id
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
      toastRef?.current?.triggerToast([
        { content: 'Candidatado com sucesso!', variant: 'success' }
      ])
    }
  }, [data?.enrollment.status, isSuccess, toastRef])

  return {
    showStatus,
    statusColor,
    statusLabel,
    onEnrollClick,
    showEnrollButton
  }
}
