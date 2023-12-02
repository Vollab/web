import { ILinksFormProps } from 'src/components/shared/molecules/LinksForm'

import { useOrdererContext } from 'src/contexts/SignUp/Orderer'

import { useSubmitActions } from 'src/hooks/SignUp/useSubmitActions'
import { useOrdererSignUp } from 'src/hooks/api/useOrdererSignUp'

export const useOptional = () => {
  const { mutateAsync, isError, error, isSuccess } = useOrdererSignUp()
  const { ordererData, setOrdererData } = useOrdererContext()

  useSubmitActions({ isError, error, isSuccess })

  const onAvatarChange = (data: any) => {
    setOrdererData(prev => ({ ...prev, avatar: data }))
  }

  const setLinks = (links: ILinksFormProps['links']) => {
    setOrdererData(prev => ({ ...prev, links }))
  }

  const onCreateClick = async () => {
    await mutateAsync(ordererData)
  }

  return {
    setLinks,
    onCreateClick,
    onAvatarChange,
    links: ordererData.links,
    avatar: ordererData.avatar
  }
}
