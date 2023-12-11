import { Button } from '../../Buttons/Button'
import { CloseButton } from '../../Buttons/CloseButton'

import { forwardRef } from 'react'

import { Modal } from 'src/components/shared/molecules/Modal'
import { IForwardModal } from 'src/components/shared/molecules/Modal/types'

interface IConfirmModalProps {
  content: string
  onCancelClick: () => void
  onConfirmClick: () => void
}

export const ConfirmModal = forwardRef<IForwardModal, IConfirmModalProps>(
  ({ content, onCancelClick, onConfirmClick }, ref) => (
    <Modal ref={ref}>
      <article className='ModalContainer gap-y-6'>
        <header className='flex items-center justify-between'>
          <h3 className='text-xl text-error-500'>Você tem certeza?</h3>

          <CloseButton onClick={onCancelClick} />
        </header>

        <p className='text-gray-500'>
          {content}
          <b className='text-gray-600 font-semibold w-full'>
            {' '}
            Esta ação não poderá ser desfeita.
          </b>
        </p>

        <footer className='flex items-center justify-center gap-x-4'>
          <Button
            className='flex-1 h-10 rounded-xl'
            color='error'
            onClick={onCancelClick}
          >
            Cancelar
          </Button>

          <Button
            className='flex-1 h-10 rounded-xl'
            color='success'
            onClick={onConfirmClick}
          >
            Confirmar
          </Button>
        </footer>
      </article>
    </Modal>
  )
)

ConfirmModal.displayName = 'ConfirmModal'
