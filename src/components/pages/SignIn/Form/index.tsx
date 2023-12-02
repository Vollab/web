'use client'

import { useForm } from './useForm'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form/Field'

export const Form = () => {
  const { submitHandler, onSignUpClick, props } = useForm()

  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-4 py-4'>
      <Field
        {...props.email}
        name='email'
        placeholder='E-mail'
        autoComplete='true'
      />

      <Field
        type='password'
        {...props.password}
        name='password'
        placeholder='Senha'
        autoComplete='true'
      />

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
