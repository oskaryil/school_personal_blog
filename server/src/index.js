const express = require("express");
const bodyParser = require("body-parser");
const constants = require("./config/constants");
const middlewaresConfig = require("./config/middlewares");
const ApiRoutes = require("./routes");

const app = express();

middlewaresConfig(app);

app.use("/api", ApiRoutes);

// We need this to make sure we don't run a second instance
if (!module.parent) {
  app.listen(constants.PORT, err => {
    if (err) {
      console.error("Cannot run");
    } else {
      console.log(`
        Yep this is working 🍺
        App listen on port: ${constants.PORT} 🍕
        Env: ${process.env.NODE_ENV} 🦄
      `);
    }
  });
}

module.exports = app;
