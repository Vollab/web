import { IUseSignInQuery } from './types'

import { queryClient } from 'src/contexts/ReactQuery'

import { useQuery } from 'src/hooks/useQuery'

import { api } from 'src/services/api'

export const removeToken = () => {
  window.localStorage.removeItem('@Ticpass:token')
  queryClient.invalidateQueries('user')
}

export const updateToken = (token: string) => {
  globalThis.localStorage.setItem('@Ticpass:token', token)
  queryClient.invalidateQueries('user')
}

export const getToken = () =>
  globalThis.localStorage.getItem('@Ticpass:token') || undefined

export const useUser = () =>
  useQuery<IUseSignInQuery>(
    'user',
    async () => {
      const token = getToken()

      if (!token) return undefined

      const data = await api.get({ token, url: '/user' })

      return data
    },
    {
      retry: false,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      select: data => ({ ...data, name: data.name.split('(').shift()?.trim() })
    }
  )
