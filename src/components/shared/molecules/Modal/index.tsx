'use client'

import type { IForwardModal, IModalProps } from './types'

import { useModal } from './useModal'

import { forwardRef } from 'react'

export const Modal = forwardRef<IForwardModal, IModalProps>(
  ({ children, onBackgroundClick: onBgClickProp, ...props }, ref) => {
    const { onBackgroundClick, modal, mounted, portalRef } = useModal({
      ref,
      onBgClickProp
    })

    if (portalRef.current && mounted && modal.open === true)
      return (
        <>
          createPortal(
          <div
            className='fixed z-50 top-0 left-0 right-0 bottom-0 flex items-center justify-center'
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            {...props}
          >
            {children}

            <button
              className='fixed -z-10 w-screen h-screen bg-transparent'
              onClick={onBgClickProp || onBackgroundClick}
            />
          </div>
          , portalRef.current )
        </>
      )

    return <></>
  }
)

Modal.displayName = 'Modal'
