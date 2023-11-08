/* eslint-disable @next/next/no-img-element */
import { FormLayout } from '../../FormLayout'

import { useState } from 'react'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/atoms/Button'
import { FilterLabel } from 'src/components/shared/atoms/FilterLabel'
import { Field } from 'src/components/shared/groups/Form'
import { File } from 'src/components/shared/groups/Form/File'

import { AddPhoto, Avatar } from 'src/assets/icons'

import { useForm } from 'react-hook-form'

export const Step3 = () => {
  const [avatar, setAvatar] = useState<string>()
  const [limitError, setLimitError] = useState(false)
  const [linkError, setLinkError] = useState<{ message: string }>()
  const [titleError, setTitleError] = useState<{ message: string }>()
  const [links, setLinks] = useState<{ title: string; link: string }[]>([])

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

  const onNextClick = () => {
    console.log({ avatar, links })
  }

  return (
    <FormLayout
      color='tertiary'
      role='Solicitante'
      title='Informações opcionais'
      content='É sempre bom ter uma foto de perfil e alguns links para melhorar o seu perfil!'
    >
      <div className='space-y-4 pt-6 flex flex-col items-center justify-center'>
        <File
          name='avatar'
          label='Avatar'
          className='relative'
          onDataUpdates={data => setAvatar(data)}
        >
          <>
            {avatar ? (
              <img
                src={avatar}
                alt='avatar'
                className='h-28 w-28 rounded-full'
              />
            ) : (
              <Avatar fill={colors.tertiary[500]} className='h-28 w-28' />
            )}

            <AddPhoto
              fill={colors.tertiary[500]}
              className='overflow-visible w-6 absolute right-0 bottom-0 translate-x-3 translate-y-1'
            />
          </>
        </File>

        <div className='w-full'>
          <span>
            Meus Links{' '}
            <span className={limitError ? 'text-red-500 font-bold' : ''}>
              (máximo 10)
            </span>
            :
          </span>

          <ul className='flex pt-2 flex-wrap'>
            {links.map(({ title }, index) => (
              <FilterLabel
                key={index}
                title={title}
                color='tertiary'
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
            color='tertiary'
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
            color='tertiary'
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

        <Button color='tertiary' className='w-full' onClick={onNextClick}>
          Próximo passo
        </Button>
      </div>
    </FormLayout>
  )
}
