import { IChildrenProps } from 'src/types/react.types'

export const Title = ({ children }: IChildrenProps) => (
  <h2 className='text-xl font-medium'>{children}</h2>
)
