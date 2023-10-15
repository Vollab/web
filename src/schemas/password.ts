import Joi from 'joi'

export const password = Joi.string().max(255).messages({
  'string.empty': 'Informe sua Senha!',
  'any.required': 'Informe sua Senha!',
  'string.max': `Limite máximo de caracteres atingido!`
})
