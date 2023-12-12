import { IFormData } from './types'

import { FormEventHandler, useState } from 'react'

import { useUpdateCandidate } from 'src/api/requests/candidate/update/useUpdateCandidate'
import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

import { ILinksFormProps } from 'src/components/shared/molecules/LinksForm/types'

import { useToastContext } from 'src/contexts/Toast'

import { biography } from 'src/schemas/biography'

import { TInputProps } from 'src/types/react.types'

import { formatPhone } from 'src/utils/format/phone'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm as useFormHook } from 'react-hook-form'
import { email, name, phone } from 'src/schemas'

const resolver = joiResolver(Joi.object({ phone, name, biography, email }))

export const useForm = () => {
  const { data } = useCurrentUser()
  const { mutateAsync } = useUpdateCandidate()
  const { toastRef } = useToastContext()
  const [links, setLinks] = useState<ILinksFormProps['links']>([])

  const { handleSubmit, register, formState, setValue } =
    useFormHook<IFormData>({
      resolver,
      defaultValues: {
        name: data?.user.name,
        phone: data?.user.phone,
        biography: data?.user.biography,
        email: data?.user.email
      }
    })

  const onSubmit = handleSubmit(async formData => {
    const { candidate } = await mutateAsync({ id: data?.user.id, ...formData })

    if (candidate)
      toastRef?.current?.triggerToast([
        { content: 'Informações atualizadas!', variant: 'success' }
      ])
    else toastRef?.current?.triggerToast([{}])
  })

  const onPhoneChange: TInputProps['onChange'] = e => {
    setValue('phone', formatPhone(e.target.value))
  }

  const onTextAreaChange: FormEventHandler<any> = e =>
    setValue('biography', e.currentTarget.value)

  return {
    links,
    onSubmit,
    setLinks,
    isCandidate: data?.user.role === 'candidate',
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
