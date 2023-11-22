import Joi from 'joi'

export const phone = Joi.string()
  .regex(/^\([1-9]{2}\) (?:[2-8]|9\d)\d{3}\-\d{4}$/)
  .messages({
    'string.empty': 'Informe seu número!',
    'any.required': 'Informe seu número!',
    'string.pattern.base': `Número inválido!`
  })
