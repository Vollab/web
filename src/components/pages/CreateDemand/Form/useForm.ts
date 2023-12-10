import { IFormData } from './types'

import { useRouter } from 'next/navigation'

import { FormEventHandler } from 'react'

import { useCreateDemand } from 'src/api/requests/demands/create/useCreateDemand'

import { queryClient } from 'src/contexts/ReactQuery'
import { useToastContext } from 'src/contexts/Toast'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm as useFormHook } from 'react-hook-form'
import { name } from 'src/schemas'

const resume = Joi.string().required().max(120).min(20).messages({
  'string.empty': 'Informe um resumo!',
  'any.required': 'Informe um resumo!',
  'string.min': 'Mínimo de 20 caracteres!',
  'string.max': 'Limite máximo de 120 caracteres atingido!'
})

const description = Joi.string().required().max(255).min(20).messages({
  'string.empty': 'Informe um resumo!',
  'any.required': 'Informe um resumo!',
  'string.min': 'Mínimo de 20 caracteres!',
  'string.max': 'Limite máximo de 255 caracteres atingido!'
})

const resolver = joiResolver(Joi.object({ title: name, resume, description }))

export const useForm = () => {
  const { push } = useRouter()
  const { toastRef } = useToastContext()
  const { mutateAsync } = useCreateDemand()
  const { handleSubmit, register, formState, setValue } =
    useFormHook<IFormData>({
      resolver,
      defaultValues: { title: '', resume: '', description: '' }
    })

  const onSubmit = handleSubmit(async data => {
    const { demand } = await mutateAsync(data)

    if (!demand) {
      toastRef?.current?.triggerToast([{}])
      return
    }

    push(`demands/${demand.id}`)

    queryClient.refetchQueries('demands')

    toastRef?.current?.triggerToast([
      {
        variant: 'success',
        content: 'Demanda criada com sucesso, experimente adicionar vagas! '
      }
    ])
  })

  const onResumeChange: FormEventHandler<any> = e =>
    setValue('resume', e.currentTarget.value)

  const onDescriptionChange: FormEventHandler<any> = e =>
    setValue('description', e.currentTarget.value)

  return {
    onSubmit,
    props: {
      title: {
        error: formState.errors.title,
        ...register('title')
      },
      description: {
        maxLength: 255,
        onChange: onDescriptionChange,
        ref: register('description').ref,
        error: formState.errors.description as any
      },
      resume: {
        maxLength: 120,
        onChange: onResumeChange,
        ref: register('resume').ref,
        error: formState.errors.resume as any
      }
    }
  }
}
