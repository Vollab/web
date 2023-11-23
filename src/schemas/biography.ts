import Joi from 'joi'

export const biography = Joi.string().required().max(255).min(20).messages({
  'string.empty': 'Informe sua biografia!',
  'any.required': 'Informe sua biografia!',
  'string.min': 'Mínimo de 20 caracteres!',
  'string.max': 'Limite máximo de caracteres atingido!'
})
