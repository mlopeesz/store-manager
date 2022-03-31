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

module.exports = {
  getAll,
};
