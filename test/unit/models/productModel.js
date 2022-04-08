const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../models/productModel');
const connection = require('../../../models/connection');

describe('Testes - ProductModel', () => {

  const fakeProduct = {
    name: 'produto A',
    quantity: 10
  }

  describe('Teste novo produto', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    })
    after(() => {
      connection.execute.restore();
    })
    it('Retorna novo produto', async () => {
      const result = await productModel.create(fakeProduct)
      expect(result.id).to.be.equals(1);
    })
  });
})
