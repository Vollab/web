import { activityAreas } from './activityAreas'
import { usersResponse } from './users'

import { Response } from 'types-vollab/dist/v2/demands/api/demands/GET'

export const demandsResponse: Response = {
  demands: [
    {
      id: '1',
      status: 'OPEN',
      title: 'Microsoft',
      orderer: {
        id: usersResponse.users[1].id,
        name: usersResponse.users[1].name
      },
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra',
      vacancies: [
        {
          id: '1',
          work_mode: 'HYBRID',
          activity_area: activityAreas.activity_areas[0]
        }
      ]
    },
    {
      id: '2',
      title: 'Google',
      status: 'IN_PROGRESS',
      orderer: { id: '3', name: 'Jean Domingues' },
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra',
      vacancies: [
        {
          id: '1',
          work_mode: 'REMOTE',
          activity_area: activityAreas.activity_areas[0]
        },
        {
          id: '2',
          work_mode: 'IN_PERSON',
          activity_area: activityAreas.activity_areas[1]
        }
      ]
    }
  ]
}
