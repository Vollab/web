'use client'

import { useRouter } from 'next/navigation'

import { Button } from 'src/components/shared/atoms/Button'
import { Field } from 'src/components/shared/groups/Form'

export const Form = () => {
  const { push } = useRouter()

  const onSubmit = () => {}

  const onSignUpClick = () => {
    push('/sign-up')
  }

  return (
    <form className='p-4 space-y-4'>
      <Field placeholder='E-mail' />

      <Field placeholder='Senha' type='password' />

      <footer className='flex items-center justify-between flex-col space-y-4'>
        <Button
          color='primary'
          variant='secondary'
          className='w-full'
          onClick={onSubmit}
        >
          Entrar
        </Button>

        <Button color='primary' className='w-full' onClick={onSignUpClick}>
          Cadastrar
        </Button>
      </footer>
    </form>
  )
}
