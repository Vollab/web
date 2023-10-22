import { ILeftIconProps } from './LeftIcon/types'
import { IPasswordEyeProps } from './PasswordEye/types'

import { ReactNode } from 'react'

import { TButtonProps, TDivProps, TInputProps } from 'src/types/react.types'

export interface IFieldProps extends Omit<TInputProps, 'tw'> {
  error?: any
  tw?: { input?: string }
  icon?: ({ fill }: { fill: string }) => ReactNode
  insideButton?: { title: string; onClick: TButtonProps['onClick'] }
}

export interface IUseFieldParams {
  tw: IFieldProps['tw']
  icon: IFieldProps['icon']
  type: IFieldProps['type']
  error: IFieldProps['error']
  className: IFieldProps['className']
}

export interface IProps {
  field: TDivProps
  input: TInputProps
  leftIcon: ILeftIconProps
  passwordEye: IPasswordEyeProps
}
