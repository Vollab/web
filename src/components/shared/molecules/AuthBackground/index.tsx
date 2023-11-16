import { BgSection } from './BgSection'

import { IClassNameProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

export const AuthBackground = ({ className }: IClassNameProps) => {
  const duration = 15
  const secondDelay = duration / 2

  return (
    <div
      className={twMerge(
        'bg-primary-500 fixed top-0 left-0 w-screen h-screen -z-10',
        className
      )}
    >
      <BgSection delay={0} duration={duration} />
      <BgSection delay={secondDelay} duration={duration} />
    </div>
  )
}
