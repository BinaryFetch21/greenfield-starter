const express = require("express");
const app = express();
const path = require("path");
const db = require("../DB/index");
const Product = require("../Db/Models/Product");

const port = 3000;-

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../Views/Client/public")));

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});

app.get("*", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "../Views/Client/public"),
  });
});

app.listen(port, () => {
  console.log(`iShoes is available on http://localhost:${port}`);
});
