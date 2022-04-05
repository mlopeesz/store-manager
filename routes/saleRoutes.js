const express = require('express');
const saleController = require('../controllers/saleController');

const router = express.Router();

router.get('/', saleController.getAll);

router.get('/:id', saleController.getById);

module.exports = router;
