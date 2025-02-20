const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server working");
});

app.listen(port, () => console.log(`Server running at port ${3000}`));
