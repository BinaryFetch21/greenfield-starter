const express = require("express");
const app = express();
const path = require("path");

const port = 3000;


app.use(express.static(path.join(__dirname, "../Views/Client/public")));

app.get('/',(req, res) => {
  res.sendFile('index.html');
})

app.get("/signin", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/signup", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => {
  console.log(`iShoes is available on http://localhost:${port}`);
});
