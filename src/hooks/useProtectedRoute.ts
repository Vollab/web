export interface IUseProtectedRouteParams {
  enabled?: boolean
}

export const useProtectedRoute = ({}: IUseProtectedRouteParams) => {
  return { allowed: true }
}
