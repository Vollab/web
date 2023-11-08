'use client'

import { colors } from 'src/styles/custom/colors'

import {
  FieldLabel,
  SelectLabel,
  TextareaLabel
} from 'src/components/shared/groups/Form'

import { Avatar } from 'src/assets/icons'

export const Form = () => {
  return (
    <form className='flex items-center flex-col py-6 px-4 gap-4'>
      <Avatar fill={colors.primary[500]} className='h-20 w-20 mb-2' />

      <FieldLabel
        title='Nome Completo'
        titleTw='font-medium'
        fieldTw='rounded-2xl'
        className='w-full'
      />

      <FieldLabel
        title='Email'
        titleTw='font-medium'
        fieldTw='rounded-2xl'
        className='w-full'
      />

      <FieldLabel
        title='Celular'
        titleTw='font-medium'
        fieldTw='rounded-2xl'
        className='w-full'
      />

      <SelectLabel
        options={[]}
        title='Cidade'
        titleTw='font-medium'
        className='w-full'
      />

      <SelectLabel
        options={[]}
        title='Area de atuação'
        titleTw='font-medium'
        selectTw='w-full border'
        className='w-full'
      />

      <TextareaLabel title='Biografia' />
    </form>
  )
}
