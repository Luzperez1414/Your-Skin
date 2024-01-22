const { body } = require('express-validator');
const path = require('path');

module.exports = [
  body('first_name')
    .notEmpty()
    .withMessage('Ingresa tu nombre')
    .isLength({ min: 2 }),
  body('last_name')
    .notEmpty()
    .withMessage('Ingresa tu apellido')
    .isLength({ min: 2 }),
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
  body('birth_date').notEmpty().withMessage('Ingresa tu fecha de nacimiento'),
  body('address').notEmpty().withMessage('Ingresa tu dirección'),
  body('profile_picture').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.JPG', '.JPEG', '.PNG', '.GIF'];

    if (file) {
      let fileExtension = path.extname(file.originalname).toUpperCase();
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ', '
          )}`
        );
      }
    }
    return true;
  }),
];
