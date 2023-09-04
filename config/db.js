const { Sequelize } = require("sequelize");
const dbConfig = require("./database-config");
const personModel = require("../models/person.model");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  dialectOptions: {
    options: { encrypt: false },
  },
});

const db = {};
db.Person = personModel(sequelize);
db.sequelize = sequelize;
// sync all models with database
/*This checks what is the current state of the table in the database (which columns it has, 
  what are their data types, etc),
 and then performs the necessary changes in the table to make it match the model.*/
sequelize.sync({ alter: true });

module.exports = db;
