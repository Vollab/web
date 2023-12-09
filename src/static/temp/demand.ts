import { activityAreas } from './activityAreas'

import { Response as DemandResponse } from 'types-vollab/dist/src/modules/demands/api/demands/[id]/GET'
import { Response as VacanciesResponse } from 'types-vollab/dist/src/modules/vacancy/api/demands/[demand_id]/vacancies/GET'

export interface IDemandResponse {
  demand: DemandResponse['demand']
  vacancies: VacanciesResponse['vacancies']
}

export const demandResponse: IDemandResponse = {
  demand: {
    id: '1',
    status: 'OPEN',
    title: 'Microsoft',
    orderer: { id: '1', name: 'Gabriel Augusto' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra',
    resume:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra'
  },

  vacancies: [
    {
      id: '1',
      open: true,
      state: 'SP',
      name: 'Front-end',
      city: 'São Paulo',
      work_mode: 'REMOTE',
      activity_area: activityAreas.activity_areas[1],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing '
    }
  ]
}
