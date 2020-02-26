const mongoose = require("mongoose");
const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_HOST = encodeURIComponent(config.dbHost);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
//const URI = 'mongodb+srv://armitage_user:G1V3NTUR4@armitage-m2xao.mongodb.net/test?retryWrites=true&w=majority'

mongoose
  .connect(MONGO_URI)
  .then(db => console.log("DB is connect"))
  .catch(err => console.error(err));

module.exports = mongoose;
