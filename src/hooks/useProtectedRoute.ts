import { useCurrentUser } from 'src/api/requests/currentUser/get/useCurrentUser'

export const useProtectedRoute = (enabled = true) => {
  const { data, isLoading } = useCurrentUser()

  return { isLoading, allowed: enabled ? !!data?.user.id : true }
}
