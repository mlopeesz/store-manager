const sinon = require("sinon");
const { expect } = require("chai");
const productService = require("../../../services/productService");
const productController = require("../../../controllers/productController");

const req = {};
const res = {};

describe("Testa função getAll - productController", () => {
  const allProducts = [
    {
      id: 1,
      name: "Produto B",
      quantity: 2,
    },
    {
      id: 2,
      name: "Produto C",
      quantity: 2,
    },
  ];

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, "getAll").resolves(allProducts);
  });

  after(() => {
    productService.getAll.restore();
  });

  it("Retorna status 200 e todos os produtos", async () => {
    await productController.getAll(req, res);
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(allProducts)).to.be.true;
  });
});
