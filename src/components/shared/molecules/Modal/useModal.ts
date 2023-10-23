import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

export const useModal = ({ ref, onBgClickProp }: any) => {
  const [mounted, setMounted] = useState(false)
  const portalRef = useRef<Element | null>(null)
  const [modal, setModal] = useState({ open: false })

  const onBackgroundClick = () => {
    setModal({ open: false })
  }

  const triggerModal = ({ open }: { open: boolean }) => {
    setModal({ open })
  }

  const onKeyDown = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === 'Escape')
        onBgClickProp ? onBgClickProp() : onBackgroundClick()
    },
    [onBgClickProp]
  )

  useImperativeHandle(ref, () => ({ triggerModal }))

  useEffect(() => {
    setMounted(portalRef ? true : false)
  }, [portalRef])

  useEffect(() => {
    portalRef.current = document.getElementById('modal')
  }, [mounted])

  useEffect(() => {
    globalThis.addEventListener('keydown', onKeyDown)

    return () => {
      removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  return { onBackgroundClick, modal, portalRef, mounted }
}
