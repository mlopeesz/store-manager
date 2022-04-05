const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    'SELECT * FROM StoreManager.sales',
  );
  return sales;
};

const getById = async (id) => {
  const [salesById] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?;',
    [id],
  );
  return salesById[id];
};

module.exports = {
    getAll,
    getById,
};
