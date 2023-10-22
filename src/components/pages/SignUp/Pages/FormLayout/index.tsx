import { IChildrenProps } from 'src/types/react.types'

interface IFormLayoutProps extends IChildrenProps {
  role: string
  title: string
  content: string
}

export const FormLayout = ({
  role,
  title,
  content,
  children
}: IFormLayoutProps) => (
  <section className='p-6'>
    <header>
      <h1 className='text-h6 font-medium text-secondary-500 mb-3'>{role}</h1>

      <h2 className='text-lg font-medium text-gray-700 mb-2'>{title}</h2>

      <p className='text-gray-500'>{content}</p>
    </header>

    {children}
  </section>
)
