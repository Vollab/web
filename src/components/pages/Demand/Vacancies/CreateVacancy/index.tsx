import { ICreateVacancyProps } from './types'

import { useCreateVacancy } from './useCreateVacancy'

import { Button } from 'src/components/shared/groups/Buttons/Button'
import { Field } from 'src/components/shared/groups/Form/Field'
import { Select } from 'src/components/shared/groups/Form/Select'
import { Textarea } from 'src/components/shared/groups/Form/Textarea'

export const CreateVacancy = ({ closeModal }: ICreateVacancyProps) => {
  const { props, showLocation, onSubmit, showCities } = useCreateVacancy({
    closeModal
  })

  return (
    <form
      className='bg-gray-50 px-4 py-6 rounded-xl w-full flex-col gap-y-4 flex max-w-[500px]'
      onSubmit={onSubmit}
    >
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl text-tertiary-500'>Crie uma vaga!</h2>

        <p className='leading-[20px]'>
          Adicione uma vaga para sua demanda, assim você poderá
          <b className='text-success-500 font-medium'> aprovar</b> ou
          <b className='text-error-500 font-medium'> recusar</b> candidatos!
        </p>
      </div>

      <Field as='div' {...props.name} className='rounded-xl' />

      <Textarea
        {...props.description}
        color='primary'
        custom={{ inputTw: 'text-primary-500' }}
      />

      <Select color='primary' {...props.activityAreas} />

      <Select {...props.workMode} />

      {showLocation && (
        <div
          className='
            flex flex-col gap-y-4
            sm:grid sm:grid-cols-4 sm:gap-x-4 sm:gap-y-0
          '
        >
          <Select {...props.states} color='primary' menuPlacement='top' />

          {props.states.value && (
            <Select
              {...props.cities}
              color='primary'
              menuPlacement='top'
              className='col-span-3'
            />
          )}
        </div>
      )}

      <Button className='col-span-3' color='success' type='submit'>
        Criar Vaga
      </Button>
    </form>
  )
}
