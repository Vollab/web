import { FormLayout } from '../../FormLayout'

import { useContext } from 'react'

import { Button } from 'src/components/shared/atoms/Button'
import { Select } from 'src/components/shared/groups/Form'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'

import { CandidateContext } from '..'

export const Step2 = () => {
  const { setStep } = useContext(CandidateContext)

  const onSubmit = () => {
    setStep(3)
  }

  return (
    <FormLayout
      role='Candidato'
      title='Informações pessoais'
      content='Adicione suas informações pessoais e de contato!'
    >
      <form className='space-y-4 pt-6'>
        <Select
          isMulti
          placeholder='Área de atuação'
          options={[
            { label: 'Programador', value: 'developer' },
            { label: 'Design', value: 'designer' }
          ]}
        />

        <Textarea placeholder='Biografia' />

        <Button color='secondary' className='w-full' onClick={onSubmit}>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
