'use client'

import { useRouter } from 'next/navigation'

import { useRef } from 'react'

import { useDeleteDemand } from 'src/api/requests/demands/delete/useDeleteDemand'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { ConfirmModal } from 'src/components/shared/groups/Modals/ConfirmModal'
import { IForwardModal } from 'src/components/shared/molecules/Modal/types'

import { useDemandContext } from 'src/contexts/Demand'
import { queryClient } from 'src/contexts/ReactQuery'
import { useToastContext } from 'src/contexts/Toast'

export const Footer = () => {
  const { push } = useRouter()
  const { demand } = useDemandContext()
  const { toastRef } = useToastContext()
  const { mutateAsync } = useDeleteDemand()
  const confirmModalRef = useRef<IForwardModal>(null)

  const onConfirmClick = async () => {
    confirmModalRef.current?.triggerModal({ open: false })

    if (!demand?.id) {
      toastRef?.current?.triggerToast([{}])
      return
    }

    const { demand: demandResponse } = await mutateAsync({ id: demand.id })

    if (!demandResponse) {
      toastRef?.current?.triggerToast([{}])
      return
    }

    toastRef?.current?.triggerToast([
      { variant: 'success', content: 'Demanda removida!' }
    ])

    queryClient.refetchQueries('demands')

    push('/demands')
  }

  return (
    <>
      <footer>
        <Button
          className='text-error-600 font-semibold text-lg w-full text-center hover:text-error-400'
          onClick={() => {
            confirmModalRef.current?.triggerModal({ open: true })
          }}
        >
          Excluir Demanda
        </Button>
      </footer>

      <ConfirmModal
        ref={confirmModalRef}
        onConfirmClick={onConfirmClick}
        content='Tem certeza que deseja remover essa demanda e todas as informações relacionadas?'
        onCancelClick={() => {
          confirmModalRef.current?.triggerModal({ open: false })
        }}
      />
    </>
  )
}
