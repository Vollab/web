import { Content } from './Content'

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

import { createPortal } from 'react-dom'

export interface IInfo {
  title?: string
  content?: string
  timeout?: number
  variant?: 'success' | 'error' | 'info'
}

export interface IForwardToast {
  triggerToast: (infos: IInfo[]) => void
}

export const Toast = forwardRef<IForwardToast>((_, ref) => {
  const [infos, setInfos] = useState<IInfo[]>()
  const portalRef = useRef<Element | null>(null)

  const triggerToast = (info: IInfo[]) => {
    setInfos(info)
  }

  useEffect(() => {
    portalRef.current = document.getElementById('modal')
  }, [])

  useImperativeHandle(ref, () => ({ triggerToast }))

  return portalRef.current ? (
    createPortal(
      <ul className='fixed top-4 right-4 z-50 flex flex-col gap-4'>
        {infos?.map((info, index) => (
          <Content info={info} key={index} index={index} />
        ))}
      </ul>,
      portalRef.current
    )
  ) : (
    <></>
  )
})

Toast.displayName = 'Toast'
