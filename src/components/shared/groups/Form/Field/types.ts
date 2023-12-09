import { ILeftIconProps } from './LeftIcon/types'
import { IPasswordEyeProps } from './PasswordEye/types'

import { ReactNode } from 'react'

import { TButtonProps, TInputProps } from 'src/types/react.types'
import { TColors } from 'src/types/styles.types'

export interface IFieldProps extends Omit<TInputProps, 'tw'> {
  error?: any
  color?: TColors
  as?: 'label' | 'div'
  tws?: { input?: string }
  icon?: ({ fill }: { fill: string }) => ReactNode
  insideButton?: { title: string; onClick: TButtonProps['onClick'] }
}

export interface IUseFieldParams {
  color: TColors
  icon: IFieldProps['icon']
  type: IFieldProps['type']
  error: IFieldProps['error']
  onBlurProp: IFieldProps['onBlur']
  onFocusProp: IFieldProps['onFocus']
}

export interface IProps {
  input: TInputProps
  leftIcon: ILeftIconProps
  passwordEye: IPasswordEyeProps
}
