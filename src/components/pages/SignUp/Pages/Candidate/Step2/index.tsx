import { FormLayout } from '../../FormLayout'

import { useContext } from 'react'

import { Button } from 'src/components/shared/groups/Buttons/Button'
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
      title='Area de atuação'
      content='Agora fale um pouco sobre sua área de atuação!'
    >
      <form className='space-y-4 pt-6'>
        <Select
          isMulti
          color='secondary'
          placeholder='Área de atuação'
          options={[
            { label: 'Programador', value: 'developer' },
            { label: 'Design', value: 'designer' }
          ]}
        />

        <Textarea placeholder='Biografia' className='text-secondary-500' />

        <Button color='secondary' onClick={onSubmit} className='w-full '>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
