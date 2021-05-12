const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://iShoes:iShoes@cluster0.a6hnw.mongodb.net/iShoes?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We are connected to MongoDB");
});
