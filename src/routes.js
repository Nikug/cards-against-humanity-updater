const action = require("./actions");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("PONG!");
  });

  app.post("/github", (req, res) => {
    console.log("Got info from Github!", res.data);
    action(res.data);
  });
};
