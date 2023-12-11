import { LineMotion } from '../LineMotion'

export const LinesMotion = () => {
  return (
    <div className='absolute left-0 h-full w-full flex flex-col justify-evenly'>
      <LineMotion className='w-1/4 h-[12px]' duration={2} delay={0.3} />
      <LineMotion className='w-1/3 h-[12px]' duration={2.3} />
      <LineMotion className='w-1/5 h-[12px]' duration={2.4} delay={0.1} />
    </div>
  )
}
