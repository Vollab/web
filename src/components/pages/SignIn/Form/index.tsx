'use client'

import { useRouter } from 'next/navigation'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form'

export const Form = () => {
  const { push } = useRouter()

  const onSubmit = () => {
    push('/demands')
  }

  const onSignUpClick = () => {
    push('/sign-up')
  }

  return (
    <form className='flex flex-col gap-4 py-4'>
      <Field placeholder='E-mail' />

      <Field placeholder='Senha' type='password' />

      <footer className='flex items-center justify-between flex-col space-y-4'>
        <Button
          color='primary'
          variant='secondary'
          onClick={onSubmit}
          className='w-full'
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
