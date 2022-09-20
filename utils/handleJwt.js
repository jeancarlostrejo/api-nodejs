const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * Debes pasar el objeto del usuario
 * @param {*} user
 */
const tokenSign = (user) => {
  const sign = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );

  return sign;
};

/**
 * Debes pasar el token de sesion JWT
 * @param {*} tokenJwt
 */
const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (e) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
