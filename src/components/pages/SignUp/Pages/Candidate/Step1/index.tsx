import { FormLayout } from '../../FormLayout'

import { useContext } from 'react'

import { Button } from 'src/components/shared/groups/Buttons/Button'
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
          color='secondary'
          placeholder='Nome Completo'
          tws={{ input: 'text-secondary-500' }}
        />
        <Field placeholder='Email' color='secondary' />
        <Field placeholder='Celular' color='secondary' />
        <Field placeholder='Senha' color='secondary' />

        <Button color='secondary' onClick={onSubmit} className='w-full'>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
