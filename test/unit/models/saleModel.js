const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/saleModel');

describe('Testes - Sale Model', () => {
  const fakeProductSold = [
    {
      productId: 1,
      quantity: 10
    }
  ]

  before(() => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }])
  })

  after(() => {
    connection.execute.restore();
  })

  it('Teste retorna Sale', async () => {
    const result = await saleModel.create(fakeProductSold);

    expect(result.id).to.be.equals(1);
  })
})
