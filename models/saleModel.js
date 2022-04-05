const connection = require('./connection');
const salesQueries = require('./salesQueries');

const getAll = async () => {
  const [sales] = await connection.execute(salesQueries.getAllQuery);
  return sales;
};

const getById = async (id) => {
  const [salesById] = await connection.execute(salesQueries.getByIdQuery, [id]);
  return salesById[id];
};

module.exports = {
    getAll,
    getById,
};
