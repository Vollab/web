import { FormLayout } from '../../FormLayout'

import { useContext } from 'react'

import { Button } from 'src/components/shared/atoms/Button'
import { Field } from 'src/components/shared/groups/Form'

import { CandidateContext } from '..'

export const Step1 = () => {
  const { setStep } = useContext(CandidateContext)

  const onSubmit = () => {
    setStep(2)
  }

  return (
    <FormLayout
      role='Candidato'
      title='Informações pessoais'
      content='Adicione suas informações pessoais e de contato!'
    >
      <form className='space-y-4 pt-6'>
        <Field
          placeholder='Nome Completo'
          tw={{ input: 'text-secondary-500' }}
        />
        <Field tw={{ input: 'text-secondary-500' }} placeholder='Email' />
        <Field tw={{ input: 'text-secondary-500' }} placeholder='Celular' />
        <Field tw={{ input: 'text-secondary-500' }} placeholder='Senha' />

        <Button color='secondary' className='w-full' onClick={onSubmit}>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
