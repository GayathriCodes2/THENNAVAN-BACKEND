// fromFarmersRoutes.js
const express = require('express');
const router = express.Router();
const fromFarmersController = require('../controllers/fromFarmersController');

router.post('/fromfarmers', fromFarmersController.createFromFarmers);
router.get('/fromfarmers', fromFarmersController.getAllFromFarmers);
router.get('/fromfarmers/:fromFarmers_id', fromFarmersController.getFromFarmersById);
router.put('/fromfarmers/:fromFarmers_id', fromFarmersController.updateFromFarmers);
router.delete('/fromfarmers/:fromFarmers_id', fromFarmersController.deleteFromFarmers);

module.exports = router;
