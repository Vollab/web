import { IDemandResponse } from 'src/types/api/demand'

export const demandResponse: IDemandResponse = {
  id: '1',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro, minus tenetur alias explicabo voluptas facilis saepe labore praesentium ducimus veritatis eos odit veniam error magnam, doloribus ipsum dicta in!',
  resume:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro, minus tenetur alias explicabo voluptas facilis saepe labore praesentium ducimus veritatis eos odit veniam error magnam, doloribus ipsum dicta in!',
  status: 'opened',
  title: 'Ticpass',
  vacancies: [
    {
      id: '2',
      open: false,
      name: 'Design',
      workMode: 'remote',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolore commodi dolor minima, placeat quibusdam similique aliquam eveniet itaque dolorum porro quisquam. Tenetur nesciunt, natus ullam quam sint magni eius!'
    },
    {
      id: '3',
      open: true,
      status: 'approved',
      name: 'Design',
      workMode: 'remote',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolore commodi dolor minima, placeat quibusdam similique aliquam eveniet itaque dolorum porro quisquam. Tenetur nesciunt, natus ullam quam sint magni eius!'
    },
    {
      id: '3',
      open: true,
      name: 'CEO',
      status: 'pending',
      workMode: 'in_person',
      location: 'São Paulo, SP',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolore commodi dolor minima, placeat quibusdam similique aliquam eveniet itaque dolorum porro quisquam. Tenetur nesciunt, natus ullam quam sint magni eius!'
    },
    {
      id: '1',
      open: true,
      name: 'Programador',
      workMode: 'hybrid',
      location: 'São Paulo, SP',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolore commodi dolor minima, placeat quibusdam similique aliquam eveniet itaque dolorum porro quisquam. Tenetur nesciunt, natus ullam quam sint magni eius!'
    }
  ],
  orderer: { id: '1', name: 'Gabriel Augusto' }
}
