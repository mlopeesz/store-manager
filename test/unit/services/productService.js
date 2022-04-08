const sinon = require("sinon");
const { expect } = require("chai");
const productModel = require("../../../models/productModel");
const productService = require("../../../services/productService");

describe("Testa função getAll - ProductService", () => {
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
    sinon.stub(productModel, "getAll").resolves(allProducts);
  });

  after(() => {
    productModel.getAll.restore();
  });

  it("Retorna todos os produtos", async () => {
    const resultgetAll = await productService.getAll();
    expect(resultgetAll).to.be.deep.equal(allProducts);
  });
});
