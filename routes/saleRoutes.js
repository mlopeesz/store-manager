const express = require('express');
const saleController = require('../controllers/saleController');
const saleValidation = require('../middlewares/saleValidation');

const router = express.Router();

router.get('/', saleController.getAll);

router.get('/:id', saleController.getById);

router.post('/', saleValidation, saleController.create);

router.put('/:id', saleValidation);

module.exports = router;
