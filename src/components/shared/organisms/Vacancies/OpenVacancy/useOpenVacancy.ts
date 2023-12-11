import { useRef } from 'react'

import { useDeleteVacancy } from 'src/api/requests/demands/vacancies/delete/useDeleteVacancy'

import { IForwardModal } from 'src/components/shared/molecules/Modal/types'

import { queryClient } from 'src/contexts/ReactQuery'
import { useToastContext } from 'src/contexts/Toast'
import { useVacancyContext } from 'src/contexts/Vacancy'

export const useOpenVacancy = () => {
  const { toastRef } = useToastContext()
  const { mutateAsync } = useDeleteVacancy()
  const { vacancy, demand } = useVacancyContext()
  const confirmRemoveModalRef = useRef<IForwardModal>(null)

  const id = vacancy?.id

  const onCancelConfirmDeleteVacancyClick = () => {
    confirmRemoveModalRef.current?.triggerModal({ open: false })
  }

  const onConfirmDeleteVacancyClick = async () => {
    confirmRemoveModalRef.current?.triggerModal({ open: false })

    if (!demand?.id || !id) {
      toastRef?.current?.triggerToast([{ variant: 'error' }])
      return
    }

    const { vacancy } = await mutateAsync({
      vacancy_id: id,
      demand_id: demand?.id
    })

    if (!vacancy) {
      toastRef?.current?.triggerToast([{ variant: 'error' }])
      return
    }

    queryClient.refetchQueries(['demand/vacancies', demand.id])

    toastRef?.current?.triggerToast([
      { content: 'Vaga removida!', variant: 'success' }
    ])
  }

  const onDeleteClick = () => {
    confirmRemoveModalRef.current?.triggerModal({ open: true })
  }

  return {
    onDeleteClick,
    confirmRemoveModalRef,
    onConfirmDeleteVacancyClick,
    onCancelConfirmDeleteVacancyClick
  }
}
