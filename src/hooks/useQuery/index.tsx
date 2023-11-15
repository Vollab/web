import { IGQuery, IUseQuery } from './types'

import { useQuery as OriginalUseQuery, UseQueryOptions } from 'react-query'

export const useQuery = <GQuery extends IGQuery>(
  key: string | string[],
  func: any,
  options?: UseQueryOptions<any, IUseQuery['error'], GQuery['response']>
) =>
  OriginalUseQuery<any, IUseQuery['error'], GQuery['response']>(key, func, {
    retry: false,
    staleTime: Infinity,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    ...options
  })
