const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello this is updated response from a server!!");
});

app.listen(3000, () => {
  console.log("App running on port 3000...");
});
