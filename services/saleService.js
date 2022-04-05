const saleModel = require('../models/saleModel');

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

module.exports = {
  getAll,
  getById,
};
