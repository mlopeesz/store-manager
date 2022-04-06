const productModel = require('../models/productModel');
const { searchProducts } = require('../helpers/search');

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
        return { code: 404, body: { message: 'Product not found' } };
      }
      return { code: 200, body: product };
};

const create = async ({ name, quantity }) => {
  const search = await searchProducts(name);
  if (search) return { code: 409, body: { message: 'Product already exists' } };
  const createResult = await productModel.create({ name, quantity });
  return { code: 201, body: createResult };
};

module.exports = {
  getAll,
  getById,
  create,
};
