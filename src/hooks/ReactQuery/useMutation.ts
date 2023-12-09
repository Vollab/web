import {
  MutationFunction,
  useMutation as OriginalUseMutation,
  UseMutationOptions
} from 'react-query'

export interface IGMutation {
  response: any
  request?: any
}

export interface IUseMutation {
  error: any
  context: any
}

export const useMutation = <GMutation extends IGMutation>(
  mutationFunction: MutationFunction<any, GMutation['request']>,
  options?: UseMutationOptions<
    GMutation['response'],
    IUseMutation['error'],
    GMutation['request']
  >
) =>
  OriginalUseMutation<
    GMutation['response'],
    IUseMutation['error'],
    GMutation['request'],
    IUseMutation['context']
  >(mutationFunction, options)
