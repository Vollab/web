import { LinkLabel } from '../../atoms/LinkLabel'
import { Button } from '../../groups/Buttons/Button'
import { Field } from '../../groups/Form'

import { useState } from 'react'

import { IClassNameProps, TSetState } from 'src/types/react.types'

import { useForm } from 'react-hook-form'

export interface ILink {
  title: string
  link: string
}

interface ILinksFormProps extends IClassNameProps {
  links: ILink[]
  color?: 'primary' | 'secondary' | 'tertiary'
  setLinks: TSetState<ILink[]>
}

export const LinksForm = ({
  links,
  setLinks,
  className,
  color = 'primary'
}: ILinksFormProps) => {
  const [limitError, setLimitError] = useState(false)
  const [linkError, setLinkError] = useState<{ message: string }>()
  const [titleError, setTitleError] = useState<{ message: string }>()

  const { handleSubmit, register } = useForm({
    defaultValues: { link: '', title: '' }
  })

  const onLinkFocus = () => {
    setLinkError(undefined)
  }

  const onTitleFocus = () => {
    setTitleError(undefined)
  }

  const onAddLinkClick = (values: any) => {
    const link = values.link
    const title = values.title

    if (!link) setLinkError({ message: 'Informe um Link' })
    if (!title) setTitleError({ message: 'Informe um Título' })

    if (!link || !title) return

    const titleAlreadyExists = links.find(prevItem => prevItem.title === title)
    const linkAlreadyExists = links.find(prevItem => prevItem.link === link)

    if (linkAlreadyExists) setLinkError({ message: 'Link ja existe' })
    if (titleAlreadyExists) setTitleError({ message: 'Título ja existe' })

    if (linkAlreadyExists || titleAlreadyExists) return

    const hitMaxLimit = links.length === 10

    if (hitMaxLimit) {
      setLimitError(true)
      return
    }

    setLinks(prev => [...prev, { link: String(link), title: String(title) }])
  }

  const onRemoveLinkClick = (removedTitle: string) => {
    setLimitError(false)

    setLinks(prev => prev.filter(({ title }) => title !== removedTitle))
  }

  return (
    <div className={className}>
      <div className='w-full mb-3'>
        <span>
          Meus Links{' '}
          <span className={limitError ? 'text-red-500 font-bold' : ''}>
            (máximo 10)
          </span>
          :
        </span>

        <ul className='flex pt-2 flex-wrap'>
          {links.map(({ title }, index) => (
            <LinkLabel
              key={index}
              title={title}
              color={color}
              onRemoveClick={() => onRemoveLinkClick(title)}
            />
          ))}
        </ul>
      </div>

      <form
        onSubmit={handleSubmit(onAddLinkClick)}
        className='grid grid-cols-2 gap-2 w-full'
      >
        <Field
          color={color}
          placeholder='Link'
          error={linkError}
          onFocus={onLinkFocus}
          {...register('link')}
          className={`
            col-span-2 text-sm
            ${linkError && 'border-red-500'}
          `}
        />

        <Field
          color={color}
          placeholder='Título'
          error={titleError}
          onFocus={onTitleFocus}
          {...register('title')}
          className={`
            text-sm
            ${titleError && 'border-error-500'}
          `}
        />

        <Button type='submit' color='info' className='w-full px-2 text-sm'>
          Adicionar Link
        </Button>
      </form>
    </div>
  )
}
