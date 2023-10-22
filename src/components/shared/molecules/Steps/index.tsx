const Step = ({ color, filled }: { color: string; filled?: boolean }) => (
  <li
    className='h-4 w-4 rounded-full border'
    style={{
      borderColor: color,
      backgroundColor: filled ? color : 'transparent'
    }}
  />
)

export const Steps = ({
  color,
  quantity,
  filledQuantity
}: {
  filledQuantity: number
  quantity: number
  color: string
}) => (
  <ul className='flex items-center justify-center space-x-4'>
    {new Array(filledQuantity).fill('').map((_, index) => (
      <Step key={index} color={color} filled />
    ))}

    {new Array(quantity - filledQuantity).fill('').map((_, index) => (
      <Step key={index} color={color} />
    ))}
  </ul>
)
