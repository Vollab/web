'use client'

import { ITooltipProps } from './types'

import { useTooltip } from './useTooltip'

import * as RTooltip from '@radix-ui/react-tooltip'

const Tooltip = ({ trigger, content, color, arrowTw }: ITooltipProps) => {
  const { open, onOpenChange, onTriggerClick } = useTooltip()

  return (
    <RTooltip.Provider delayDuration={0}>
      <RTooltip.Root open={open} onOpenChange={onOpenChange}>
        <div onClick={onTriggerClick}>
          <RTooltip.Trigger>{trigger(open)}</RTooltip.Trigger>
        </div>

        <RTooltip.Portal>
          <RTooltip.Content
            side='top'
            align='center'
            className='p-2 text-white-500 rounded-md z-50'
            style={{ backgroundColor: color }}
          >
            <RTooltip.Arrow
              width={11}
              height={5}
              fill={color}
              className={arrowTw}
            />

            {content(open)}
          </RTooltip.Content>
        </RTooltip.Portal>
      </RTooltip.Root>
    </RTooltip.Provider>
  )
}

export default Tooltip
