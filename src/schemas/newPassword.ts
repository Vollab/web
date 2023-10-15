import Joi from 'joi'

export const newPassword = Joi.string()
  .min(8)
  .max(255)
  .regex(/^(?=.*[@$!%*?&])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/)
  .messages({
    'string.empty': 'Informe sua Senha!',
    'any.required': 'Informe sua Senha!',
    'string.min': 'A senha deve ter no mínimo 8 caracteres.',
    'string.max': 'A senha deve ter no máximo 255 caracteres.',
    'string.pattern.base':
      'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (@$!%*?&).'
  })
