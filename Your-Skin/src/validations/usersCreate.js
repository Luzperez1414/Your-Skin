const { body } = require('express-validator')

module.exports = [
  body('first_name').notEmpty().withMessage('Ingresa tu nombre'),
  body('last_name').notEmpty().withMessage('Ingresa tu apellido'),
  body('email')
    .notEmpty()
    .withMessage('Ingresa tu correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Ingresa un correo electrónico válido'),
  body('password')
    .notEmpty()
    .withMessage('Ingresa tu contraseña')
    .bail()
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres'),
  body('contact_number')
    .notEmpty()
    .withMessage('Ingresa tu número de teléfono')
    .bail()
    .isInt()
    .withMessage(
      'Ingresa un número de teléfono válido (sin guiones, ni espacios)'
    ),
  body('birth_date').notEmpty().withMessage('Ingresá tu fecha de nacimiento'),
  body('address').notEmpty().withMessage('Ingresá tu dirección'),
]
