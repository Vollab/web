'use client'

import { useRouter } from 'next/navigation'

import { colors } from 'src/styles/custom/colors'

import { Button } from 'src/components/shared/atoms/Button'
import { Image } from 'src/components/shared/atoms/Image'
import { MainLayout } from 'src/components/shared/layouts/MainLayout'

import {
  applicationStatusInfo,
  demandStatusInfo,
  vacancyWorkModeInfo
} from 'src/static/infos'

import { UseApplication } from 'src/hooks/api/useApplication'

import { Arrow, Avatar } from 'src/assets/icons'

import {
  TApplicationStatus,
  TDemandStatus,
  TVacancyWorkMode
} from 'src/types/shared.types'

interface IDemandProps {
  id: string
}

interface IDemandResponse {
  id: string
  title: string
  resume: string
  description: string
  status: TDemandStatus
  orderer: { id: string; name: string; avatar?: string }
  vacancies: {
    id: string
    name: string
    open: boolean
    location?: string
    description: string
    workMode: TVacancyWorkMode
    status?: TApplicationStatus
  }[]
}

export const Demand = ({ id }: IDemandProps) => {
  const data: IDemandResponse = {
    id,
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

  const { push, back } = useRouter()
  const { cancelApplication, confirmApplication } = UseApplication()

  const onSeeProfileClick = () => {
    push(`/users/${data.id}`)
  }

  const onBackClick = () => {
    back()
  }

  return (
    <MainLayout hideHeader>
      <main className='space-y-4'>
        <header className='grid grid-cols-[24px_1fr_1fr] py-4 items-center gap-2 px-4 shadow-md'>
          <Button onClick={onBackClick} className='flex gap-1'>
            <Arrow dir='left' className='h-5 w-5' fill={colors.tertiary[500]} />
          </Button>

          <div className='flex flex-col gap-1'>
            <h1 className='font-semibold text-h5 text-tertiary-500 font-primary'>
              {data.title}
            </h1>

            <span
              className='font-medium text-lg'
              style={{ color: demandStatusInfo[data.status].color }}
            >
              {demandStatusInfo[data.status].label}
            </span>
          </div>

          <Button
            onClick={onSeeProfileClick}
            className='text-left text-primary-500 text-lg font-medium justify-self-end'
          >
            {data.orderer.avatar ? (
              <Image
                alt='avatar'
                src={data.orderer.avatar}
                className='h-11 w-11 rounded-full'
              />
            ) : (
              <div className='h-14 w-14 bg-gray-50 rounded-full border border-gray-50 p-[1px]'>
                <Avatar className='h-full w-full' fill={colors.tertiary[500]} />
              </div>
            )}
          </Button>
        </header>

        <div className='px-4 space-y-4 pb-16'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-medium'>Resumo</h2>

            <p className='text-gray-600'>{data.resume}</p>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-medium'>Descrição</h2>

            <p>{data.description}</p>
          </div>

          <div>
            <h2 className='text-xl font-medium'>Vagas</h2>

            <ul className='flex flex-col gap-4 py-4'>
              {data.vacancies
                .sort((a, b) => {
                  if (a.open && !b.open) return -1
                  if (!a.open && b.open) return 1
                  return 0
                })
                .map(
                  ({
                    id,
                    location,
                    name,
                    open,
                    workMode,
                    description,
                    status
                  }) =>
                    open ? (
                      <li key={id}>
                        <article className='flex flex-col gap-1 rounded-2xl shadow-lg  overflow-hidden'>
                          <header className='flex items-center justify-between p-4 pb-0'>
                            <h4 className='text-h6 font-medium text-primary-500'>
                              {name}
                            </h4>

                            <span
                              className='font-medium'
                              style={{
                                color: vacancyWorkModeInfo[workMode].color
                              }}
                            >
                              {vacancyWorkModeInfo[workMode].label}
                            </span>
                          </header>

                          <span className='font-medium text-gray-500 px-4'>
                            {location}
                          </span>

                          <p className='px-4 text-gray-500 mt-1'>
                            {description}
                          </p>

                          {status ? (
                            <>
                              <div className='mt-2 py-3 px-4 flex flex-col gap-1'>
                                <span className='font-medium text-lg'>
                                  Candidatado
                                </span>

                                <span
                                  style={{
                                    color: applicationStatusInfo[status].color
                                  }}
                                  className='font-medium text-lg'
                                >
                                  {applicationStatusInfo[status].label}
                                </span>
                              </div>

                              <div className='w-full flex'>
                                {status === 'approved' && (
                                  <Button
                                    color='success'
                                    onClick={() => confirmApplication(id)}
                                    className='py-3  rounded-none flex-1'
                                  >
                                    Confirmar
                                  </Button>
                                )}

                                <Button
                                  color='error'
                                  onClick={() => cancelApplication(id)}
                                  className='py-3  rounded-none flex-1'
                                >
                                  Cancelar{' '}
                                  {status !== 'approved' && 'Candidatura'}
                                </Button>
                              </div>
                            </>
                          ) : (
                            <Button
                              color='success'
                              className='mt-2 py-3  rounded-none'
                            >
                              Candidatar-se
                            </Button>
                          )}
                        </article>
                      </li>
                    ) : (
                      <li key={id}>
                        <article className='flex flex-col rounded-2xl shadow-lg p-4 border border-dashed border-gray-200 bg-gray-100'>
                          <header className='flex items-center justify-between'>
                            <h4 className='text-h6 font-medium text-gray-500'>
                              {name}
                            </h4>

                            <span className='font-medium text-gray-500'>
                              {vacancyWorkModeInfo[workMode].label}
                            </span>
                          </header>

                          <span className='text-gray-500 mt-2 font-bold'>
                            PREENCHIDA
                          </span>
                        </article>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}
