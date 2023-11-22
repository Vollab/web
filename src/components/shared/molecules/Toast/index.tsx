import { Content } from './Content'

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

import { AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

export interface IInfo {
  title?: string
  content: string
  timeout?: number
  variant: 'success' | 'error'
}

export interface IForwardToast {
  triggerToast: (info: IInfo) => void
}

export const Toast = forwardRef<IForwardToast>((_, ref) => {
  const [info, setInfo] = useState<IInfo>()
  const [showing, setShowing] = useState(false)
  const portalRef = useRef<Element | null>(null)

  const triggerToast = (info: IInfo) => {
    setInfo(info)
    setShowing(true)

    setTimeout(() => {
      setShowing(false)
    }, info.timeout || 7000)
  }

  useEffect(() => {
    portalRef.current = document.getElementById('modal')
  }, [])

  useImperativeHandle(ref, () => ({ triggerToast }))

  return portalRef.current ? (
    createPortal(
      <AnimatePresence>
        {showing && (
          <Content info={info} onCloseClick={() => setShowing(false)} />
        )}
      </AnimatePresence>,
      portalRef.current
    )
  ) : (
    <></>
  )
})

Toast.displayName = 'Toast'
