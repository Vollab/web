import { FormLayout } from '../../FormLayout'

import { useContext } from 'react'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form'

import { CandidateContext } from '..'
import { useForm } from 'react-hook-form'

export const Step1 = () => {
  const { setStep, setCandidateData } = useContext(CandidateContext)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: ''
    }
  })

  const onSubmit = (data: any) => {
    setCandidateData({ ...data })
    setStep(2)
  }

  return (
    <FormLayout
      role='Candidato'
      title='Informações pessoais'
      content='Adicione suas informações pessoais e de contato!'
    >
      <form className='space-y-4 pt-6' onSubmit={handleSubmit(onSubmit)}>
        <Field
          color='secondary'
          placeholder='Nome Completo'
          tws={{ input: 'text-secondary-500' }}
          {...register('name')}
        />

        <Field placeholder='Email' color='secondary' {...register('email')} />

        <Field placeholder='Celular' color='secondary' {...register('phone')} />

        <Field
          color='secondary'
          placeholder='Senha'
          {...register('password')}
        />

        <Button color='secondary' className='w-full' type='submit'>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
