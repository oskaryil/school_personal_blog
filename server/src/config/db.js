const mongoose = require("mongoose");
const constants = require("./constants");

mongoose.Promise = global.Promise;
mongoose.set("debug", process.env.MONGOOSE_DEBUG);

// Connect the db with the url provide
try {
  mongoose.connect(constants.MONGO_URL, { useMongoClient: true });
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}

module.exports = mongoose.connection;
