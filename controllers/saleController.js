const saleService = require('../services/saleService');

const getAll = async (_req, res) => {
  try {
    const products = await saleService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getById = async (req, res) => {
    const { id } = req.params;
    const { code, body } = await saleService.getById(id);
    return res.status(code).json(body);
};

module.exports = {
  getAll,
  getById,
};
