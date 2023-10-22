import { FormLayout } from '../../FormLayout'

import { useState } from 'react'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/atoms/Button'
import { Field } from 'src/components/shared/groups/Form'

import { AddPhoto, Avatar } from 'src/assets/icons'

export const Step4 = () => {
  const [links, setLinks] = useState<{ title: string; link: string }[]>([])

  return (
    <FormLayout
      role='Candidato'
      title='Informações pessoais'
      content='Adicione suas informações pessoais e de contato!'
    >
      <form className='space-y-4 pt-6 flex flex-col items-center justify-center'>
        <Button className='relative'>
          <Avatar className='h-28 w-28' fill={colors.secondary[500]} />

          <AddPhoto
            fill={colors.secondary[500]}
            className='overflow-visible w-6 absolute right-0 bottom-0 translate-x-3 translate-y-1'
          />
        </Button>

        <div className='w-full'>
          <span>Meus Links:</span>
          <ul>
            {links.map(({ title }, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        </div>

        <div className='grid grid-cols-2 gap-2'>
          <Field placeholder='Link' className='col-span-2 text-sm' />
          <Field placeholder='Título' className='text-sm' />

          <Button color='info' className='w-full px-2 text-sm'>
            Adicionar Link
          </Button>
        </div>

        <Button color='secondary' className='w-full'>
          Próximo passo
        </Button>
      </form>
    </FormLayout>
  )
}
