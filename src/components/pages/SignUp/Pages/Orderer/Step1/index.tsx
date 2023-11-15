import { FormLayout } from '../../FormLayout'

import { useContext } from 'react'

import { Button } from 'src/components/shared/atoms/Button'
import { Field } from 'src/components/shared/groups/Form'

import { OrdererContext } from '..'

export const Step1 = () => {
  const { setStep } = useContext(OrdererContext)

  const onSubmit = () => {
    setStep(2)
  }

  return (
    <FormLayout
      color='tertiary'
      role='Solicitante'
      title='Informações pessoais'
      content='Adicione suas informações pessoais e de contato!'
    >
      <form className='space-y-4 pt-6'>
        <Field
          color='tertiary'
          placeholder='Nome Completo'
          tws={{ input: 'text-tertiary-500' }}
        />
        <Field placeholder='Email' color='tertiary' />
        <Field placeholder='Celular' color='tertiary' />
        <Field placeholder='Senha' color='tertiary' />

        <Button color='tertiary' onClick={onSubmit} className='w-full'>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}