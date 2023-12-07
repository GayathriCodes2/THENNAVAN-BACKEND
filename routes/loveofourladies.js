const express = require('express');
const router = express.Router();
const loveOfOurLadiesController = require('../controllers/loveOfOurLadiesController');

router.post('/', loveOfOurLadiesController.createAddress);
router.get('/', loveOfOurLadiesController.getAllAddresses);
router.get('/:address_id', loveOfOurLadiesController.getAddressById);
router.patch('/:address_id', loveOfOurLadiesController.updateAddress);
router.delete('/:address_id', loveOfOurLadiesController.deleteAddress);

module.exports = router;