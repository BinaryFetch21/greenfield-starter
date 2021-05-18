const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
const db = require("../DB/index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const usersRouter = require("../Server/Controllers/userRoute");
const productsRouter = require("../Server/Controllers/productRoute");
const ordersRouter = require("../Server/Controllers/orderRoute")
const signin = require("./Controllers/signin");
const signup = require("./Controllers/signup");



const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../Views/Client/public")));

app.use(cors());
dotenv.config();


app.use("/signin", signin);
app.use("/signup", signup);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

app.get("*", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "../Views/Client/public"),
  });
});

app.listen(port, () => {
  console.log(`iShoes is available on http://localhost:${port}`);
});
