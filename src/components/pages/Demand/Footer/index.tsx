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

import { Trash } from 'src/assets/icons/Trash'

export const Footer = () => {
  const { push } = useRouter()
  const { demand, isOwner } = useDemandContext()
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
      <footer className='pb-10 pt-4 content'>
        {isOwner && (
          <Button
            className='group border border-error-500 flex items-center gap-3 font-semibold text-lg text-center mx-auto bg-gray-50 px-4 py-2 rounded-full hover:bg-error-500 hover:border-transparent transition-all duration-200'
            onClick={() => {
              confirmModalRef.current?.triggerModal({ open: true })
            }}
          >
            <Trash className='h-5 w-5 fill-error-500  group-hover:fill-gray-50 transition-all duration-200' />

            <span className='text-error-500 group-hover:text-gray-50 transition-all duration-200'>
              Excluir Demanda
            </span>
          </Button>
        )}
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
