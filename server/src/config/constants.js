require("dotenv").config();

// const env = process.env.NODE_ENV || "development";

const devConfig = {
  MONGO_URL: process.env.MONGO_URL_DEV
};
const testConfig = {
  MONGO_URL: process.env.MONGO_URL_TEST
};
const prodConfig = {
  MONGO_URL: process.env.MONGO_URL_PROD
};

const defaultConfig = {
  PORT: process.env.PORT || 4000,
  ACCESS_TOKEN_EXPIRES: parseInt(process.env.ACCESS_TOKEN_EXPIRES, 10),
  JWT_SECRET: process.env.JWT_SECRET
};

function envConfig(env) {
  switch (env) {
    case "development":
      return devConfig;
    case "test":
      return testConfig;
    default:
      return prodConfig;
  }
}

module.exports = Object.assign(defaultConfig, envConfig(process.env.NODE_ENV));
