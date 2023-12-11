import { useRouter } from 'next/navigation'

import { useState } from 'react'

import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'
import { useUpdateAvatar } from 'src/api/requests/currentUser/updateAvatar/useUpdateAvatar'

import { IFileProps } from 'src/components/shared/groups/Form/File/types'
import { ILinksFormProps } from 'src/components/shared/molecules/LinksForm/types'

export const useOptional = () => {
  useCurrentUser()
  const { push } = useRouter()
  const { mutateAsync } = useUpdateAvatar()
  const [avatar, setAvatar] = useState<string>()
  const [links, setLinks] = useState<ILinksFormProps['links']>([])

  const onAvatarChange: IFileProps['onDataUpdates'] = async ({ url }) => {
    setAvatar(url)
    await mutateAsync({ avatar: url })
  }

  const onCreateClick = () => {
    push('/demands')
  }

  return { links, avatar, setLinks, onCreateClick, onAvatarChange }
}
