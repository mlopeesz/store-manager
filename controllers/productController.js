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
    const { id } = req.params;
    const { code, body } = await productService.getById(id);
    return res.status(code).json(body);
};

const create = async (req, res) => {
  const { name, quantity } = req.body;
  const { code, body } = await productService.create({ name, quantity });
  return res.status(code).json(body);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const { code, body } = await productService.update({ id: Number(id), name, quantity });
  return res.status(code).json(body);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { code, body } = await productService.remove(Number(id));
  return res.status(code).json(body);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
