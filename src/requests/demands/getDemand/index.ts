import { TGetDemand, TSelectDemand } from './types'

import { api } from 'src/services/api'

export const getDemand: TGetDemand = ({ id }) =>
  api.get({ url: `/demands/${id}` })

export const selectDemand: TSelectDemand = ({ vacancies, ...demand }) => ({
  ...demand,
  vacancies: vacancies
    .sort((a, b) => {
      const isAEqualB = a.open === b.open
      const isAOpenAndBClosed = a.open && !b.open

      if (isAEqualB) return 0
      return isAOpenAndBClosed ? -1 : 1
    })
    .map(({ location, ...vacancy }) => ({
      ...vacancy,
      location: `${location?.city}, ${location?.state}`
    }))
})
