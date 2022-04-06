const express = require('express');
const productController = require('../controllers/productController');
const productValidation = require('../middlewares/productValidation');

const router = express.Router();

router.get('/', productController.getAll);

router.get('/:id', productController.getById);

router.post('/', productValidation);

router.put('/:id', productValidation);

module.exports = router;
