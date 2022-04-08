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

const create = async (req, res) => {
  try {
    const sale = await saleService.create(req.body);
    return res.status(201).json(sale);
  } catch (err) {
    if (err) {
      return res.status(422).json({ message: err.message });
    }
    return res.status(404).json({ message: 'Sale not found' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const sales = req.body;
    const updateSales = await saleService.update(Number(id), sales);

    return res.status(200).json(updateSales);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
