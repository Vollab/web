'use client'

import { createContext, useContext } from 'react'

import {
  IUseDemandQuery,
  useDemand
} from 'src/api/requests/demands/get/useDemand'

import { infos } from 'src/static/infos'

import { IChildrenProps } from 'src/types/react.types'

import { TVacancy } from 'src/utils/addStatusInVacancies'

interface IVacancyProviderProps extends IChildrenProps {
  isOwner?: boolean
  vacancy?: TVacancy & { demand_id?: string }
  demand_id?: string
}

interface IVacancyContext {
  isOwner?: boolean
  demand?: IUseDemandQuery['response']['demand']
  vacancy?: TVacancy & {
    workMode?: { label: string; color: string }
  }
}

const VacancyContext = createContext<IVacancyContext>({})

export const VacancyProvider = ({
  vacancy,
  children,
  isOwner,
  demand_id
}: IVacancyProviderProps) => {
  const { data } = useDemand({ id: demand_id || vacancy?.demand_id })

  console.log(vacancy)

  const workMode = {
    label: vacancy ? infos.vacancyWorkMode[vacancy.work_mode].label : '',
    color: vacancy ? infos.vacancyWorkMode[vacancy.work_mode].color : ''
  }

  const formattedDescription = `${vacancy?.description[0].toUpperCase()}${vacancy?.description.substring(
    1
  )}`

  const context: IVacancyContext = {
    isOwner: isOwner,
    demand: data?.demand,
    vacancy: vacancy
      ? {
          workMode,
          ...vacancy,
          description: formattedDescription
        }
      : undefined
  }

  return (
    <VacancyContext.Provider value={context}>
      {children}
    </VacancyContext.Provider>
  )
}

export const useVacancyContext = () => useContext(VacancyContext)
