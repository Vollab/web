import Joi from 'joi'

export const phone = Joi.string()
  .regex(/^\(\d{2}\)\s9\s\d{4}-\d{4,5}$/)
  .messages({
    'string.empty': 'Informe seu número!',
    'any.required': 'Informe seu número!',
    'string.pattern.base': `Número inválido!`
  })
