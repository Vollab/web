import { DemandResponse } from 'types-vollab/dist/routes/demands/id'

export const demand: DemandResponse = {
  id: '1',
  resume:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverraLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra',
  status: 'OPEN',
  title: 'Ticpass',
  orderer: { id: '1', name: 'Miguel Barreto' },
  vacancies: [
    {
      city: 'São Paulo',
      id: '1',
      street: '',
      open: true,
      state: 'SP',
      name: 'Programador',
      status: 'PENDING',
      work_mode: 'HYBRID',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non'
    },
    {
      id: '2',
      street: '',
      open: true,
      state: 'SP',
      city: 'São Paulo',
      name: 'Programador',
      status: 'APPROVED',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non',
      work_mode: 'IN_PERSON'
    },
    {
      id: '3',
      street: '',
      state: 'SP',
      open: false,
      name: 'Design',
      city: 'São Paulo',
      work_mode: 'REMOTE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non'
    }
  ]
}
