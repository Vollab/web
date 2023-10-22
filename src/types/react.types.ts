import {
  ButtonHTMLAttributes,
  Dispatch,
  FormHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction
} from 'react'

export type TSetState<State> = Dispatch<SetStateAction<State>>
export type TFormProps = FormHTMLAttributes<HTMLFormElement>
export type TInputProps = InputHTMLAttributes<HTMLInputElement>
export type TDivProps = HTMLAttributes<HTMLDivElement>
export type TLabelProps = HTMLAttributes<HTMLLabelElement>
export type TTextareaProps = HTMLAttributes<HTMLTextAreaElement>
export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export type TAnchorProps = ButtonHTMLAttributes<HTMLAnchorElement>
export type TTimer = string | number | NodeJS.Timeout | undefined

export type TUseReducer<State, Payload> = (
  state: State,
  action: { type: string; payload: Payload }
) => State

export interface IClassNameProps {
  className?: string
}

export interface IChildrenProps extends IClassNameProps {
  children?: ReactNode
}
