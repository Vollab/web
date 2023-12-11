import { IUseLinksFormsParams } from './types'

import { useState } from 'react'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { Link } from 'types-vollab/dist/src/shared/link'

const resolver = joiResolver(
  Joi.object({
    url: Joi.string(),
    text: Joi.string().max(16).messages({
      'string.max': 'Limite de 16 caracteres atingido'
    })
  })
)

export const useLinksForm = ({ setLinks, links }: IUseLinksFormsParams) => {
  const [limitError, setLimitError] = useState(false)
  const [linkError, setLinkError] = useState<{ message: string }>()
  const [titleError, setTitleError] = useState<{ message: string }>()
  const { handleSubmit, register } = useForm<Link>({
    resolver,
    defaultValues: { text: '', url: '' }
  })

  const onLinkFocus = () => {
    setLinkError(undefined)
  }

  const onTitleFocus = () => {
    setTitleError(undefined)
  }

  const onAddLinkClick = ({ text, url }: Link) => {
    if (!url) setLinkError({ message: 'Informe um Link' })
    if (!text) setTitleError({ message: 'Informe um Título' })

    if (!url || !text) return

    const titleAlreadyExists = links?.find(prevItem => prevItem.text === text)
    const linkAlreadyExists = links?.find(prevItem => prevItem.url === url)

    if (linkAlreadyExists) setLinkError({ message: 'Link ja existe' })
    if (titleAlreadyExists) setTitleError({ message: 'Título ja existe' })

    if (linkAlreadyExists || titleAlreadyExists) return

    const hitMaxLimit = links?.length === 10

    if (hitMaxLimit) {
      setLimitError(true)
      return
    }

    links ? setLinks([...links, { text, url }]) : setLinks([{ text, url }])
  }

  const onRemoveLinkClick = (removedTitle: string) => {
    setLimitError(false)

    setLinks(links?.filter(({ text }) => text !== removedTitle))
  }

  const onSubmit = handleSubmit(onAddLinkClick)

  const linkProps = {
    error: linkError,
    onFocus: onLinkFocus,
    ...register('url')
  }

  const titleProps = {
    maxLength: 16,
    error: titleError,
    ...register('text'),
    onFocus: onTitleFocus
  }

  const errorTw = {
    link: linkError && 'border-red-500',
    title: titleError && 'border-error-500',
    limit: limitError ? 'text-red-500 font-bold' : undefined
  }

  return { errorTw, onSubmit, titleProps, linkProps, onRemoveLinkClick }
}
