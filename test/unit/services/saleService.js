const sinon = require("sinon");
const { expect } = require("chai");
const saleModel = require("../../../models/saleModel");
const saleService = require("../../../services/saleService");

// ===================== GET ALL ===================

describe("Testa função getAll - saleService", () => {
  const getAllSales = [
    {
      saleId: 1,
      date: "2022-04-04T00:41:29.000Z",
      productId: 1,
      quantity: 10,
    },
    {
      saleId: 2,
      date: "2022-04-04T00:41:29.000Z",
      productId: 1,
      quantity: 10,
    },
  ];

  before(() => {
    sinon.stub(saleModel, "getAll").resolves(getAllSales);
  });

  after(() => {
    saleModel.getAll.restore();
  });

  it("Retorna todas as vendas", async () => {
    const resultgetAll = await saleService.getAll();
    expect(resultgetAll).to.be.deep.equal(getAllSales);
  });
});
