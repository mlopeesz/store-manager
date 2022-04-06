const express = require('express');
const productController = require('../controllers/productController');
const productValidation = require('../middlewares/productValidation');

const router = express.Router();

router.get('/', productController.getAll);

router.get('/:id', productController.getById);

router.post('/', productValidation, productController.create);

router.put('/:id', productValidation, productController.update);

router.delete('/:id', productController.remove);

module.exports = router;
