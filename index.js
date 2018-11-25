const express = require("express");
const port = 5000;
const path = require("path");

const app = express();

app.use(express.static("public"));

app
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
  })
  .listen(port);
