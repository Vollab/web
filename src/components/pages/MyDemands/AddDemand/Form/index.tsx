'use client'

import { useForm } from './useForm'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { CloseButton } from 'src/components/shared/groups/Buttons/CloseButton'
import { Field } from 'src/components/shared/groups/Form/Field'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'

export interface IFormProps {
  closeModal: () => void
}

export const Form = ({ closeModal }: IFormProps) => {
  const { props, onSubmit } = useForm({ closeModal })

  return (
    <article className='ModalContainer flex flex-col gap-4'>
      <header className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl text-primary-500'>Crie uma Demanda!</h2>

          <CloseButton onClick={closeModal} />
        </div>

        <p className='leading-[20px]'>
          Inclua detalhes sobre a sua demanda para que os candidatos possam
          oferecer a assistência adequada!
        </p>
      </header>

      <form onSubmit={onSubmit} className='flex flex-col gap-y-4'>
        <Field
          as='div'
          {...props.title}
          color='primary'
          placeholder='Título'
          className='rounded-xl'
        />

        <Textarea
          {...props.resume}
          custom={{ inputTw: 'text-primary-500' }}
          placeholder='Resumo'
        />

        <Textarea
          {...props.description}
          custom={{ inputTw: 'text-primary-500' }}
          placeholder='Descrição'
        />

        <Button color='success' type='submit'>
          Criar Demanda
        </Button>
      </form>
    </article>
  )
}
