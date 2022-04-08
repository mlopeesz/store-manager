const saleModel = require('../models/saleModel');
const productModel = require('../models/productModel');

const getAll = async () => {
  try {
      const sales = await saleModel.getAll();
      return sales;
    } catch (error) {
      console.log(error);
      throw new Error('Database problems');
    }
};

const getById = async (id) => {
      const sale = await saleModel.getById(id);

      if (sale.length === 0) {
        return { code: 404, body: { message: 'Sale not found' } };
      }
      return { code: 200, body: sale };
};

const create = async (salesArray) => {
  await Promise.all(salesArray.map(async (data) => {
    const product = await productModel.getById(data.productId);
    if (product.quantity < data.quantity) {
      throw new Error('Such amount is not permitted to sell');
    }
    product.quantity -= data.quantity;
    await productModel.update(product);
  }));
  
  const createSales = await saleModel.create(salesArray);
  return createSales;
};

module.exports = {
  getAll,
  getById,
  create,
};
