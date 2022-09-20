require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const dbConnect = require("./config/mongo.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./storage"));

const port = process.env.PORT || 3000;

/**
 * Aqui invocamos a las rutas
 */
//TODO localhost/api/_____________
app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

dbConnect();
