//Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
require("dotenv").config();

//27017 is the default mongoDB port
const uri = process.env.DBUri;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
//prolly change bottom to connection instead of mongoose.connection
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

module.exports = mongoose.connection;
