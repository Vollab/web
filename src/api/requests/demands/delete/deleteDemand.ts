import { interceptor } from 'src/api/core/interceptor'

export interface IDeleteDemandParams {
  id: string
}

export const deleteDemand = ({ id }: IDeleteDemandParams) =>
  interceptor({
    method: 'DELETE',
    service: 'demand',
    route: `/demands/${id}`
  })
