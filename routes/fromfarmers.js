const express = require('express');
const router = express.Router();
const fromFarmersController = require('../controllers/fromFarmersController');

router.post('/', fromFarmersController.createAddress);
router.get('/', fromFarmersController.getAllAddresses);
router.get('/:address_id', fromFarmersController.getAddressById);
router.patch('/:address_id', fromFarmersController.updateAddress);
router.delete('/:address_id', fromFarmersController.deleteAddress);

module.exports = router;
