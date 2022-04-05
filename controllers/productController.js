const productService = require('../services/productService');

const getAll = async (_req, res) => {
  try {
    const products = await productService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getById = async (_req, res) => {
  try {
    const product = await productService.getById();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAll,
  getById,
};
