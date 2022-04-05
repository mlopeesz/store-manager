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

const getById = async () => {
  try {
      const product = await productModel.getById();
      return product;
    } catch (error) {
      console.log(error);
      throw new Error('Database problems');
    }
};

module.exports = {
  getAll,
  getById,
};
