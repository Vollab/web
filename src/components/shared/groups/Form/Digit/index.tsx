import { TInputProps } from 'src/types/react.types'

export const Digit = (props: TInputProps) => (
  <input
    maxLength={1}
    pattern='[0-9]+'
    className='h-[60px] w-[60px] bg-gray-50 text-center text-h4 border-2 border-gray-200 rounded-lg outline-none'
    {...props}
  />
)
