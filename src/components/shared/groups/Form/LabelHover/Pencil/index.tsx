import { colors } from 'src/styles/custom/colors'

import { Pencil as PencilIcon } from 'src/assets/icons'

import { IClassNameProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

interface IPencilProps extends IClassNameProps {
  showInput: boolean
}

export const Pencil = ({ showInput, className }: IPencilProps) =>
  !showInput ? (
    <PencilIcon
      fill={colors.gray[500]}
      className={twMerge(
        'hidden min-w-[20px] min-h-[20px] h-5 w-5 group-hover:inline',
        className
      )}
    />
  ) : (
    <></>
  )
