import { IClassNameProps } from 'src/types/react.types'

export interface ILineMotionProps extends IClassNameProps {
  delay?: number
  duration?: number
  opacity?: [number, number, number, number, number]
}
