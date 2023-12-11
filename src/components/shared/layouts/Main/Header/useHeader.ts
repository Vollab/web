import { useRouter } from 'next/navigation'

import { useAvatar } from 'src/api/requests/avatar/useAvatar'
import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

import { infos } from 'src/static/infos'

export const useHeader = () => {
  const { push } = useRouter()
  const { data } = useCurrentUser()
  const { data: avatarData } = useAvatar({ id: data?.user.id })

  const user = data?.user

  const onLogoutClick = () => {
    document.cookie =
      'session_access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie =
      'session_refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

    push('/sign-in')
  }

  return {
    onLogoutClick,
    avatar: avatarData?.avatar,
    name: user?.name?.split(' ')[0],
    roleLabel: user ? infos.roles[user.role].label : '',
    roleColor: user ? infos.roles[user.role].color : '',
    myDemandsLabel:
      data?.user.role === 'candidate'
        ? 'Minhas Candidaturas'
        : 'Minhas Demandas'
  }
}
