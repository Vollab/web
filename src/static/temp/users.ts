import { Response } from 'types-vollab/dist/modules/auth/api/current-user/GET'

export const usersResponse: { users: Response['user'][] } = {
  users: [
    {
      id: '1',
      role: 'candidate',
      phone: '(1) 91447-3529',
      name: 'Miguel Andrade Barreto',
      email: 'miguelandradebarreto2@gmail.com',
      biography:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra'
    }
  ]
}
