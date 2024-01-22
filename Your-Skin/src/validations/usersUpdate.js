module.exports = [
    body('first_name').notEmpty().withMessage('Ingresa tu nombre'),
    body('last_name').notEmpty().withMessage('Ingresa tu apellido'),
    body('email')
      .notEmpty()
      .withMessage('Ingresa tu correo electrónico')
      .bail()
      .isEmail()
      .withMessage('Ingresa un correo electrónico válido'),
    body('contact_number')
      .notEmpty()
      .withMessage('Ingresa tu número de teléfono')
      .bail()
      .isInt()
      .withMessage(
        'Ingresa un número de teléfono válido (sin guiones, ni espacios)'
      ),
    body('address').notEmpty().withMessage('Ingresa tu dirección'),
    body('birth_date').notEmpty().withMessage('Ingresa tu fecha de nacimiento'),
  ];
  