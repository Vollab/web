'use client'

import { Button } from 'src/components/shared/atoms/Button'
import { Field } from 'src/components/shared/groups/Form'

export const Form = () => {
  return (
    <form className='p-4 space-y-4'>
      <Field type='text' placeholder='E-mail' />
      <Field type='text' placeholder='Senha' />

      <footer className='flex items-center justify-between'>
        <Button variant='primary'>Entrar</Button>
        <Button variant='gray'>Cadastrar</Button>
      </footer>
    </form>
  )
}
