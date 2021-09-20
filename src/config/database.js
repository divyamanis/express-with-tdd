const mongoose = require("mongoose");
const config = require("./config");

module.exports = async function connection() {
  try {
    await mongoose.connect(config.mongo.url, config.mongo.options);
    console.log("connected to database." + config.mongo.url);
  } catch (error) {
    console.log(error, "could not connect to database.");
  }
};