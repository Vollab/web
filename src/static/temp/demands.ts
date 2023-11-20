import { DemandsResponse } from 'types-vollab/dist/routes/demands'

export const demands: DemandsResponse = {
  demands: [
    {
      id: '1',
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit non odio mollis vehicula. Donec ornare, justo a facilisis viverra',
      status: 'OPEN',
      title: 'Ticpass',
      orderer: { id: '1', name: 'Miguel Barreto' },
      vacancies: [
        { id: '1', name: 'Programador', work_mode: 'HYBRID' },
        { id: '1', name: 'Programador', work_mode: 'IN_PERSON' },
        { id: '2', name: 'Design', work_mode: 'REMOTE' }
      ]
    }
  ]
}
