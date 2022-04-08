const connection = require('./connection');
const salesQueries = require('./salesQueries');

const getAll = async () => {
  const [sales] = await connection.execute(salesQueries.getAllQuery);
  return sales;
};

const getById = async (id) => {
  const [salesById] = await connection.execute(salesQueries.getByIdQuery, [id]);
  return salesById;
};

const create = async (salesArray) => {
  const items = [];
  const [querySales] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );

  await salesArray.forEach(({ productId, quantity }) => {
    connection.execute(salesQueries.salesProducts, [querySales.insertId, productId, quantity]);
    items.push({ productId, quantity });
  });

  return {
    id: querySales.insertId,
    itemsSold: items,
  };
};

module.exports = {
    getAll,
    getById,
    create,
};
