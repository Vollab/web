import { useState } from 'react'

export const useTooltip = () => {
  const [open, setIsOpen] = useState(false)

  const onOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  const onTriggerClick = () => {
    setIsOpen(prev => !prev)
  }

  return { open, onOpenChange, onTriggerClick }
}
