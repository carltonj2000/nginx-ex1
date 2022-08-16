const os = require("os");
const hostname = os.hostname();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const message = "Hello World! Hosted On: " + hostname;
  res.send(message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
