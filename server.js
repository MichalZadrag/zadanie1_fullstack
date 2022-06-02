const cors = require('cors');
const express = require("express");
const app = express();
app.use(cors());

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});