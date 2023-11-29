import { LinkLabel } from '../../atoms/LinkLabel'
import { Button } from '../../groups/Buttons/Button'
import { Field } from '../../groups/Form/Field'

import { useState } from 'react'

import { IClassNameProps } from 'src/types/react.types'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { Link } from 'types-vollab/dist/shared/link'

interface ILinksFormProps extends IClassNameProps {
  links: Link[]
  setLinks: (newState: Link[]) => void
  color?: 'primary' | 'secondary' | 'tertiary'
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
    resolver: joiResolver(
      Joi.object({
        href: Joi.string(),
        label: Joi.string().max(16).messages({
          'string.max': 'Limite de 16 caracteres atingido'
        })
      })
    ),
    defaultValues: { href: '', label: '' }
  })

  const onLinkFocus = () => {
    setLinkError(undefined)
  }

  const onTitleFocus = () => {
    setTitleError(undefined)
  }

  const onAddLinkClick = (values: any) => {
    const link = values.href
    const title = values.label

    if (!link) setLinkError({ message: 'Informe um Link' })
    if (!title) setTitleError({ message: 'Informe um Título' })

    if (!link || !title) return

    const titleAlreadyExists = links.find(prevItem => prevItem.label === title)
    const linkAlreadyExists = links.find(prevItem => prevItem.href === link)

    if (linkAlreadyExists) setLinkError({ message: 'Link ja existe' })
    if (titleAlreadyExists) setTitleError({ message: 'Título ja existe' })

    if (linkAlreadyExists || titleAlreadyExists) return

    const hitMaxLimit = links.length === 10

    if (hitMaxLimit) {
      setLimitError(true)
      return
    }

    setLinks([...links, { href: String(link), label: String(title) }])
  }

  const onRemoveLinkClick = (removedTitle: string) => {
    setLimitError(false)

    setLinks(links.filter(({ label }) => label !== removedTitle))
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
          {links.map(({ label }, index) => (
            <LinkLabel
              key={index}
              title={label}
              color={color}
              onRemoveClick={() => onRemoveLinkClick(label)}
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
          {...register('href')}
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
          maxLength={16}
          {...register('label')}
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
