import { ILeftIconProps } from './LeftIcon/types'
import { IPasswordEyeProps } from './PasswordEye/types'

import { ReactNode } from 'react'

import { TButtonProps, TInputProps, TLabelProps } from 'src/types/react.types'
import { TColors } from 'src/types/styles.types'

export interface IFieldProps extends Omit<TInputProps, 'tw'> {
  error?: any
  color?: TColors
  tw?: { input?: string }
  icon?: ({ fill }: { fill: string }) => ReactNode
  insideButton?: { title: string; onClick: TButtonProps['onClick'] }
}

export interface IUseFieldParams {
  color: TColors
  tw: IFieldProps['tw']
  icon: IFieldProps['icon']
  type: IFieldProps['type']
  error: IFieldProps['error']
  className: IFieldProps['className']
}

export interface IProps {
  field: TLabelProps
  input: TInputProps
  leftIcon: ILeftIconProps
  passwordEye: IPasswordEyeProps
}
