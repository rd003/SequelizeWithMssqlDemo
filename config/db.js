const { Sequelize } = require("sequelize");
const personModel = require("../models/person.model");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.SQL_PORT,
    dialect: process.env.DIALECT,
    dialectOptions: {
      options: { encrypt: false },
    },
  }
);

const db = {};
db.Person = personModel(sequelize);
db.sequelize = sequelize;
// sync all models with database
/*This checks what is the current state of the table in the database (which columns it has, 
  what are their data types, etc),
 and then performs the necessary changes in the table to make it match the model.*/
sequelize.sync({ alter: true });

module.exports = db;
