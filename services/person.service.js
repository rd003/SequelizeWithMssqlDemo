const db = require("../config/db");

const getAll = async () => {
  return await db.Person.findAll();
};

const findPersonById = async (id) => {
  return await db.Person.findByPk(id);
};

const createPerson = async ({ Name, Email }) => {
  const newPerson = await db.Person.create({ Name, Email });
  return newPerson;
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
