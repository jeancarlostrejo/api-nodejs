const express = require("express");
const router = express.Router();
const { validatorLogin, validatorRegister } = require("../validators/auth");
const { registerCtrl, loginCtrl } = require("../controllers/auth.js");

/**
 * Crea un registro
 */
//TODO http://localhost:3001/api/auth/login
//TODO http://localhost:3001/api/auth/register
router.post("/register", validatorRegister, registerCtrl);
router.post("/login", validatorLogin, loginCtrl);

module.exports = router;
