const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return products;
};

const getById = async (id) => {
  const [productById] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [id],
  );
  return productById[0];
};

const create = async ({ name, quantity }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products(name, quantity) VALUES(?, ?)',
    [name, quantity],
  );
  return { id: insertId, name, quantity };
};

const update = async ({ id, name, quantity }) => {
  await connection.execute('UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?;',
  [name, quantity, id]);
  return { id, name, quantity };
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
