const productModel = require('../models/productModel');
const saleModel = require('../models/saleModel');

const searchProducts = async (name, id) => {
  const products = await productModel.getAll();
  if (name) {
    const search = products.some((product) => product.name === name);
    return search;
  }

  const search = products.some((product) => product.id === id);
  return search;
};

const searchSales = async (name, id) => {
  const allSales = await saleModel.getAll();
  if (name) {
    const search = allSales.some((sale) => sale.name === name);
    return search;
  }

  const search = allSales.some((sale) => sale.saleId === id);
  return search;
};

module.exports = { 
  searchProducts,
  searchSales,
};