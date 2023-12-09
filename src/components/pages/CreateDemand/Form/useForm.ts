import { IFormData } from './types'

import { useRouter } from 'next/navigation'

import { FormEventHandler } from 'react'

import { useCreateDemand } from 'src/api/requests/demands/create/useCreateDemand'

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

    if (demand) {
      push(`demands/${demand.id}`)

      toastRef?.current?.triggerToast([
        {
          variant: 'success',
          content: 'Demanda criada com sucesso, experimente adicionar vagas! '
        }
      ])
    } else {
      toastRef?.current?.triggerToast([
        {
          variant: 'error',
          content: 'Falha ao criar demanda, tente novamente mais tarde'
        }
      ])
    }
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
        error: formState.errors.description as any,
        ref: register('description').ref,
        onChange: onDescriptionChange
      },
      resume: {
        error: formState.errors.resume as any,
        ref: register('resume').ref,
        onChange: onResumeChange
      }
    }
  }
}
