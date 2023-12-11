import { colors } from 'src/styles/custom/colors'

import { IChildrenProps } from 'src/types/react.types'
import { TColors } from 'src/types/styles.types'

interface IFormLayoutProps extends IChildrenProps {
  role: string
  title: string
  content: string
  color?: TColors
}

export const FormLayout = ({
  role,
  title,
  content,
  children,
  color = 'secondary'
}: IFormLayoutProps) => (
  <section className='p-6'>
    <header>
      <h1
        className='text-h6 font-medium mb-3'
        style={{ color: colors[color][500] }}
      >
        {role}
      </h1>

      <h2 className='text-lg font-medium text-gray-700 mb-2'>{title}</h2>

      <p className='text-gray-500'>{content}</p>
    </header>

    {children}
  </section>
)
