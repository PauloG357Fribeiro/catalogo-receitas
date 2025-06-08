const express = require('express');
const router = express.Router();
const receitaController = require('../controllers/receitaController');

router.get('/', receitaController.getReceitas);
router.post('/', receitaController.createReceita);
router.get('/:id', receitaController.getReceitaById);
router.put('/:id', receitaController.updateReceita);
router.delete('/:id', receitaController.deleteReceita);

module.exports = router;