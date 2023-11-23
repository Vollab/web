import { useState } from 'react'

import { useOrdererContext } from 'src/contexts/SignUp/Orderer'

import { useSubmitActions } from 'src/hooks/SignUp/useSubmitActions'
import { useOrdererSignUp } from 'src/hooks/api/useOrdererSignUp'

import { Link } from 'types-vollab/dist/shared/link'

export const useOptional = () => {
  const [avatar, setAvatar] = useState<string>()
  const [links, setLinks] = useState<Link[]>([])
  const { ordererData } = useOrdererContext()

  const { mutateAsync, isError, error, isSuccess } = useOrdererSignUp()
  useSubmitActions({ isError, error, isSuccess })

  const onCreateClick = async () => {
    await mutateAsync({
      name: ordererData.name,
      phone: ordererData.phone,
      email: ordererData.email,
      password: ordererData.password,
      biography: ordererData.biography
    })
  }

  return { avatar, setAvatar, onCreateClick, links, setLinks }
}
