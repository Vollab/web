'use client'

import { useRouter } from 'next/navigation'

import { useRef } from 'react'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form'
import { IForwardToast, Toast } from 'src/components/shared/molecules/Toast'

export const Form = () => {
  const { push } = useRouter()
  const toastRef = useRef<IForwardToast>(null)

  const onSubmit = () => {
    push('/demands')
  }

  const onSignUpClick = () => {
    push('/sign-up')
  }

  return (
    <>
      <form className='space-y-4'>
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

      <Toast ref={toastRef} />
    </>
  )
}
