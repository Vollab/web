import { activityAreas } from './activityAreas'

import { Response } from 'types-vollab/dist/v2/auth/api/current-user/GET'

export const usersResponse: { users: Response['user'][] } = {
  users: [
    {
      id: '1',
      role: 'candidate',
      phone: '(1) 91447-3529',
      name: 'Miguel Andrade Barreto',
      email: 'miguelandradebarreto2@gmail.com',
      activity_area: activityAreas.activity_areas,
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra',
      links: [
        { id: '1', text: 'Github', url: 'https://github.com/InSTinToS' },
        {
          id: '1',
          text: 'Linkedin',
          url: 'https://www.linkedin.com/in/miguel-andrade-barreto-b0b410191/'
        }
      ]
    },
    {
      id: '',
      role: 'orderer',
      name: 'Gabriel Augusto Nori',
      phone: '(1) 91447-3529',
      email: 'gabriel.nori@gmail.com',
      activity_area: [activityAreas.activity_areas[0]],
      biography:
        'Lorem ipsum dolor sit amet, consectetur. Donec ornare, justo a facilisis viverra sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra',
      links: [
        { id: '1', text: 'Github', url: 'https://github.com/InSTinToS' },
        { id: '2', text: 'Whats App', url: 'https://github.com/InSTinToS' },
        { id: '3', text: 'Linkedin', url: 'https://github.com/InSTinToS' },
        { id: '4', text: 'Lattes', url: 'https://github.com/InSTinToS' },
        { id: '4', text: 'Site', url: 'https://github.com/InSTinToS' }
      ]
    },
    {
      id: '3',
      role: 'candidate',
      name: 'Jean Domingues',
      phone: '(1) 91447-3529',
      email: 'jean.domingues@gmail.com',
      activity_area: [activityAreas.activity_areas[0]],
      biography:
        'Lorem ipsum dolor sit amet, consectetur. Donec ornare, justo a facilisis viverra',
      links: [{ id: '1', text: 'Github', url: 'https://github.com/InSTinToS' }]
    }
  ]
}
