const productService = require('../services/productService');

const getAll = async (_req, res) => {
  try {
    const products = await productService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getById(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).send({ message: 'Product not found' });
  }
};

module.exports = {
  getAll,
  getById,
};
