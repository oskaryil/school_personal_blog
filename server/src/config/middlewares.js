const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const express = require("express");
const cors = require("cors");
const mongooseConnection = require("./db");
const constants = require("./constants");

const isTest = process.env.NODE_ENV === "test";
const isDev = process.env.NODE_ENV === "development";

module.exports = app => {
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cors());
  if (isDev && !isTest) {
    app.use(morgan("dev"));
    // expressWinston.requestWhitelist.push("body");
    // expressWinston.responseWhitelist.push("body");
    // app.use(
    //   expressWinston.logger({
    //     winstonInstance,
    //     meta: true,
    //     msg:
    //       "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
    //     colorStatus: true
    //   })
    // );
  }
};
