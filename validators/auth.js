const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorRegister = [
  check("name")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio")
    .isLength({ min: 3, max: 99 })
    .withMessage("Debe tener entre 3 y 99 caracteres"),
  check("age")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio")
    .isNumeric()
    .withMessage("Debe ser un valor numerico"),
  check("password")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio")
    .isLength({ min: 3, max: 15 })
    .withMessage("Debe tener entre 3 y 15 caracteres"),
  check("email")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio")
    .isEmail()
    .withMessage("Debe ser un email valido"),

  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorLogin = [
  check("password")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio")
    .isLength({ min: 3, max: 15 })
    .withMessage("Debe tener entre 3 y 15 caracteres"),
  check("email")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio")
    .isEmail()
    .withMessage("Debe ser un email valido"),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorRegister, validatorLogin };
