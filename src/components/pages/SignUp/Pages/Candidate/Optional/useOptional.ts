import { useRouter } from 'next/navigation'

import { useState } from 'react'

import { useActivityAreas } from 'src/api/requests/activityAreas/useActivityAreas'
import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'
import { useUpdateAvatar } from 'src/api/requests/currentUser/updateAvatar/useUpdateAvatar'

import { IFileProps } from 'src/components/shared/groups/Form/File/types'
import { ISelectOption } from 'src/components/shared/groups/Form/Select/types'
import { ILinksFormProps } from 'src/components/shared/molecules/LinksForm/types'

export const useOptional = () => {
  useCurrentUser()
  const { push } = useRouter()
  const { data } = useActivityAreas()
  const { mutateAsync } = useUpdateAvatar()
  const [avatar, setAvatar] = useState<string>()
  const [links, setLinks] = useState<ILinksFormProps['links']>([])
  const [activityAreas, setActivityAreas] = useState<ISelectOption[]>([])

  const onAvatarChange: IFileProps['onDataUpdates'] = async ({ url }) => {
    setAvatar(url)
    await mutateAsync({ avatar: url })
  }

  const onCreateClick = () => {
    push('/demands')
  }

  const onActivityAreasChange = (newValue: unknown) => {
    setActivityAreas(newValue as ISelectOption[])
  }

  return {
    links,
    avatar,
    setLinks,
    activityAreas,
    onCreateClick,
    onAvatarChange,
    onActivityAreasChange,
    activityOptions: data
  }
}
