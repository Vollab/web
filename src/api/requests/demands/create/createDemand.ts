import { interceptor } from 'src/api/core/interceptor'

interface ICreateDemandProps {
  title: string
  resume: string
  description: string
}

export const createDemand = (data: ICreateDemandProps) =>
  interceptor({
    method: 'POST',
    service: 'demand',
    route: `/demands`,
    request: data
  })
