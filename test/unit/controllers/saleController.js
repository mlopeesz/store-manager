const sinon = require("sinon");
const { expect } = require("chai");
const saleService = require("../../../services/saleService");
const saleController = require("../../../controllers/saleController");

const req = {};
const res = {};

// ===================== GET ALL ===================

describe("Testa função getAll - saleController", () => {
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
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(saleService, "getAll").resolves(getAllSales);
  });

  after(() => {
    saleService.getAll.restore();
  });

  it("Retorna status 200 e todas as vendas", async () => {
    await saleController.getAll(req, res);
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(getAllSales)).to.be.true;
  });
});
