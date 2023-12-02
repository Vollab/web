import { VariantProps, tv } from 'tailwind-variants'

export interface IVariants extends VariantProps<typeof variants> {}

export const variants = tv({
  base: 'border-2 shadow-sm font-medium rounded-3xl px-6 h-[42px] transition-all duration-300 hover:contrast-125 flex items-center justify-center',
  defaultVariants: { color: 'primary', variant: 'primary' },
  variants: {
    color: {
      primary: 'bg-primary-500 text-gray-50 border-primary-500',
      tertiary: 'bg-tertiary-500 text-gray-50 border-tertiary-500',
      secondary: 'bg-secondary-500 text-gray-50 border-secondary-500',

      gray: 'bg-gray-100 text-gray-300 hover:bg-gray-300 hover:text-gray-50 border-gray-500',

      info: 'bg-info-500 text-gray-50 border-info-500',
      error: 'bg-error-500 text-gray-50 border-error-500',
      success: 'bg-success-500 text-gray-50 border-success-500'
    },
    variant: { primary: '', secondary: '' }
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'secondary',
      className: 'bg-gray-50 text-primary-500'
    }
  ]
})
