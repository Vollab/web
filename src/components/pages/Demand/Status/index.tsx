'use client'

import { useDemandContext } from 'src/contexts/Demand'

import { infos } from 'src/static/infos'

export const Status = () => {
  const { demand } = useDemandContext()

  const status = demand?.status
  const statusColor = status ? infos.demandStatus[status].color : ''
  const statusLabel = status ? infos.demandStatus[status].label : ''

  return (
    <span
      className='font-medium text-lg col-span-3'
      style={{ color: statusColor }}
    >
      {statusLabel}
    </span>
  )
}
