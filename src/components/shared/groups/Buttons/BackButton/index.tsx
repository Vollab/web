'use client'

import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { Arrow } from 'src/assets/icons'

export const BackButton = () => {
  const { back } = useRouter()

  const onBackClick = () => {
    back()
  }

  return (
    <Button onClick={onBackClick} className='flex gap-1'>
      <Arrow dir='left' className='h-5 w-5' fill={colors.tertiary[500]} />
    </Button>
  )
}
