'use client'

import { useForm } from './useForm'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form'

export const Form = () => {
  const { submitHandler, onSignUpClick, props } = useForm()

  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-4 py-4'>
      <Field placeholder='E-mail' {...props.email} />

      <Field placeholder='Senha' type='password' {...props.password} />

      <footer className='flex items-center justify-between flex-col space-y-4'>
        <Button
          type='submit'
          color='primary'
          className='w-full'
          variant='secondary'
        >
          Entrar
        </Button>

        <Button color='primary' onClick={onSignUpClick} className='w-full'>
          Cadastrar
        </Button>
      </footer>
    </form>
  )
}
