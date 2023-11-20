'use client'

import { IUseProtectedRouteParams } from './types'

export const useProtectedRoute = ({}: IUseProtectedRouteParams) => {
  return { allowed: true }
}
