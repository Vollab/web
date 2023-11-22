import Joi from 'joi'

const nameRegExp = /^[a-záàâãéèêíïóôõöúçñ ]+$/i

export const name = Joi.string().min(5).max(30).regex(nameRegExp).messages({
  'string.empty': 'Informe um nome!',
  'any.required': 'Informe um nome!',
  'string.pattern.base': 'Nome inválido!',
  'string.max': 'Nome deve possuir menos que 30 caracteres!',
  'string.min': 'Nome deve possuir mais que 5 caracteres!'
})
