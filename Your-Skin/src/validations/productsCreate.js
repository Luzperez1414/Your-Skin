const { body } = require('express-validator');
const path = require('path');

module.exports = [
  body('name')
    .notEmpty()
    .withMessage('Ingresa el nombre del producto')
    .bail()
    .isLength({ min: 5 })
    .withMessage('Ingresa al menos 5 caractetes'),
  body('price').notEmpty().withMessage('Ingresá el precio'),
  body('description')
    .notEmpty()
    .withMessage('Ingresa la descripción')
    .bail()
    .isLength({ min: 20 })
    .withMessage('La descripción debe tener al menos 20 caracteres'),
  body('brand_id').notEmpty().withMessage('Ingresa el ID de la marca'),
  body('category_id').notEmpty().withMessage('Ingresa el ID de la categoría'),
  body('size_id').notEmpty().withMessage('Ingresa el ID de la medida'),
  body('image').custom((value, { req }) => {
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
