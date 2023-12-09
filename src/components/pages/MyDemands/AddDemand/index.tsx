'use client'

import { useRouter } from 'next/navigation'

import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/groups/Buttons/Button'

import { Add } from 'src/assets/icons/Add'

export const AddDemand = () => {
  const { data } = useCurrentUser()
  const { push } = useRouter()

  return data?.user.role === 'orderer' ? (
    <Button
      color='success'
      className='p-0 w-8 h-8'
      onClick={() => push('create-demand')}
    >
      <Add className='h-4 w-4' fill={colors.gray[50]} />
    </Button>
  ) : (
    <></>
  )
}
