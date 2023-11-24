import { useOrdererContext } from 'src/contexts/SignUp/Orderer'

import { useSubmitActions } from 'src/hooks/SignUp/useSubmitActions'
import { useOrdererSignUp } from 'src/hooks/api/useOrdererSignUp'

import { Link } from 'types-vollab/dist/shared/link'

export const useOptional = () => {
  const { mutateAsync, isError, error, isSuccess } = useOrdererSignUp()
  const { ordererData, setOrdererData } = useOrdererContext()

  useSubmitActions({ isError, error, isSuccess })

  const onAvatarChange = (data: any) => {
    setOrdererData(prev => ({ ...prev, avatar: data }))
  }

  const setLinks = (links: Link[]) => {
    setOrdererData(prev => ({ ...prev, links }))
  }

  const onCreateClick = async () => {
    await mutateAsync({
      links: ordererData.links || [],
      avatar: ordererData?.avatar?.formData,
      signup: {
        name: ordererData.name,
        phone: ordererData.phone,
        email: ordererData.email,
        password: ordererData.password,
        biography: ordererData.biography
      }
    })
  }

  return {
    setLinks,
    onCreateClick,
    onAvatarChange,
    links: ordererData.links,
    avatar: ordererData.avatar?.url
  }
}
