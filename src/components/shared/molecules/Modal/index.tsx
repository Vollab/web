'use client'

import type { IForwardModal, IModalProps } from './types'

import { Button } from '../../atoms/Button'
import { useModal } from './useModal'

import { forwardRef } from 'react'

import { createPortal } from 'react-dom'

export const Modal = forwardRef<IForwardModal, IModalProps>(
  (
    { children, onBackgroundClick: onBgClickProp, className, ...props },
    ref
  ) => {
    const { onBackgroundClick, modal, mounted, portalRef } = useModal({
      ref,
      onBgClickProp
    })

    if (portalRef.current && mounted && modal.open === true)
      return createPortal(
        <>
          <section
            className={`
              fixed z-50 top-0 left-0 right-0 bottom-0 flex items-center justify-center
              ${className}
            `}
            style={{
              backdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(0,0,0,0.4)'
            }}
            {...props}
          >
            {children}

            <Button
              onClick={onBgClickProp || onBackgroundClick}
              className='fixed -z-10 w-screen h-screen bg-transparent'
            />
          </section>
        </>,
        portalRef.current
      )

    return null
  }
)

Modal.displayName = 'Modal'
