import { FormLayout } from '../../FormLayout'

import { useContext } from 'react'

import { Button } from 'src/components/shared/atoms/Button'
import { Select } from 'src/components/shared/groups/Form'

import { CandidateContext } from '..'

export const Step3 = () => {
  const { setStep } = useContext(CandidateContext)

  const onSubmit = () => {
    setStep(4)
  }

  return (
    <FormLayout
      role='Candidato'
      title='Informações pessoais'
      content='Adicione suas informações pessoais e de contato!'
    >
      <form className='space-y-4 pt-6'>
        <Select
          placeholder='Cidade'
          options={[
            { label: 'Programador', value: 'developer' },
            { label: 'Design', value: 'designer' }
          ]}
        />

        <Select
          placeholder='Estado'
          options={[
            { label: 'Programador', value: 'developer' },
            { label: 'Design', value: 'designer' }
          ]}
        />

        <Button color='secondary' className='w-full' onClick={onSubmit}>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
