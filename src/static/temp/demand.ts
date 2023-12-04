import { activityAreas } from './activityAreas'
import { demandsResponse } from './demands'

import {
  Params,
  Response
} from 'types-vollab/dist/modules/demands/api/demands/[id]/GET'

type TDemand = (params: Params) => Response

export const demandResponse: TDemand = ({ id }) => {
  switch (id) {
    case '3':
      return {
        demand: {
          ...demandsResponse.demands[1],
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
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing '
        }
      }

    case '2':
      return {
        demand: {
          ...demandsResponse.demands[2],
          vacancies: [
            {
              id: '1',
              open: true,
              state: 'SP',
              name: 'Front-end',
              city: 'São Paulo',
              work_mode: 'REMOTE',
              activity_area: activityAreas.activity_areas[2],
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing '
            }
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing '
        }
      }

    default:
      return {
        demand: {
          ...demandsResponse.demands[0],
          vacancies: [
            {
              id: '1',
              open: true,
              state: 'SP',
              name: 'Front-end',
              city: 'São Paulo',
              work_mode: 'REMOTE',
              activity_area: activityAreas.activity_areas[0],
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing '
            }
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing '
        }
      }
  }
}
