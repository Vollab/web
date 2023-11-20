import { FormLayout } from '../../FormLayout'

import { useContext } from 'react'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'

import { OrdererContext } from '..'

export const Step2 = () => {
  const { setStep } = useContext(OrdererContext)

  const onSubmit = () => {
    setStep(3)
  }

  return (
    <FormLayout
      color='tertiary'
      role='Solicitante'
      title='Sobre você'
      content='Escreva um pouco sobre você!'
    >
      <form className='space-y-4 pt-6'>
        {/* <Select
          color='tertiary'
          placeholder='Cidade'
          options={[
            { label: 'Programador', value: 'developer' },
            { label: 'Design', value: 'designer' }
          ]}
        />

        <Select
          color='tertiary'
          placeholder='Estado'
          options={[
            { label: 'Programador', value: 'developer' },
            { label: 'Design', value: 'designer' }
          ]}
        /> */}

        <Textarea placeholder='Biografia' className='text-tertiary-500' />

        <Button color='tertiary' onClick={onSubmit} className='w-full'>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
