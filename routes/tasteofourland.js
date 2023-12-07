const express = require('express');
const router = express.Router();
const tasteOfOurLandController = require('../controllers/tasteOfOurLandController');

router.post('/', tasteOfOurLandController.createAddress);
router.get('/', tasteOfOurLandController.getAllAddresses);
router.get('/:address_id', tasteOfOurLandController.getAddressById);
router.patch('/:address_id', tasteOfOurLandController.updateAddress);
router.delete('/:address_id', tasteOfOurLandController.deleteAddress);

module.exports = router;