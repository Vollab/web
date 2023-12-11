'use client'

import { useForm } from './useForm'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form/Field'
import { Label } from 'src/components/shared/groups/Form/Label'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'

export const Form = () => {
  const { props, onSubmit } = useForm()

  return (
    <form className='flex flex-col gap-4' onSubmit={onSubmit}>
      <Label className='col-span-3' title='Título'>
        <Field as='div' {...props.title} />
      </Label>

      <Label title='Resumo' className='col-span-3'>
        <Textarea {...props.resume} custom={{ inputTw: 'text-primary-500' }} />
      </Label>

      <Label title='Descrição' className='col-span-3'>
        <Textarea
          {...props.description}
          custom={{ inputTw: 'text-primary-500' }}
        />
      </Label>

      <Button
        className='col-span-3'
        variant='primary'
        color='primary'
        type='submit'
      >
        Criar Demanda
      </Button>
    </form>
  )
}
