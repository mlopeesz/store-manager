const getAllQuery = `
SELECT SP.sale_id AS saleId, SP.product_id AS productId, SP.quantity, S.date
FROM StoreManager.sales_products SP
INNER JOIN StoreManager.sales S
ON S.id = SP.sale_id
ORDER BY SP.sale_id, SP.product_id;`;

const getByIdQuery = `
SELECT SP.product_id AS productId, SP.quantity, S.date
FROM StoreManager.sales_products SP
INNER JOIN StoreManager.sales S
ON S.id = SP.sale_id
WHERE SP.sale_id = ?
ORDER BY SP.sale_id, SP.product_id;`;

const salesProducts = `INSERT INTO StoreManager.sales_products 
(sale_id, product_id, quantity) 
VALUES (?,?,?)`;

module.exports = {
  getAllQuery,
  getByIdQuery,
  salesProducts,
};
