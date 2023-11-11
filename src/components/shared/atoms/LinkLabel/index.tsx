import { Button } from '../Button'

import { colors } from 'src/styles/custom/colors'
import sizes from 'src/styles/custom/sizes'

import { Close } from 'src/assets/icons'

import { IClassNameProps, TButtonProps } from 'src/types/react.types'

import { VariantProps, tv } from 'tailwind-variants'

interface ILinkLabelProps extends IClassNameProps {
  title: string
  onClick?: TButtonProps['onClick']
  onRemoveClick?: TButtonProps['onClick']
  color?: VariantProps<typeof liTw>['color']
}

const liTw = tv({
  base: 'rounded-lg flex items-center justify-center m-1',
  defaultVariants: { color: 'primary' },
  variants: {
    color: {
      primary: 'bg-primary-500',
      tertiary: 'bg-tertiary-500',
      secondary: 'bg-secondary-500'
    }
  }
})

export const LinkLabel = ({
  title,
  color,
  onClick,
  className,
  onRemoveClick
}: ILinkLabelProps) => (
  <li className={liTw({ color, className })}>
    <Button
      onClick={onClick}
      className='text-gray-50 pl-3 w-full'
      style={{
        paddingTop: onRemoveClick ? undefined : sizes[2],
        paddingRight: onRemoveClick ? undefined : sizes[3],
        paddingBottom: onRemoveClick ? undefined : sizes[2]
      }}
    >
      {title}
    </Button>

    {onRemoveClick && (
      <Button className='pr-3 pl-2 py-2' onClick={onRemoveClick}>
        <Close fill={colors.gray[50]} className='h-3 w-3' />
      </Button>
    )}
  </li>
)
