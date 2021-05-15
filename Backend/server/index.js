const express = require("express");
const app = express();
const path = require("path");
const db = require("../db/db")
const products = require("../db/models/Products")
const adminsRouter = require("./routes/adminRoute.js");
const productRouter = require("./routes/productRoute.js");
const port = 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "../admin-interface/public")));

app.use("/admins", adminsRouter);
app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`iShoes is available on http://localhost:${port}`);
});
