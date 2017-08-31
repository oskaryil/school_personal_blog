const devConfig = {
  apiURL: "http://localhost:4000/api"
};

const defaultConfig = {};

const prodConfig = {
  apiURL: "http://localhost:4000/api"
};

const envConfig = env => {
  switch (env) {
    case "development":
      return devConfig;
    case "production":
      return prodConfig;
    default:
      return prodConfig;
  }
};

export default envConfig(process.env.NODE_ENV);
