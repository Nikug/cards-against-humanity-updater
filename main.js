require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./src/routes")(app);
const port = process.env.PORT || 3010;

app.listen(port, () => {
  console.log("Server started on port", port);
});
