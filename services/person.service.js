const db = require("../config/db");
const { QueryTypes } = require("sequelize");

const getAll = async () => {
  // return await db.Person.findAll();
  return await db.sequelize.query("select * from Person", {
    type: QueryTypes.SELECT,
  });
};

const findPersonById = async (id) => {
  // return await db.Person.findByPk(id);
  const result = await db.sequelize.query("select * from Person where id=:id", {
    replacements: {
      id: id,
    },
    type: QueryTypes.SELECT,
  });

  if (result.length > 0) {
    return result[0]; // Return the first object from the array
  } else {
    return null; // No matching record found
  }
};

const createPerson = async ({ Name, Email }) => {
  const result = await db.sequelize.query(
    "insert into Person(Name,Email) values(:name,:email); select SCOPE_IDENTITY() as Id; ",
    {
      replacements: {
        name: Name,
        email: Email,
      },
      type: QueryTypes.SELECT,
    }
  );
  return { Id: result[0].Id, Name, Email };
  // const newPerson = await db.Person.create({ Name, Email });
  // return newPerson;
};

const updatePerson = async ({ Id, Name, Email }) => {
  await db.Person.update(
    { Name, Email },
    {
      where: {
        Id: Id,
      },
    }
  );
  return { Id, Name, Email };
};

const deletePerson = async (Id) => {
  await db.Person.destroy({
    where: { Id: Id },
  });
};

module.exports = {
  getAll,
  findPersonById,
  createPerson,
  updatePerson,
  deletePerson,
};
