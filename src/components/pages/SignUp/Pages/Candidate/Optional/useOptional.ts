import { useState } from 'react'

import { ISelectOption } from 'src/components/shared/groups/Form/Select/types'
import { ILinksFormProps } from 'src/components/shared/molecules/LinksForm/types'

export const useOptional = () => {
  const [activityAreas, setActivityAreas] = useState<ISelectOption[]>([])
  const [links, setLinks] = useState<ILinksFormProps['links']>([])

  const onAvatarChange = () => {}

  const onCreateClick = () => {}

  const onActivityAreasChange = (newValue: unknown) => {
    setActivityAreas(newValue as ISelectOption[])
  }

  return {
    links,
    setLinks,
    activityAreas,
    onCreateClick,
    onAvatarChange,
    onActivityAreasChange
  }
}
