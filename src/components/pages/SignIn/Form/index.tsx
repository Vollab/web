'use client'

import { useRouter } from 'next/navigation'

import { useEffect, useRef } from 'react'

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

  useEffect(() => {
    toastRef.current?.triggerToast({
      content: 'TEST',
      variant: 'success',
      title: 'test1'
    })
  }, [])

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
