'use client'

import { useRouter } from 'next/navigation'

import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

import { AddButton } from 'src/components/shared/groups/Buttons/AddButton'

export const AddDemand = () => {
  const { data } = useCurrentUser()
  const { push } = useRouter()

  return data?.user.role === 'orderer' ? (
    <AddButton onClick={() => push('create-demand')} />
  ) : (
    <></>
  )
}
