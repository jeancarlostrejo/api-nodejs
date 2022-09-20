const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
  check("name")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio"),
  check("album")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio"),
  check("cover")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio"),
  check("artist")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio"),
  check("artist.name")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio"),
  check("artist.nickname")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio"),
  check("artist.nationality")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio"),
  check("duration")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio"),
  check("duration.start")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio"),
  check("duration.end")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio"),
  check("mediaId")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio")
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGetItem = [
  check("id")
    .exists()
    .withMessage("Debe existir el campo")
    .notEmpty()
    .withMessage("No debe estar vacio")
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateItem, validatorGetItem };
