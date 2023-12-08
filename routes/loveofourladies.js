// loveOfOurLadiesRoutes.js
const express = require('express');
const router = express.Router();
const loveOfOurLadiesController = require('../controllers/loveOfOurLadiesController');

router.post('/loveofourladies', loveOfOurLadiesController.createLoveOfOurLadies);
router.get('/loveofourladies', loveOfOurLadiesController.getAllLoveOfOurLadies);
router.get('/loveofourladies/:loveOfOurLadies_id', loveOfOurLadiesController.getLoveOfOurLadiesById);
router.put('/loveofourladies/:loveOfOurLadies_id', loveOfOurLadiesController.updateLoveOfOurLadies);
router.delete('/loveofourladies/:loveOfOurLadies_id', loveOfOurLadiesController.deleteLoveOfOurLadies);

module.exports = router;
