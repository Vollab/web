import { Button } from '../../../Buttons/Button'

import { CheckMark } from 'src/assets/icons/CheckMark'

import { IClassNameProps, TButtonProps } from 'src/types/react.types'

import { twMerge } from 'tailwind-merge'

interface IConfirmProps extends IClassNameProps {
  showInput: boolean
  onConfirmClick: TButtonProps['onClick']
}

export const Confirm = ({
  showInput,
  onConfirmClick,
  className
}: IConfirmProps) =>
  showInput ? (
    <Button
      onClick={onConfirmClick}
      className={twMerge(
        `
          flex items-center justify-center h-5 w-5 rounded-md group/confirm bg-gray-50 border border-success-500
          hover:bg-success-500
        `,
        className
      )}
    >
      <CheckMark
        className='
          w-3 fill-success-500
          group-hover/confirm:fill-gray-50
        '
      />
    </Button>
  ) : (
    <></>
  )
