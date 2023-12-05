import { ILinksFormProps } from './types'

import { LinkLabel } from '../../atoms/LinkLabel'
import { Button } from '../../groups/Buttons/Button'
import { Field } from '../../groups/Form/Field'
import { useLinksForm } from './useLinksForm'

import { twMerge } from 'tailwind-merge'

export const LinksForm = ({
  links,
  setLinks,
  className,
  color = 'primary'
}: ILinksFormProps) => {
  const { errorTw, onSubmit, titleProps, linkProps, onRemoveLinkClick } =
    useLinksForm({ setLinks, links })

  return (
    <div className={className}>
      <div className='w-full mb-3'>
        <span>
          Meus Links
          <span className={errorTw.limit}> (máximo 10)</span>:
        </span>

        <ul className='flex pt-2 flex-wrap'>
          {links?.map(({ text }, index) => (
            <LinkLabel
              key={index}
              title={text}
              color={color}
              onRemoveClick={() => onRemoveLinkClick(text)}
            />
          ))}
        </ul>
      </div>

      <form onSubmit={onSubmit} className='grid grid-cols-2 gap-2 w-full'>
        <Field
          color={color}
          {...linkProps}
          placeholder='Link'
          className={twMerge('col-span-2 text-sm', errorTw.link)}
        />

        <Field
          color={color}
          {...titleProps}
          placeholder='Título'
          className={twMerge('text-sm', errorTw.title)}
        />

        <Button type='submit' color='info' className='w-full px-2 text-sm'>
          Adicionar Link
        </Button>
      </form>
    </div>
  )
}
