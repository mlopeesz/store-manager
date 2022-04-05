const productModel = require('../models/productModel');

const getAll = async () => {
  try {
      const products = await productModel.getAll();
      return products;
    } catch (error) {
      console.log(error);
      throw new Error('Database problems');
    }
};

const getById = async (id) => {
      const product = await productModel.getById(id);

      if (product === undefined) {
        return { code: 404, message: 'Product not found' };
      }
      return { code: 200, message: product };
};

module.exports = {
  getAll,
  getById,
};
