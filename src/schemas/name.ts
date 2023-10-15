import Joi from 'joi'

const nameRegExp = /^[a-záàâãéèêíïóôõöúçñ ]+$/i

export const name = Joi.string().max(255).regex(nameRegExp).messages({
  'string.empty': 'Informe um nome!',
  'any.required': 'Informe um nome!',
  'string.pattern.base': 'Nome inválido!',
  'string.max': 'Limite máximo de caracteres atingido!'
})
