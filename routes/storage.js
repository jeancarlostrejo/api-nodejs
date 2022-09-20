const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");
const {
  createItem,
  updateItem,
  getItem,
  getItems,
  deleteItem,
} = require("../controllers/storage");

// http://localhost/3001/api/storage

/**
 * Crear un item
 */
router.post("/", uploadMiddleware.single("myfile"), createItem);

/**
 * Lista de Items
 */
router.get("/", getItems);

/**
 * Detalle de Item
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Eliminar Item
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
