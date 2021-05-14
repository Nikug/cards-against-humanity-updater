require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes")(app);
const port = process.env.PORT || 3010;

app.listen(port, () => {
  console.log("Server started on port", port);
});
