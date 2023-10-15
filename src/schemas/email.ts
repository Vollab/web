import Joi from 'joi'
import tldjs from 'tldjs'

export const email = Joi.string()
  .email({ tlds: { allow: false } })
  .max(255)
  .custom((value, helpers) =>
    tldjs.parse(value).tldExists ? value : helpers.error('email.tlds')
  )
  .messages({
    'email.tlds': 'E-mail inválido!',
    'string.email': 'E-mail inválido!',
    'string.empty': 'Informe um E-mail!',
    'any.required': 'Informe um E-mail!',
    'string.max': 'Limite máximo de caracteres atingido!'
  })
