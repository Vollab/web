import { TDemandsListResponse } from 'src/types/api/demandsList'

export const demandsListResponse: TDemandsListResponse = [
  {
    id: '1',
    title: 'Ticpass',
    status: 'opened',
    orderer: { id: '1', name: 'Gabriel Augusto' },
    resume:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fuga eos. Aliquam temporibus voluptas corrupti perspiciatis, nobis architecto, distinctio asperiores excepturi voluptates quidem sapiente nam saepe blanditiis libero facere et.',
    vacancies: [
      { id: '2', name: 'Design', workMode: 'remote' },
      { id: '3', name: 'CEO', workMode: 'in_person' },
      { id: '1', name: 'Programador', workMode: 'hybrid' }
    ]
  },
  {
    id: '2',
    title: 'Ticpass',
    status: 'canceled',
    orderer: { id: '1', name: 'Gabriel Augusto' },
    resume:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, fuga eos. Aliquam temporibus voluptas corrupti perspiciatis, nobis architecto, distinctio asperiores excepturi voluptates quidem sapiente nam saepe blanditiis libero facere et.',
    vacancies: [
      { id: '2', name: 'Design', workMode: 'remote' },
      { id: '1', name: 'Programador', workMode: 'hybrid' }
    ]
  }
]
