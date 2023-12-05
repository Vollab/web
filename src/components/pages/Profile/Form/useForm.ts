import { IFormData } from './types'

import { FormEventHandler, useState } from 'react'

import { ILinksFormProps } from 'src/components/shared/molecules/LinksForm/types'

import { biography } from 'src/schemas/biography'

import { TInputProps } from 'src/types/react.types'

import { formatPhone } from 'src/utils/format/phone'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm as useFormHook } from 'react-hook-form'
import { email, name, phone } from 'src/schemas'

const resolver = joiResolver(Joi.object({ phone, name, biography, email }))

export const useForm = () => {
  const [links, setLinks] = useState<ILinksFormProps['links']>([])
  const { handleSubmit, register, formState, setValue } =
    useFormHook<IFormData>({
      resolver,
      defaultValues: { name: '', phone: '', biography: '', email: '' }
    })

  const onSubmit = handleSubmit(() => {})

  const onPhoneChange: TInputProps['onChange'] = e => {
    setValue('phone', formatPhone(e.target.value))
  }

  const onTextAreaChange: FormEventHandler<any> = e =>
    setValue('biography', e.currentTarget.value)

  return {
    onSubmit,
    links,
    setLinks,
    props: {
      email: {
        error: formState.errors.email,
        ...register('email')
      },
      name: {
        error: formState.errors.name,
        ...register('name')
      },
      biography: {
        error: formState.errors.biography as any,
        ref: register('biography').ref,
        onChange: onTextAreaChange
      },
      phone: {
        maxLength: 15,
        ...register('phone'),
        onChange: onPhoneChange,
        error: formState.errors.phone
      }
    }
  }
}
