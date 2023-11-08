import { IChildrenProps, IClassNameProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

interface ILabelProps extends IChildrenProps, IClassNameProps {
  title: string
  tws?: { title: string }
}

export const Label = ({ children, title, tws, className }: ILabelProps) => (
  <label className={twMerge('flex flex-col gap-2 w-full', className)}>
    <span className={twMerge('font-semibold text-gray-700', tws?.title)}>
      {title}
    </span>

    {children}
  </label>
)
