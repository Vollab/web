import { FormLayout } from '../../FormLayout'

import { useContext, useState } from 'react'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Select } from 'src/components/shared/groups/Form'
import { ISelectOption } from 'src/components/shared/groups/Form/Select/types'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'

import { CandidateContext } from '..'
import { useForm } from 'react-hook-form'

export const Step2 = () => {
  const { setStep, setCandidateData } = useContext(CandidateContext)
  const [activityAreas, setActivityAreas] = useState<ISelectOption[]>([])
  const { register, handleSubmit } = useForm({
    defaultValues: { biography: '' }
  })

  const onSubmit = (data: any) => {
    setCandidateData(prev => ({
      ...prev,
      ...data,
      activityAreas: activityAreas.map(({ label }) => label)
    }))

    setStep(3)
  }

  return (
    <FormLayout
      role='Candidato'
      title='Area de atuação'
      content='Agora fale um pouco sobre sua área de atuação!'
    >
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 pt-6'>
        <Select
          isMulti
          color='secondary'
          placeholder='Área de atuação'
          onChange={newValue => {
            setActivityAreas(newValue as ISelectOption[])
          }}
          options={[
            { label: 'Programador', value: 'developer' },
            { label: 'Design', value: 'designer' }
          ]}
        />

        <Textarea
          placeholder='Biografia'
          {...register('biography')}
          className='text-secondary-500'
        />

        <Button color='secondary' type='submit' className='w-full '>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
